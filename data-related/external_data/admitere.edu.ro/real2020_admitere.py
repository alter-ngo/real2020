'''
Admitere dataset merger with REAL2020 dataset
With this dataset we're going to cover the 'specializations' entry in REAL2020
"specializations": [
    {
        "branch": dataset[x][2],
        "profile": dataset[x][3],
        "specializations": dataset[x][4],
        "last_admission_grade": dataset[x][5]
    }
],
'''

import pandas as pd
import numpy as np
import json

UI_SCRAPPER_DATA = np.asarray(pd.read_csv('admission_data.csv'))
with open('../real2020.json') as f:
    REAL_DATA = json.loads(f.read())

admission_data = {}
for highschool in UI_SCRAPPER_DATA:
    school_code = highschool[1].split('=')[-1]
    specializations_entry = {
        'branch': highschool[2],
        'profile': highschool[3],
        'specializations': highschool[4],
        'last_admission_grade': highschool[5]
    }

    if admission_data.get(str(school_code)) != None:
        admission_data[str(school_code)].append(specializations_entry)
    else:
        admission_data[str(school_code)] = list()
        admission_data[str(school_code)].append(specializations_entry)

counter = 0

for highschool_index in range(len(REAL_DATA['institutions'])):
    REAL_DATA['institutions'][highschool_index]['specializations'] = admission_data.get(
        str(REAL_DATA['institutions'][highschool_index]['objective']['identity']['school_code']))

    if REAL_DATA['institutions'][highschool_index]['specializations'] != None:
        counter += 1
    else:
        print(REAL_DATA['institutions'][highschool_index]['objective']['identity']['school_code'],
              REAL_DATA['institutions'][highschool_index]['objective']['identity']['full_name'])

json.dump(REAL_DATA, open('../real2020.json', 'w'))
