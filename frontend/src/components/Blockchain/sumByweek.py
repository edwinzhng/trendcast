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

def countKey():
    with open('./data/websites/Edited/Block_chain_timeOrdered.csv', 'rb') as f_in, open("./data/websites/Edited/block_chainFinal.csv", "wb") as f_out:
        reader = csv.reader(f_in, delimiter=",")
        writer = csv.writer(f_out, delimiter=",")
        sumValue = 0
        Preweek = 0
        weeklyCount =0
        for row in reader:
            date= row[0];
            year,month,day = date.split("/")
            week = datetime.date(int(year), int(month),int( day)).strftime("%V")
            #print(week)
            if week == Preweek:
                sumValue = sumValue+float(row[2])
                weeklyCount+= 1
            else:
                if sumValue<=0:
                    writer.writerow((year,week,"Cryptocurrency",0,weeklyCount))
                    sumValue=float(row[2])
                    Preweek=week
                    weeklyCount=1
                else:
                    writer.writerow((year,week,"Cryptocurrency",(int)((sumValue*100)/(weeklyCount**(0.8))),weeklyCount))
                    sumValue=float(row[2])
                    Preweek=week
                    weeklyCount=1

def averageWeek():
    with open('./data/websites/Edited/block_chainFinal.csv', 'rb1') as f_in1, open("./data/websites/Edited/block_chainFinal2.csv", "wb1") as f_out1:
        reader1= csv.reader(f_in1, delimiter=",")
        writer1 = csv.writer(f_out1, delimiter=",")
        preSum = 0
        #weekNum = 52
        #year = 2013
        max =0
        for row in reader1:
            value = int (row[3])
            if value>=max:
                max=value
                print("hello")
        print(max)
    with open('./data/websites/Edited/block_chainFinal.csv', 'rb1') as f_in1, open("./data/websites/Edited/block_chainFinal2.csv", "wb1") as f_out1:
        reader1 = csv.reader(f_in1, delimiter=",")
        writer1 = csv.writer(f_out1, delimiter=",")
        for row in reader1:
                writer1.writerow((row[0],row[1],"Cryptocurrency",(float(row[3])/float(max))*100.0,row[4]))

if __name__ == '__main__':
    # reformat()
    countKey()
    averageWeek()
