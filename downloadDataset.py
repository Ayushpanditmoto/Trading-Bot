import pandas as pd
import os
import opendatasets as od
# Assign the Kaggle data set URL into variable


##change this to the preferred dataset url.

dataset = 'https://www.kaggle.com/datasets/gratusricharda/trading-bot-datasets'




od.download(dataset)