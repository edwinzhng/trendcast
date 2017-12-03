import csv
import operator

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
            if (row[1]).lower() in keyword:
                row[1] = row[1].lower()
                writer.writerow(row)
            else:
                continue

def groupByType():
    with open('./data/websites/Edited/Artifitial_Intelligence.csv', 'rb') as f_in1, open('./data/websites/Edited/Block_chain.csv', 'rb') as f_in2:
    
        file1 = csv.reader(f_in1, delimiter = ",")
        file2 = csv.reader(f_in2, delimiter = ",")
            
        file_list1 = list(file1)
        file_list1.sort(key = operator.itemgetter(1))
        file_list2 = list(file2)
        file_list2.sort(key = operator.itemgetter(1))

    with open('./data/websites/Edited/Artifitial_Intelligence.csv', 'wb') as f_out1, open('./data/websites/Edited/Block_chain.csv', 'wb') as f_out2:
        
        file_out1 = csv.writer(f_out1)
        file_out1.writerows(file_list1)
        file_out2 = csv.writer(f_out2)
        file_out2.writerows(file_list2)
 
def remove_lines1():
    with open('./data/websites/verge2.csv', 'rb') as f_in1, open ('./data/websites/ai.csv', 'rb') as f_in2, open ('./data/websites/blockchain.csv', 'rb') as f_in3, open ('./data/websites/cloud.csv', 'rb') as f_in4, open ('./data/websites/engadget.csv', 'rb') as f_in5, open ('./data/websites/iot.csv', 'rb') as f_in6, open ('./data/websites/techcrunch.csv', 'rb') as f_in7, open ('./data/websites/verge.csv', 'rb') as f_in8, open ('./data/websites/wired.csv', 'rb') as f_in9, open ('./data/websites/Edited/Artifitial_Intelligence.csv', 'rb') as f_in10, open ('./data/websites/Edited/Artifitial_Intelligence.csv', 'wb') as f_out1:

        #need more keywords
        keyword_ai = ['ai', 'deep', 'learning', 'intelligence', 'artificial', 'smart', 'platforms', 'platform', 'natural', 'language', 'speech', 'recognision', 'biometrics', 'analysis', 'image', 'analytics', 'automation', 'robot', 'robotic', 'optimized', 'virtual', 'management', 'nlp', 'training']

        filter(f_in1, f_out1, keyword_ai)
        filter(f_in2, f_out1, keyword_ai)
        filter(f_in3, f_out1, keyword_ai)
        filter(f_in4, f_out1, keyword_ai)
        filter(f_in5, f_out1, keyword_ai)
        filter(f_in6, f_out1, keyword_ai)
        filter(f_in7, f_out1, keyword_ai)
        filter(f_in8, f_out1, keyword_ai)
        filter(f_in9, f_out1, keyword_ai)


def remove_lines2():
    with open('./data/websites/verge2.csv', 'rb') as f_in1, open ('./data/websites/ai.csv', 'rb') as f_in2, open ('./data/websites/blockchain.csv', 'rb') as f_in3, open ('./data/websites/cloud.csv', 'rb') as f_in4, open ('./data/websites/engadget.csv', 'rb') as f_in5, open ('./data/websites/iot.csv', 'rb') as f_in6, open ('./data/websites/techcrunch.csv', 'rb') as f_in7, open ('./data/websites/verge.csv', 'rb') as f_in8, open ('./data/websites/wired.csv', 'rb') as f_in9, open ('./data/websites/Edited/Block_chain.csv', 'rb') as f_in11, open ('./data/websites/Edited/Block_chain.csv', 'wb') as f_out2:

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


        
if __name__ == '__main__':
    # reformat()
    remove_lines1()
    remove_lines2()
    groupByType()
