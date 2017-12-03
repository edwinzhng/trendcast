import csv 

def parser():
	with open('./data/websites/Edited/Block_chain.csv','rb') as Block_chain, open('./data/websites/Edited/Artifitial_Intelligence.csv', 'rb') as AI:
		
		blockchain = csv.reader(Block_chain, delimiter = ",")
		Ai = csv.reader(AI, delimiter = ",")

		with open('./data/websites/Edited/CryptoCurrencies/bitcoin.csv','w+') as bitcoin, open('./data/websites/Edited/CryptoCurrencies/ethereum.csv','w+') as ethereum, open('./data/websites/Edited/CryptoCurrencies/litecoin.csv','w+') as litecoin:
			bitcoin1 = csv.writer(bitcoin, delimiter= ",")
			ethereum1 = csv.writer(ethereum, delimiter= ",")
			litecoin1 = csv.writer(litecoin, delimiter=",")
	
			for row in blockchain:
				if row[1] == "bitcoin":
					bitcoin1.writerow(row)
				elif row[1] == "ethereum":
					ethereum1.writerow(row)
				elif row[1] == "litecoin":
					litecoin1.writerow(row)
				else : continue
def parser1():
	with open('./data/websites/Edited/Block_chain.csv','rb') as Block_chain, open('./data/websites/Edited/Artifitial_Intelligence.csv', 'rb') as AI:
		
		blockchain = csv.reader(Block_chain, delimiter = ",")
		Ai = csv.reader(AI, delimiter = ",")

		with open('./data/websites/Edited/AITechs/deepLearning.csv','w+') as deepLearning, open('./data/websites/Edited/AITechs/naturalLanguageGeneration.csv','w+') as nlg, open('./data/websites/Edited/AITechs/speechRecognition.csv','w+') as speechRec, open('./data/websites/Edited/AITechs/virtualAgentRob.csv','w+') as virtualAR:
			deeplearning1 = csv.writer(deepLearning, delimiter=",")
			nlg1 = csv.writer(nlg, delimiter=",")
			speechRec1 = csv.writer(speechRec, delimiter=",")
			virtualAR1 = csv.writer(virtualAR, delimiter=",")

			for row in Ai:
				if row[1] == "deep" or row[1] == "learning":
					row[1] = "deep_learning"
					deeplearning1.writerow(row)
				elif row[1] == "natural" or row[1] == "language" or row[1] == "generation":
					row[1] = "natural_language_generation"
					nlg1.writerow(row)
				elif row[1] == "speech" or row[1] == "recognition":
					row[1] = "speech_recognition"
					speechRec1.writerow(row)
				elif row[1] == "virtual" or row[1] == "agent" or row[1] == "robot":
					row[1] = "virtual_agent_and_robot"
					virtualAR1.writerow(row)
				else: continue


def parser2():
	with open('./data/websites/Edited/Block_chain.csv','rb') as Block_chain, open('./data/websites/Edited/Artifitial_Intelligence.csv', 'rb') as AI:
		
		blockchain = csv.reader(Block_chain, delimiter = ",")
		Ai = csv.reader(AI, delimiter = ",")

		with open('./data/websites/Edited/AITechs/machineLearningPlat.csv','w+') as mlp, open('./data/websites/Edited/AITechs/AI_OptimizedHW.csv','w+') as aiHW, open('./data/websites/Edited/AITechs/decisionManagement.csv','w+') as decmanage, open('./data/websites/Edited/AITechs/biometrics.csv','w+') as biome, open('./data/websites/Edited/AITechs/textanalytic.csv','w+') as textana:
			mlp1 = csv.writer(mlp, delimiter=",")
			aiHW1 = csv.writer(aiHW, delimiter=",")
			decmanage1 = csv.writer(decmanage, delimiter=",")
			biome1 = csv.writer(biome, delimiter=",")
			textana1 = csv.writer(textana,delimiter =",")

			for row in Ai:
				if row[1] == "machine" or row[1] == "learning" or row[1] == "platform":
					row[1] = "machin_learning_platform"
					mlp1.writerow(row)
				elif row[1] == "ai" or row[1] == "optimization" or row[1] == "hardware":
					row[1] = "ai_optimizedHW"
					aiHW1.writerow(row)
				elif row[1] == "decision" or row[1] == "management":
					row[1] = "decision_management"
					decmanage1.writerow(row)
				elif row[1] == "biometrics":
					biome1.writerow(row)
				elif row[1] == "text" or row[1] == "analytic":
					row[1] = "text_analytic"
					textana1.writerow(row)
				else: continue

if __name__ == '__main__':
	parser()
	parser1()
	parser2()

			


		

