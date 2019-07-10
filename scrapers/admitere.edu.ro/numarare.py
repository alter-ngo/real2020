import json

data = json.load(open('data.json'))

total = 0

for judet in data.keys():
    total += len(data[judet]['highschool'])

print(total)
