import pandas as pd
import numpy as np
import json
from collections import defaultdict


def extract_by_index(df, index_column, index):
    '''
    extract_by_index(xls.parse(3), 'RaeiId',
                     '3eff7132-5f59-47a7-952c-a7f1009cdde4')
    '''
    dict = {}
    keys = df.columns.tolist()
    df = df[df[index_column] == index]
    if len(df.values) == 0:
        return {}
    for i in range(len(keys)):
        dict[keys[i]] = df.values[0][i]
    return dict


def extract_by_index_and_question(df, index_column, index, question_column):
    '''
    extract_by_index_and_question(
        xls.parse(2), 'RaeiID', '3eff7132-5f59-47a7-952c-a7f1009cdde4', 'DenumireZona')
    '''
    dict = {}
    keys = df.columns.tolist()
    df = df[df[index_column] == index]
    values = df.values
    keys = df.columns.tolist()
    for i in range(len(values)):
        small_dict = {}
        for j in range(len(keys)):
            small_dict[keys[j]] = df.values[i][j]
        dict[df[question_column].values[i]] = small_dict
    return dict


def extract_by_index_question_and_answer(df, index_column, index, question_column, answer):
    '''
    extract_by_index_question_and_answer(xls.parse(
        36), 'RaeiID', '3eff7132-5f59-47a7-952c-a7f1009cdde4', 'Etnie', 'Română')
    '''
    dict = {}
    keys = df.columns.tolist()
    df = df[df[index_column] == index]
    df = df[df[question_column] == answer]
    if len(df.values) == 0:
        return {}
    for i in range(len(keys)):
        dict[keys[i]] = df.values[0][i]
    return dict


def default(o):
    if isinstance(o, np.int64):
        return int(o)
    raise TypeError


def extract_institution_by_sirues(sirues_code):
    '''
    extract_institution_by_sirues('1323667')
    '''
    processed_tables = {}
    raei_id = extract_by_index(
        xls.parse(3), 'CodSirues', sirues_code).get('RaeiId')
    print('RAEI:', raei_id)
    if raei_id == None:
        return {}
    processed_tables['D03'] = [extract_by_index(xls.parse(3), 'RaeiId', raei_id).get(
        'Mediu'), extract_by_index(xls.parse(3), 'RaeiId', raei_id).get('PozitionareScoala')]
    processed_tables['D04'] = [extract_by_index_question_and_answer(xls.parse(2), 'RaeiID', raei_id, 'DenumireZona', 'Zonă dezavantajată din punct de vedere socio-economic (somaj ridicat/ comunităţi defavorizate etc.)').get('ZonaDezavantajata'), extract_by_index_question_and_answer(
        xls.parse(2), 'RaeiID', raei_id, 'DenumireZona', 'Zonă cu probleme de acces (zonă izolată, drumuri desfundate pe ploaie, inzăpeziri frecvente, treceri prin pădure, treceri peste cale ferată, trafic stradal intens etc.)').get('ZonaDezavantajata')]
    processed_tables['D05'] = extract_by_index(
        xls.parse(3), 'RaeiId', raei_id).get('TipUnitate')
    processed_tables['D19a'] = extract_by_index_question_and_answer(xls.parse(
        16), 'RaeiID', raei_id, 'Denumire', 'Numărul de elevi din învăţământul liceal ( IX-XII/XIII)').get('UnitateCoodonatoare')
    processed_tables['D26a'] = [extract_by_index_question_and_answer(xls.parse(36), 'RaeiID', raei_id, 'Etnie', 'Română').get('ScoalaProcent'), extract_by_index_question_and_answer(xls.parse(36), 'RaeiID', raei_id, 'Etnie',
                                                                                                                                                                                     'Maghiară/Secui').get('ScoalaProcent'), extract_by_index_question_and_answer(xls.parse(36), 'RaeiID', raei_id, 'Etnie', 'Rromi').get('ScoalaProcent'), extract_by_index_question_and_answer(xls.parse(36), 'RaeiID', raei_id, 'Etnie', 'Alte Etnii').get('ScoalaProcent')]
    processed_tables['D27'] = [extract_by_index_question_and_answer(xls.parse(38), 'RaeiID', raei_id, 'NivelEducational', 'Nici un parinte nu are studii generale (sub 8 clase absolvite)').get('ScoalaProcent'), extract_by_index_question_and_answer(xls.parse(38), 'RaeiID', raei_id, 'NivelEducational', 'Cel putin un parinte are studii generale (8 clase absolvite)').get(
        'ScoalaProcent'), extract_by_index_question_and_answer(xls.parse(38), 'RaeiID', raei_id, 'NivelEducational', 'Cel putin un parinte are studii medii (liceu absolvit)').get('ScoalaProcent'), extract_by_index_question_and_answer(xls.parse(38), 'RaeiID', raei_id, 'NivelEducational', 'Cel putin un parinte are studii superioare').get('ScoalaProcent')]
    processed_tables['D29'] = [extract_by_index_question_and_answer(xls.parse(40), 'RaeiID', raei_id, 'Timp', 'sub 30 de minute').get('ScoalaProcent'), extract_by_index_question_and_answer(xls.parse(
        40), 'RaeiID', raei_id, 'Timp', 'intre 30 si 60 de minute').get('ScoalaProcent'), extract_by_index_question_and_answer(xls.parse(40), 'RaeiID', raei_id, 'Timp', 'peste 60 de minute').get('ScoalaProcent')]
    processed_tables['D30'] = [extract_by_index_question_and_answer(xls.parse(41), 'RaeiID', raei_id, 'Domiciliu', 'Cu domiciliul în aceeaşi localitate cu şcoala:').get('NrEleviProcent'), extract_by_index_question_and_answer(xls.parse(41), 'RaeiID', raei_id, 'Domiciliu', 'Cu domiciliul în altă localitate, care fac navetă zilnică').get('NrEleviProcent'), extract_by_index_question_and_answer(
        xls.parse(41), 'RaeiID', raei_id, 'Domiciliu', 'Din alte localităţi care stau in gazda sau la internat').get('NrEleviProcent'), extract_by_index_question_and_answer(xls.parse(41), 'RaeiID', raei_id, 'Domiciliu', 'Profilul liceului (militar / teologic) implica organizarea activitatiii in regim de internat').get('NrEleviProcent')]
    processed_tables['D57'] = [extract_by_index_question_and_answer(xls.parse(76), 'RaeiID', raei_id, 'Denumire', 'Număr cadre didactice cu doctorat').get('StructuraProcent'), extract_by_index_question_and_answer(xls.parse(76), 'RaeiID', raei_id, 'Denumire', 'Număr cadre didactice cu gradul II').get('StructuraProcent'), extract_by_index_question_and_answer(xls.parse(76), 'RaeiID', raei_id, 'Denumire', 'Număr cadre didactice cu gradul I').get('StructuraProcent'), extract_by_index_question_and_answer(
        xls.parse(76), 'RaeiID', raei_id, 'Denumire', 'Număr cadre didactice cu definitivat').get('StructuraProcent'), extract_by_index_question_and_answer(xls.parse(76), 'RaeiID', raei_id, 'Denumire', 'Număr cadre didactice fără definitivat').get('StructuraProcent'), extract_by_index_question_and_answer(xls.parse(76), 'RaeiID', raei_id, 'Denumire', 'Număr personal didactic necalificat').get('StructuraProcent')]
    processed_tables['D63b'] = [list(extract_by_index_question_and_answer(xls.parse(83), 'RaeiID', raei_id, 'Descriere', 'Director').values())[
        2:], list(extract_by_index_question_and_answer(xls.parse(83), 'RaeiID', raei_id, 'Descriere', 'Director Adjunct').values())[2:]]
    processed_tables['D64'] = extract_by_index(xls.parse(84), 'RaeiID', raei_id).get(
        'NrMediuOrePeCadruDidactic')
    processed_tables['D68b'] = [extract_by_index_question_and_answer(xls.parse(91), 'RaeiID', raei_id, 'Denumire', 'numărul de absenţe motivate').get('Absente'), extract_by_index_question_and_answer(xls.parse(91), 'RaeiID', raei_id, 'Denumire',
                                                                                                                                                                                                       'numărul de absenţe nemotivate').get('Absente'), extract_by_index_question_and_answer(xls.parse(91), 'RaeiID', raei_id, 'Denumire', 'Total absenţe pe an').get('Absente'), extract_by_index_question_and_answer(xls.parse(91), 'RaeiID', raei_id, 'Denumire', 'Număr mediu absenţe pe copil').get('Absente')]
    processed_tables['D69a'] = (np.array([list(extract_by_index_question_and_answer(xls.parse(92), 'RaeiID', raei_id, 'Denumire', 'Numărul de elevi din învăţământul liceal, profil teoretic (IX-XII/XIII)').values())[3:]]) + np.array([list(extract_by_index_question_and_answer(xls.parse(92), 'RaeiID', raei_id, 'Denumire',
                                                                                                                                                                                                                                                                                   'Numărul de elevi din învăţământul  liceal, profil vocational (IX-XII/XIII)').values())[3:]]) + np.array([list(extract_by_index_question_and_answer(xls.parse(92), 'RaeiID', raei_id, 'Denumire', 'Numărul de elevi din învăţământul liceal, profil tehnologic (IX-XII/XIII)').values())[3:]])).sum(axis=0)
    processed_tables['D70a'] = (np.array([list(extract_by_index_question_and_answer(xls.parse(94), 'RaeiID', raei_id, 'Denumire', 'Numărul de elevi din învăţământul liceal, profil teoretic (IX-XII/XIII)').values())[3:]]) + np.array([list(extract_by_index_question_and_answer(xls.parse(94), 'RaeiID', raei_id, 'Denumire',
                                                                                                                                                                                                                                                                                   'Numărul de elevi din învăţământul  liceal, profil vocational (IX-XII/XIII)').values())[3:]]) + np.array([list(extract_by_index_question_and_answer(xls.parse(94), 'RaeiID', raei_id, 'Denumire', 'Numărul de elevi din învăţământul liceal, profil tehnologic (IX-XII/XIII)').values())[3:]])).sum(axis=0)
    processed_tables['D72a'] = list(extract_by_index_question_and_answer(xls.parse(
        98), 'RaeiId', raei_id, 'Denumire', 'Învăţământul liceal').values())[2:]
    processed_tables['D77'] = list(extract_by_index_question_and_answer(xls.parse(
        105), 'RaeiId', raei_id, 'Denumire', 'Total').values())[2:]
    processed_tables['D83'] = extract_by_index(xls.parse(
        112), 'RaeiID', raei_id).get('NrElevi')
    processed_tables['D84'] = extract_by_index(xls.parse(
        113), 'RaeiID', raei_id).get('Formatori')
    processed_tables['D85'] = extract_by_index(xls.parse(
        114), 'RaeiID', raei_id).get('CadreDidacticeAutoriSauCoautoriManuale')
    return processed_tables


def extract_all_institutions():
    real2020 = json.load(open('../real2020.json'))
    for institution_index in range(len(real2020['institutions'])):
        sirues_code = real2020['institutions'][institution_index]['objective']['identity']['sirues_code']
        aracip_data = extract_institution_by_sirues(sirues_code)

        print(institution_index, sirues_code, aracip_data)
        if aracip_data == {}:
            continue
        real2020['institutions'][institution_index]['objective']['identity']['school_type'] = aracip_data['D05']
        real2020['institutions'][institution_index]['objective']['location']['medium'] = aracip_data['D03'][0]
        real2020['institutions'][institution_index]['objective']['location']['position_relative_locality'] = aracip_data['D03'][1]
        real2020['institutions'][institution_index]['objective']['location']['socioeconomically_disadvantaged_area'] = aracip_data['D04'][0]
        real2020['institutions'][institution_index]['objective']['location']['access_problems_area'] = aracip_data['D04'][1]
        real2020['institutions'][institution_index]['objective']['students']['ces_count'] = aracip_data['D19a']

        real2020['institutions'][institution_index]['objective']['students']['ethnicity_percentages'] = {}
        real2020['institutions'][institution_index]['objective']['students']['ethnicity_percentages']['romanian'] = aracip_data['D26a'][0]
        real2020['institutions'][institution_index]['objective']['students']['ethnicity_percentages']['hungarian'] = aracip_data['D26a'][1]
        real2020['institutions'][institution_index]['objective']['students']['ethnicity_percentages']['rroma'] = aracip_data['D26a'][2]
        real2020['institutions'][institution_index]['objective']['students']['ethnicity_percentages']['others'] = aracip_data['D26a'][3]

        real2020['institutions'][institution_index]['objective']['students']['parent_studies_percentages'] = {}
        real2020['institutions'][institution_index]['objective']['students'][
            'parent_studies_percentages']['less_than_eight_classes'] = aracip_data['D27'][0]
        real2020['institutions'][institution_index]['objective']['students'][
            'parent_studies_percentages']['eight_classes'] = aracip_data['D27'][1]
        real2020['institutions'][institution_index]['objective']['students'][
            'parent_studies_percentages']['twelve_classes'] = aracip_data['D27'][2]
        real2020['institutions'][institution_index]['objective']['students'][
            'parent_studies_percentages']['superior_studies'] = aracip_data['D27'][3]

        real2020['institutions'][institution_index]['objective']['students']['travel_time_percentages'] = {}
        real2020['institutions'][institution_index]['objective']['students'][
            'travel_time_percentages']['under_half_an_hour'] = aracip_data['D29'][0]
        real2020['institutions'][institution_index]['objective']['students'][
            'travel_time_percentages']['half_to_one_hour'] = aracip_data['D29'][1]
        real2020['institutions'][institution_index]['objective']['students'][
            'travel_time_percentages']['over_one_hour'] = aracip_data['D29'][2]

        real2020['institutions'][institution_index]['objective']['students']['home_relative_location_percentages'] = {}
        real2020['institutions'][institution_index]['objective']['students'][
            'home_relative_location_percentages']['same_locality'] = aracip_data['D30'][0]
        real2020['institutions'][institution_index]['objective']['students'][
            'home_relative_location_percentages']['different_locality'] = aracip_data['D30'][1]
        real2020['institutions'][institution_index]['objective']['students'][
            'home_relative_location_percentages']['hosted'] = aracip_data['D30'][2]
        real2020['institutions'][institution_index]['objective']['students'][
            'home_relative_location_percentages']['boarding'] = aracip_data['D30'][3]

        real2020['institutions'][institution_index]['objective']['teachers'] = {}
        real2020['institutions'][institution_index]['objective']['teachers']['didactic_degrees_percentages'] = {}
        real2020['institutions'][institution_index]['objective']['teachers']['didactic_degrees_percentages']['doctorate'] = aracip_data['D57'][0]
        real2020['institutions'][institution_index]['objective']['teachers'][
            'didactic_degrees_percentages']['second_degree'] = aracip_data['D57'][1]
        real2020['institutions'][institution_index]['objective']['teachers'][
            'didactic_degrees_percentages']['first_degree'] = aracip_data['D57'][2]
        real2020['institutions'][institution_index]['objective']['teachers'][
            'didactic_degrees_percentages']['with_definitive'] = aracip_data['D57'][3]
        real2020['institutions'][institution_index]['objective']['teachers'][
            'didactic_degrees_percentages']['without_definitive'] = aracip_data['D57'][4]
        real2020['institutions'][institution_index]['objective']['teachers'][
            'didactic_degrees_percentages']['unqualified'] = aracip_data['D57'][5]

        real2020['institutions'][institution_index]['objective']['teachers']['directors'] = aracip_data['D63b']
        real2020['institutions'][institution_index]['objective']['teachers']['continuous_learning_hours_per_teacher'] = aracip_data['D64']

        real2020['institutions'][institution_index]['objective']['students']['absences'] = {}
        real2020['institutions'][institution_index]['objective']['students']['absences']['total_motivated_absences'] = aracip_data['D68b'][0]
        real2020['institutions'][institution_index]['objective']['students']['absences']['total_unmotivated_absences'] = aracip_data['D68b'][1]
        real2020['institutions'][institution_index]['objective']['students']['absences']['total_absences'] = aracip_data['D68b'][2]
        real2020['institutions'][institution_index]['objective']['students']['absences']['average_absences_per_student'] = aracip_data['D68b'][3]

        real2020['institutions'][institution_index]['objective']['students']['flux'] = {}
        if len(aracip_data['D69a']) > 0:
            real2020['institutions'][institution_index]['objective']['students']['flux']['registered_initially'] = aracip_data['D69a'][0]
            real2020['institutions'][institution_index]['objective']['students']['flux']['registered_finally'] = aracip_data['D69a'][1]
            real2020['institutions'][institution_index]['objective']['students']['flux']['registered_during'] = aracip_data['D69a'][2]
            real2020['institutions'][institution_index]['objective']['students']['flux']['transferred'] = aracip_data['D69a'][3]
            real2020['institutions'][institution_index]['objective']['students']['flux']['dropouts'] = aracip_data['D69a'][4]
            real2020['institutions'][institution_index]['objective']['students']['flux']['unfinished_situation'] = aracip_data['D69a'][5]
        if len(aracip_data['D70a']) > 0:
            real2020['institutions'][institution_index]['objective']['students']['flux']['almost_repeaters'] = aracip_data['D70a'][0]
            real2020['institutions'][institution_index]['objective']['students']['flux']['repeaters'] = aracip_data['D70a'][3]

        real2020['institutions'][institution_index]['objective']['students']['class_grades_percentages'] = {}
        if len(aracip_data['D72a']) > 0:
            real2020['institutions'][institution_index]['objective']['students'][
                'class_grades_percentages']['five_to_six'] = aracip_data['D72a'][0]
            real2020['institutions'][institution_index]['objective']['students'][
                'class_grades_percentages']['six_to_seven'] = aracip_data['D72a'][1]
            real2020['institutions'][institution_index]['objective']['students'][
                'class_grades_percentages']['seven_to_eight'] = aracip_data['D72a'][2]
            real2020['institutions'][institution_index]['objective']['students'][
                'class_grades_percentages']['eight_to_nine'] = aracip_data['D72a'][3]
            real2020['institutions'][institution_index]['objective']['students'][
                'class_grades_percentages']['nine_to_ten'] = aracip_data['D72a'][4]

        real2020['institutions'][institution_index]['objective']['students']['bacalaureat_grades_percentages'] = {}
        if len(aracip_data['D77']) > 0:
            real2020['institutions'][institution_index]['objective']['students'][
                'bacalaureat_grades_percentages']['under_six'] = aracip_data['D77'][0]
            real2020['institutions'][institution_index]['objective']['students'][
                'bacalaureat_grades_percentages']['six_to_seven'] = aracip_data['D77'][1]
            real2020['institutions'][institution_index]['objective']['students'][
                'bacalaureat_grades_percentages']['seven_to_eight'] = aracip_data['D77'][2]
            real2020['institutions'][institution_index]['objective']['students'][
                'bacalaureat_grades_percentages']['eight_to_nine'] = aracip_data['D77'][3]
            real2020['institutions'][institution_index]['objective']['students'][
                'bacalaureat_grades_percentages']['nine_to_ten'] = aracip_data['D77'][4]

        real2020['institutions'][institution_index]['objective']['students']['recognized_awards'] = aracip_data['D83']
        real2020['institutions'][institution_index]['objective']['teachers']['trainers'] = aracip_data['D84']
        real2020['institutions'][institution_index]['objective']['teachers']['authors_of_didactic_resources'] = aracip_data['D85']

        print(real2020['institutions'][institution_index])

    json.dump(real2020, open('real2020.json', 'w+'), default=default)


xls = pd.ExcelFile('aracip_2018.xlsx')
extract_all_institutions()
