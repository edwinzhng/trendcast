import csv

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
    with open('./data/websites/verge.csv', 'rb') as f_in, open("./data/websites/vergeFinal.csv", "wb") as f_out:
        reader = csv.reader(f_in, delimiter=",")
        writer = csv.writer(f_out, delimiter=",")
        keyword = ['blockchain', 'crypto', 'cryptocurrency', 'cryptocurrencies', 'bitcoin', 'btc', 'eth', 'ethereum', 'ether', 'ltc', 'litecoin', 'ripple', 'xrp'
        'bcc']
        #need more keywords
        # keyword2 = ['ai', 'deep', 'learning', 'intelligence', 'artifitial', 'smart']
        #need more keywords
        for row in reader:
            if row[1] in keyword:
                writer.writerow(row)
            else:
                continue

if __name__ == '__main__':
    # reformat()
    remove_lines()
