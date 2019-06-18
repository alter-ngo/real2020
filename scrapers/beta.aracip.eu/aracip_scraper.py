import json

with open('../admitere.edu.ro/data.json') as f:
    admitere_data = json.loads(f.read())

with open('../admitere.edu.ro/judete.json') as f:
    judete_data = json.loads(f.read())

with open('../beta.aracip.eu/institutii.json') as f:
    aracip_data = json.loads(f.read())

def clean_data(input_name: str):
    diacritice = {
        'ă':'a',
        'â':'a',
        'î':'i',
        'ș':'s',
        'ț':'t',
    }
    input_name = input_name.lower()
    for diacritica in diacritice.keys():
        input_name = input_name.replace(diacritica,diacritice[diacritica])
    
    input_name = input_name.replace('”','')
    input_name = input_name.replace('“','')
    input_name = input_name.replace("'",'')
    input_name = input_name.lstrip()

    return input_name

admitere_hs = []
for jd in judete_data['judete'].keys():
    for hs in admitere_data[jd]['highschool']:
        admitere_hs.append([clean_data(hs['l']),clean_data(judete_data['judete'][jd])])

aracip_hs = []
for hs in aracip_data['data']:
    aracip_hs.append([clean_data(hs['Denumire']),clean_data(hs['Judet'])])


count = 0
for hs in aracip_hs:
    for _hs in admitere_hs:
        if (hs[0] in _hs[0] or _hs[0] in hs[0]) and hs[1] == _hs[1]:
            print(hs)
            count+=1

print(count)