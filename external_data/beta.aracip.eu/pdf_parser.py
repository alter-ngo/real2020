import camelot
import pandas as pd
import numpy as np
from os import walk
import json


def extract_specific_dataframe(code, tables):
    for table_index in range(len(tables)):
        if code in tables[table_index].df.values[0][0]:
            # Concatenate fragments of a table which spans multiple pages
            current_table_index = table_index + 1
            current_table = tables[table_index].df
            while tables[current_table_index].df.values[0][0][0] != 'D':
                current_table = pd.concat(
                    [current_table, tables[current_table_index].df])
                current_table_index += 1
            return current_table
    return None


def extract_dataframes_from_pdf(path):
    tables = camelot.read_pdf(path, flavor='lattice',
                              pages='all', line_scale=40) 
    #print(tables[0].df, tables[1].df, tables[2].df, tables[3].df, tables[4].df, tables[5].df)
    target_tables_names = ['DO2' ,'DO3', 'D04', 'D19a', 'D26a', 'D27', 'D29', 'D30', 'D37', 'D57', 'D63b', 'D64', 'D68b', 'D69a', 'D72a', 'D74', 'D77', 'D83', 'D85']
    extracted_tables = []
    for target_tables_name in target_tables_names:
        extracted_tables += [extract_specific_dataframe(target_tables_name, tables)]
    print(extracted_tables)
    processed_tables = {}

    processed_tables['D02'] = extracted_tables[0][1][1]
    processed_tables['D03'] = extracted_tables[1][1][1]
    processed_tables['D04'] = [extracted_tables[2][1][1], extracted_tables[2][1][2]]
    processed_tables['D19a'] = extracted_tables[3][1][6]
    processed_tables['D26a'] = extracted_tables[4][4].values[2:6].tolist()
    processed_tables['D27'] = extracted_tables[5][4].values[2:6].tolist()
    processed_tables['D29'] = extracted_tables[6][4].values[2:5].tolist()
    processed_tables['D30'] = extracted_tables[7][2].values[2:6].tolist()
    processed_tables['D37a'] = [e if e != '' else 'Nu' for e in extracted_tables[8][1].values[1:4].tolist()]
    processed_tables['D57'] = extracted_tables[9][2].values[2:8].tolist()
    processed_tables['D63b'] = [extracted_tables[10][1].values[2:].tolist(), extracted_tables[10][2].values[2:].tolist(), [e.split(' ')[0] for e in extracted_tables[10][3].values[2:]]]
    processed_tables['D64'] = extracted_tables[11][2][2]
    processed_tables['D68b'] = extracted_tables[12][1].values[2:].tolist()
    processed_tables['D69a'] = np.add(np.add([float(e) for e in extracted_tables[13].values[6][1:].tolist()], [float(e) for e in extracted_tables[13].values[7][1:].tolist()]), [float(e) for e in extracted_tables[13].values[10][1:].tolist()]).tolist()
    processed_tables['D72a'] = extracted_tables[15].values[4][1:].tolist()
    processed_tables['D74'] = extracted_tables[16][1][1]
    processed_tables['D77'] = extracted_tables[16].values[3][1:6].tolist()
    processed_tables['D83'] = extracted_tables[17][0][1]
    processed_tables['D85'] = extracted_tables[18][0][1]

    print(processed_tables)

with open('../real2020.json') as f:
    REAL_DATA = json.loads(f.read())

for (dirpath, dirnames, filenames) in walk('./pdfs/output/'):
    for filename in filenames:
        
        found = False
        aracip_code = filename.split('_')[0]

        for highschool_index in range(len(REAL_DATA['institutions'])):
            if str(REAL_DATA['institutions'][highschool_index]['objective']['identity']['aracip_code']) == str(aracip_code):
                found = True
                break
        
        if found == True:
            print(highschool_index)
            extract_dataframes_from_pdf('./pdfs/output/' + filename)




print(counter)