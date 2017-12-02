# scrape Google News for relevant tech articles
from bs4 import BeautifulSoup
from dateutil import parser
from textblob import TextBlob
from newspaper import Article
import urllib.request
import time
import requests
import pyrebase
import csv
import newspaper

def scrape_news(website, extension, begin, end, write_file, tag, classname, linkclass, date_start):
    for i in range(begin, end):
        opener = urllib.request.build_opener()
        # opener.addheaders = [('User-agent', 'Mozilla/5.0')]
        url = website + str(i)
        soup = BeautifulSoup(opener.open(url), 'lxml')

        for link in soup.find_all(tag, class_ = classname):
            url = link.find("a", class_ = linkclass)
            # print(url.get('href'))
            try:
                soup2 = BeautifulSoup(opener.open(extension + url.get('href')), 'lxml')
                article = Article(extension + url.get('href'))
                article.download()
                try:
                    article.parse()
                    article.nlp()

                    # get keywords
                    keywords = article.keywords
                    try:
                        print(article.keywords)
                    except:
                        continue

                    # get date
                    date = article.publish_date
                    if date is None:
                        try:
                            date = parser.parse(url.get('href')[date_start:date_start+9])
                        except:
                            date = parser.parse(soup2.find("time", class_ = "date-mdy").text)
                    try:
                        print(date)
                    except:
                        continue

                    # get text
                    text = article.text
                    blob = TextBlob(text)
                    polarity = blob.sentiment.polarity
                    try:
                        print(polarity)
                    except:
                        continue

                    with open(write_file, "a") as output:
                        for word in keywords:
                            try:
                                line = str(date) + "," + str(word) + "," + str(polarity)
                                output.write(line + "\n")
                            except:
                                continue

                    time.sleep(0.1)
                except:
                    continue
            except:
                continue
        print("current page: " + str(i))
        time.sleep(1.5)

def scrape_verge():
    url = "http://www.theverge.com/tech/archives/"
    extension = ""
    begin = 1
    end = 2848
    write_file = "./data/websites/verge.csv"
    tag = "li"
    classname = "p-basic-article-list__node"
    linkclass = ""
    date_start = 25
    scrape_news(url, extension, begin, end, write_file, tag, classname, linkclass, date_start)

def scrape_engadget():
    # already scraped: https://www.engadget.com/topics/tomorrow/page/
    url = "https://www.engadget.com/topics/gear/page/"
    extension = "https://www.engadget.com"
    begin = 1
    end = 1410
    write_file = "./data/websites/engadget.csv"
    tag = "article"
    classname = "o-hit "
    linkclass = "o-hit__link"
    date_start = 1
    scrape_news(url, extension, begin, end, write_file, tag, classname, linkclass, date_start)

def scrape_techcrunch():
    # already scraped: https://techcrunch.com/apps/page/
    url = "https://techcrunch.com/startups/page/"
    extension = ""
    begin = 316
    end = 500
    write_file = "./data/websites/techcrunch.csv"
    tag = "h2"
    classname = "post-title"
    linkclass = ""
    date_start = 1
    scrape_news(url, extension, begin, end, write_file, tag, classname, linkclass, date_start)

def scrape_techforge_blockchain_ai():
    # already scraped: https://www.blockchaintechnology-news.com/page/, https://www.artificialintelligence-news.com/page/
    url = "https://www.artificialintelligence-news.com/page/"
    extension = ""
    begin = 1
    end = 3
    write_file = "./data/websites/ai.csv"
    tag = "li"
    classname = "infinite-post"
    linkclass = ""
    date_start = 1
    scrape_news(url, extension, begin, end, write_file, tag, classname, linkclass, date_start)

def scrape_techforge_iot_cloud():
    # already scraped: https://www.iottechnews.com/news/?page=, https://www.cloudcomputing-news.net/news/?page=
    url = "https://www.cloudcomputing-news.net/news/?page="
    extension = "https://www.cloudcomputing-news.net/"
    begin = 1
    end = 129
    write_file = "./data/websites/cloud.csv"
    tag = "article"
    classname = ""
    linkclass = ""
    date_start = 1
    scrape_news(url, extension, begin, end, write_file, tag, classname, linkclass, date_start)

def scrape_wired():
    # already scraped:
    url = "https://www.wired.com/category/business/page/"
    extension = "https://www.wired.com/"
    begin = 125
    end = 129
    write_file = "./data/websites/wired.csv"
    tag = "li"
    classname = "archive-item-component"
    linkclass = "archive-item-component__link"
    date_start = 1
    scrape_news(url, extension, begin, end, write_file, tag, classname, linkclass, date_start)

if __name__ == '__main__':
    choice = input("1 - TheVerge, 2 - Engadget, 3 - TechCrunch, 4 - TechForge Blockchain/AI, 5 - TechForge IoT/Cloud, 6 - Wired: ")
    if choice  == '1':
        scrape_verge()
    elif choice == '2':
        scrape_engadget()
    elif choice == '3':
        scrape_techcrunch()
    elif choice == '4':
        scrape_techforge_blockchain_ai()
    elif choice == '5':
        scrape_techforge_iot_cloud()
    elif choice == '6':
        scrape_wired()
