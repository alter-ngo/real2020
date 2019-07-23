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

UI_SCRAPPER_DATA = np.asarray(pd.read_csv('admission_data.csv'))

admission_data = {}
for highschool in UI_SCRAPPER_DATA:
    school_code = highschool[1].split('=')[-1]
    specializations_entry = {
        'branch': highschool[2],
        'profile': highschool[3],
        'specializations': highschool[4],
        'last_admission_grade': highschool[5]
    }
    try:
        admission_data[str(school_code)].append(specializations_entry)
    except KeyError:
        admission_data[str(school_code)] = list()
        admission_data[str(school_code)].append(specializations_entry)
