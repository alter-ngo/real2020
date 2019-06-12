from urllib import request
import json
import time

with open('siiir_institutii.json') as f:
    data = json.loads(f.read())
    data = data['data']
    institutii = data['content']

api_requests = ['details', 'subunits', 'organisation', 'materialresources']

data = dict()
for institutie_index in range(len(institutii)):
    start_time = time.time()
    print(institutie_index)

    institutie_data = dict()
    for req in api_requests:
        response = request.urlopen(
            f'https://www.siiir.edu.ro/carto/app/rest/school/{req}/{institutii[institutie_index]["ID_SCHOOL"]}').read()
        json_response = json.loads(response)
        institutie_data[req] = json_response
    institutii[institutie_index]['OTHERS'] = institutie_data
    elapsed_time = time.time() - start_time
    print(elapsed_time)

json.dump(institutii, open('data.json', 'w',
                           encoding='utf8'), ensure_ascii=False)
