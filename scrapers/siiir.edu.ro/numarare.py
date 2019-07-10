import json

data = json.load(open('../../../date/data.json'))

contor = 0

for institutie in range(len(data)):
    for nivel in data[institutie]['OTHERS']['organisation']['schoolLevels']:
        if nivel['level'] == 'Liceal' and nivel['state'] == 'Acreditat':
            contor += 1

print(contor)
