import csv
import re
keywords = []
# keywords2 = []

def reformat():
    with open('./', 'rb') as f_in, open("./", "wb") as f_out:
        reader = csv.reader(f_in, delimiter=" ")
        writer = csv.writer(f_out, delimiter=",")
        for row in reader:
            del row[1]
            writer.writerow(row)

def remove_lines():
    with open('./wired.csv', 'rb') as f_in, open("./wiredClean.csv", "wb") as f_out:
        reader = csv.reader(f_in, delimiter=",")
        writer = csv.writer(f_out, delimiter=",")
        keyword = ['blockchain', 'crypto', 'cryptocurrency', 'cryptocurrencies', 'bitcoin', 'btc', 'eth', 'ethereum', 'ether', 'ltc', 'litecoin', 'ripple', 'xrp'
        'bcc']
        #need more keywords
        # keyword2 = ['ai', 'deep', 'learning', 'intelligence', 'artifitial', 'smart']
        #need more keywords
        for row in reader:
            date= row[0]
            #re.split('; |, |\*|\n',date)
            year,month,day,time= date.replace(' ','-').split("-")
            string = year +"-" + month + "-"+ day
            writer.writerow((string,row[1],row[2]))
if __name__ == '__main__':
    # reformat()
    remove_lines()
