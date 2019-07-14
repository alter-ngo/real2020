import json
import numpy as np
import requests
import urllib.parse

with open('../siiir.edu.ro/data.json') as f:
    siiir_data = json.loads(f.read())

with open('institutii.json') as f:
    aracip_data = json.loads(f.read())

sirues_codes = []
for institution in siiir_data:
    for institution_type in institution['OTHERS']['organisation']['schoolLevels']:
        if institution_type['level'] == 'Liceal' and institution_type['state'] == 'Acreditat':
            sirues_codes.append(institution['OTHERS']['details']['siruesCode'])


def process_name(name):
    name_split = name.split('_')

    cui = name_split[1]
    name = name_split[0]

    name = urllib.parse.quote(name, safe='/\'')
    name = name.replace('%26%23039%3B', '\'')

    return name + '_' + cui


for institution in aracip_data['data']:
    if institution['Cod_Sirues'] in sirues_codes and institution['Cod_Sirues'] != None:
        name = process_name(institution['ruta_completa'].split('\\')[-1])
        cui = institution['CUI']

        url_gen_1 = f'http://beta.aracip.eu/descarca/2/{name}/Rapoarte%20anuale%20de%20evaluare%20interna/2017/{cui}_2017_RAEI.pdf'
        url_gen_2 = f'http://beta.aracip.eu/descarca/2/{name}/Rapoarte%20anuale%20de%20evaluare%20interna/2016/2016.pdf'
        url_gen_3 = f'http://beta.aracip.eu/descarca/2/{name}/Rapoarte%20anuale%20de%20evaluare%20interna/2015/2015.pdf'
        url_gen_4 = f'http://beta.aracip.eu/descarca/2/{name}/Rapoarte%20anuale%20de%20evaluare%20interna/2014/2014.pdf'

        req = requests.get(url_gen_1)

        if "Eroare 404" not in req.text:
            print('[2017]', url_gen_1)
            filename = './pdfs/' + f'{cui}_2017_RAEI.pdf'
            open(filename, 'wb').write(req.content)
        else:
            req = requests.get(url_gen_2)

            if "Eroare 404" not in req.text:
                print('[2016]', url_gen_2)
                filename = './pdfs/' + f'{cui}_2016_RAEI.pdf'
                open(filename, 'wb').write(req.content)
            else:
                req = requests.get(url_gen_3)

                if "Eroare 404" not in req.text:
                    print('[2015]', url_gen_3)
                    filename = './pdfs/' + f'{cui}_2015_RAEI.pdf'
                    open(filename, 'wb').write(req.content)
                else:
                    req = requests.get(url_gen_4)

                    if "Eroare 404" not in req.text:
                        print('[2014]', url_gen_4)
                        filename = './pdfs/' + f'{cui}_2014_RAEI.pdf'
                        open(filename, 'wb').write(req.content)
                    else:
                        print('[!]', name)
