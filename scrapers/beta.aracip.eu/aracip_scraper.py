import json
import numpy as np
import requests
import urllib.parse

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

    name = urllib.parse.quote(name, safe='/\'')
    name = name.replace('%26%23039%3B','\'')

    return name+'_'+CUI

for hs in aracip_data['data']:
    if hs['Cod_Sirues'] in sirues_codes and hs['Cod_Sirues'] != None:
        name = process_name(hs['ruta_completa'].split('\\')[-1])
        CUI = hs['CUI']
        url_gen_1 = f'http://beta.aracip.eu/descarca/2/{name}/Rapoarte%20anuale%20de%20evaluare%20interna/2017/{CUI}_2017_RAEI.pdf'
        url_gen_2 = f'http://beta.aracip.eu/descarca/2/{name}/Rapoarte%20anuale%20de%20evaluare%20interna/2016/2016.pdf'
        url_gen_3 = f'http://beta.aracip.eu/descarca/2/{name}/Rapoarte%20anuale%20de%20evaluare%20interna/2015/2015.pdf'
        url_gen_4 = f'http://beta.aracip.eu/descarca/2/{name}/Rapoarte%20anuale%20de%20evaluare%20interna/2014/2014.pdf'

        req = requests.get(url_gen_1)
        if "Eroare 404" not in req.text:
            print('[2017]', url_gen_1)
            filename = './pdfs/' + f'{CUI}_2017_RAEI.pdf'
            open(filename,'wb').write(req.content)
        else:
            req = requests.get(url_gen_2)

            if "Eroare 404" not in req.text:
                print('[2016]', url_gen_2)
                filename = './pdfs/' + f'{CUI}_2016_RAEI.pdf'
                open(filename,'wb').write(req.content)
            else:
                req = requests.get(url_gen_3)

                if "Eroare 404" not in req.text:
                    print('[2015]', url_gen_3)
                    filename = './pdfs/' + f'{CUI}_2015_RAEI.pdf'
                    open(filename,'wb').write(req.content)
                else:
                    req = requests.get(url_gen_4)

                    if "Eroare 404" not in req.text:
                        print('[2014]', url_gen_4)
                        filename = './pdfs/' + f'{CUI}_2014_RAEI.pdf'
                        open(filename,'wb').write(req.content)
                    else:
                        print('[!]', name)
