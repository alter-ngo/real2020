import json
import numpy as np
import requests

with open('../siiir.edu.ro/data.json') as f:
    siir_data = json.loads(f.read())

with open('institutii.json') as f:
    aracip_data = json.loads(f.read())

sirues_codes= []
for hs in siir_data:
    for hs_type in hs['OTHERS']['organisation']['schoolLevels']:
        if hs_type['level'] == 'Liceal' and hs_type['state'] == 'Acreditat':
            sirues_codes.append(hs['OTHERS']['details']['siruesCode'])

def process_name(name):
    name_split = name.split('_')
    CUI = name_split[1]
    name = name_split[0]
    special_chars ={
        'ă': 'a',
        'â': 'a',
        'î': 'i',
        'ț': 't',
        'ș': 's'
    }
    for i in range(len(special_chars.keys())):
        sc = list(special_chars.keys())[i]
        special_chars[sc.upper()] = special_chars[sc].upper()
    for sc in special_chars.keys():
        name = name.replace(sc,special_chars[sc])
    
    return name+'_'+CUI
    
    
for hs in aracip_data['data']:
    if hs['Cod_Sirues'] in sirues_codes:
        name = process_name(hs['ruta_completa'].split('\\')[-1])
        CUI = hs['CUI']
        url_gen = f'http://beta.aracip.eu/descarca/2/{name}/Rapoarte%20anuale%20de%20evaluare%20interna/2017/{CUI}_2017_RAEI.pdf'
        req = requests.get(url_gen)
        if "Eroare 404" in req.text:
            print(404)
            continue
        print(200, url_gen)
        print('Downloading')
        open(f'{name}.pdf','wb').write(req.content)