import json

dataset = json.load(open('./real2020.json', 'r'))

total_transports = 0
itp_true = 0

for highschool in dataset['institutions']:
    highschool_transports = highschool['objective']['resources']['transport']
    total_transports += len(highschool_transports)
    for transport in highschool_transports:
        if transport['itp'] == True:
            itp_true += 1

print(itp_true, total_transports, 1-itp_true/float(total_transports))