from urllib import request
import json

with open('judete.json') as f:
    counties = json.loads(f.read())
    counties = counties['judete']

api_requests = ['highschool','specialization','school','empty-seats']

data = dict()
for county in counties.keys():
    county_data = dict()
    for req in api_requests:
        response = request.urlopen(f'http://admitere.edu.ro/2018/repartizare/{county}/data/{req}.json').read()
        json_response = json.loads(response)
        county_data[req] = json_response
    data[county] = county_data


json.dump(data,open('data.json','w',encoding='utf8'),ensure_ascii=False)