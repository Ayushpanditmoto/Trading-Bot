import zipfile

file = zipfile.ZipFile(r'./trading-bot-datasets/trading-bot-datasets.zip')

file.extractall()

print("extaction success")