import pandas as pd

def extract_by_index(df, index_column, index):
  dict = {}
  keys = df.columns.tolist()
  df = df[df[index_column] == index]
  for i in len(keys):
    dict[keys[i]] = df.values[0][i]
  return dict

xls = pd.ExcelFile('aracip_2018.xlsx')