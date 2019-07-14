from urllib import request
import json
import time

with open('siiir_institutii.json') as f:
    data = json.loads(f.read())
    data = data['data']
    institutions = data['content']

api_requests = ['details', 'subunits', 'organisation', 'materialresources']

data = dict()
for institution_index in range(len(institutions)):
    start_time = time.time()
    institution_data = dict()

    for req in api_requests:
        response = request.urlopen(
            f'https://www.siiir.edu.ro/carto/app/rest/school/{req}/{institutions[institution_index]["ID_SCHOOL"]}').read()
        json_response = json.loads(response)
        institution_data[req] = json_response

    institutions[institution_index]['OTHERS'] = institution_data
    elapsed_time = time.time() - start_time
    print('[*]', institution_index, elapsed_time)

json.dump(institutions, open('data.json', 'w',
                             encoding='utf8'), ensure_ascii=False)
