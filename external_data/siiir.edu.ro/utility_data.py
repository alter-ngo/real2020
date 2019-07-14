import json
import requests

with open('data.json') as f:
    siir_data = json.loads(f.read())

print('Total:',len(siir_data))

for index, hs in enumerate(siir_data):
    hs_id = hs['ID_SCHOOL']
    req = requests.get(f'https://www.siiir.edu.ro/carto/app/rest/school/buildingsstate/{hs_id}')
    res = req.json()
    siir_data[index]['OTHERS']['schoolBuildingUtilities'] = res['schoolBuildingUtilities']
    print('Index:',index, '- Utilities:', len(res['schoolBuildingUtilities']))

with open('data.json','w') as f:
    json.dump(siir_data,f)

