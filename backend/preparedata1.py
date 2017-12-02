import csv

keywords1 = []
keywords2 = []

def reformat():
    with open('./', 'rb') as f_in, open("./", "wb") as f_out:
        reader = csv.reader(f_in, delimiter=" ")
        writer = csv.writer(f_out, delimiter=",")
        for row in reader:
            del row[1]
            writer.writerow(row)

def filter(f_in, f_out, keyword):
    reader = csv.reader(f_in, delimiter=",")
    writer = csv.writer(f_out, delimiter=",")

    for row in reader:
            if row[1] in keyword:
                writer.writerow(row)
            else:
                continue

def remove_lines1():
    with open('./data/websites/verge2.csv', 'rb') as f_in1, open ('./data/websites/ai.csv', 'rb') as f_in2, open ('./data/websites/blockchain.csv', 'rb') as f_in3, open ('./data/websites/cloud.csv', 'rb') as f_in4, open ('./data/websites/engadget.csv', 'rb') as f_in5, open ('./data/websites/iot.csv', 'rb') as f_in6, open ('./data/websites/techcrunch.csv', 'rb') as f_in7, open ('./data/websites/verge.csv', 'rb') as f_in8, open("./data/websites/verge2.csv", "rb") as f_in9, open ('./data/websites/wired.csv', 'rb') as f_in10, open ('./data/websites/Edited/Artifitial_Intelligence.csv', 'wb') as f_out1:

        #need more keywords
        keyword_ai = ['ai', 'deep', 'learning', 'intelligence', 'artifitial', 'smart']

        filter(f_in1, f_out1, keyword_ai)
        filter(f_in2, f_out1, keyword_ai)
        filter(f_in3, f_out1, keyword_ai)
        filter(f_in4, f_out1, keyword_ai)
        filter(f_in5, f_out1, keyword_ai)
        filter(f_in6, f_out1, keyword_ai)
        filter(f_in7, f_out1, keyword_ai)
        filter(f_in8, f_out1, keyword_ai)
        filter(f_in9, f_out1, keyword_ai)
        filter(f_in10, f_out1, keyword_ai)

def remove_lines2():
    with open('./data/websites/verge2.csv', 'rb') as f_in1, open ('./data/websites/ai.csv', 'rb') as f_in2, open ('./data/websites/blockchain.csv', 'rb') as f_in3, open ('./data/websites/cloud.csv', 'rb') as f_in4, open ('./data/websites/engadget.csv', 'rb') as f_in5, open ('./data/websites/iot.csv', 'rb') as f_in6, open ('./data/websites/techcrunch.csv', 'rb') as f_in7, open ('./data/websites/verge.csv', 'rb') as f_in8, open("./data/websites/verge2.csv", "rb") as f_in9, open ('./data/websites/wired.csv', 'rb') as f_in10, open ('./data/websites/Edited/Block_chain.csv', 'wb') as f_out2:

        #need more keywords
        keyword_bc = ['blockchain', 'crypto', 'cryptocurrency', 'cryptocurrencies', 'bitcoin', 'btc', 'eth', 'ethereum', 'ether', 'ltc', 'litecoin', 'ripple', 'xrp'
       'bcc']

        filter(f_in1, f_out2, keyword_bc)
        filter(f_in2, f_out2, keyword_bc)
        filter(f_in3, f_out2, keyword_bc)
        filter(f_in4, f_out2, keyword_bc)
        filter(f_in5, f_out2, keyword_bc)
        filter(f_in6, f_out2, keyword_bc)
        filter(f_in7, f_out2, keyword_bc)
        filter(f_in8, f_out2, keyword_bc)
        filter(f_in9, f_out2, keyword_bc)
        filter(f_in10, f_out2, keyword_bc)




if __name__ == '__main__':
    # reformat()
    remove_lines1()
    remove_lines2()
