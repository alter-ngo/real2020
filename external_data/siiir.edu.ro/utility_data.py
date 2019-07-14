import json
import requests

with open('data.json') as f:
    siiir_data = json.loads(f.read())

print('Total:', len(siiir_data))

for index, institution in enumerate(siiir_data):
    institution_id = institution['ID_SCHOOL']
    req = requests.get(
        f'https://www.siiir.edu.ro/carto/app/rest/school/buildingsstate/{institution_id}')
    res = req.json()
    siiir_data[index]['OTHERS']['schoolBuildingUtilities'] = res['schoolBuildingUtilities']
    print('Index:', index, '- Utilities:', len(res['schoolBuildingUtilities']))

with open('data.json', 'w') as f:
    json.dump(siiir_data, f)
