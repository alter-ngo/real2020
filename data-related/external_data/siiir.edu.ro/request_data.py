from urllib import request
import json
import time

api_requests = ['details', 'subunits', 'organisation',
                'materialresources', 'buildingsstate']

institutions = []

data = dict()
for institution_index in range(11289369, 11308251):
    institution_data = dict()

    for req in api_requests:
        try:
            response = request.urlopen(
                f'https://www.siiir.edu.ro/carto/app/rest/school/{req}/{institution_index}').read()
            if response != b'':
                json_response = json.loads(response)
                institution_data[req] = json_response
        except:
            pass

    institutions += [institution_data]
    print('[*]', institution_index)

json.dump(institutions, open('siiir_2020.json', 'w',
                             encoding='utf8'), ensure_ascii=False)
