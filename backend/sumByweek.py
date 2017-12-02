import csv
import datetime


entryNum =0
totalSum=0
keywords = []

def reformat():
    with open('./', 'rb') as f_in, open("./", "wb") as f_out:
        reader = csv.reader(f_in, delimiter=" ")
        writer = csv.writer(f_out, delimiter=",")
        for row in reader:
            del row[1]
            writer.writerow(row)

def remove_lines():
    with open('./data/blockchain.csv', 'rb') as f_in, open("./data/blockchain1.csv", "wb") as f_out:
        #with open('./data/verge.csv', 'rb') as f_in, open("./data/vergeFilter.csv", "wb") as f_out:
        reader = csv.reader(f_in, delimiter=",")
        writer = csv.writer(f_out, delimiter=",")
        keywords = ['blockchain', 'crypto', 'cryptocurrency', 'cryptocurrencies', 'bitcoin', 'btc', 'eth', 'ethereum', 'ether', 'ltc', 'litecoin', 'ripple', 'xrp'
        'bcc']
        for row in reader:
            if row[1] in keywords:
                writer.writerow(row)
                #entryNum+= 1
                #totalSum = totalSum+row[2]
            else:
                continue
def countKey():
    with open('./data/blockchain1.csv', 'rb') as f_in, open("./data/blockchainFinal.csv", "wb") as f_out:
        reader = csv.reader(f_in, delimiter=",")
        writer = csv.writer(f_out, delimiter=",")
        sumValue = 0
        Preweek = 0
        weeklyCount =0
        for row in reader:
            date= row[0];
            year,month,day = date.split("-")
            week = datetime.date(int(year), int(month),int( day)).strftime("%V")
            print(week)
            if week == Preweek:
                sumValue = sumValue+float(row[2])
                weeklyCount+= 1
            else:
                writer.writerow((week,"bitcoin",sumValue**(1.2)))
                sumValue=float(row[2])
                Preweek=week
                weeklyCount=0

if __name__ == '__main__':
    # reformat()
    remove_lines()
    countKey()
