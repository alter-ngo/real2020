import json
import numpy as np
import requests
import urllib.parse

with open('../siiir.edu.ro/data.json') as f:
    siir_data = json.loads(f.read())

sirues_codes = []
for hs in siir_data:
    for hs_type in hs['OTHERS']['organisation']['schoolLevels']:
        if hs_type['level'] == 'Liceal' and hs_type['state'] == 'Acreditat':
            print(hs['NAME'])
