import pandas as pd
import numpy as np


def extract_by_index(df, index_column, index):
    '''
    extract_by_index(xls.parse(3), 'RaeiId', '3eff7132-5f59-47a7-952c-a7f1009cdde4')
    '''
    dict = {}
    keys = df.columns.tolist()
    df = df[df[index_column] == index]
    for i in range(len(keys)):
        dict[keys[i]] = df.values[0][i]
    return dict


def extract_by_index_and_question(df, index_column, index, question_column):
    '''
    extract_by_index_and_question(xls.parse(2), 'RaeiID', '3eff7132-5f59-47a7-952c-a7f1009cdde4', 'DenumireZona')
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
    extract_by_index_question_and_answer(xls.parse(36), 'RaeiID', '3eff7132-5f59-47a7-952c-a7f1009cdde4', 'Etnie', 'Română')
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


def extract_institution_by_sirues(sirues_code):
    '''
    extract_institution_by_sirues('1104085')
    '''
    processed_tables = {}
    raei_id = extract_by_index(
        xls.parse(3), 'CodSirues', sirues_code)['RaeiId']
    print('RAEI:', raei_id)
    processed_tables['D03'] = extract_by_index(xls.parse(3), 'RaeiId', raei_id)[
        'PozitionareScoala']
    processed_tables['D04'] = [extract_by_index_and_question(xls.parse(2), 'RaeiID', raei_id, 'DenumireZona')['Zonă dezavantajată din punct de vedere socio-economic (somaj ridicat/ comunităţi defavorizate etc.)']['ZonaDezavantajata'], extract_by_index_and_question(
        xls.parse(2), 'RaeiID', raei_id, 'DenumireZona')['Zonă cu probleme de acces (zonă izolată, drumuri desfundate pe ploaie, inzăpeziri frecvente, treceri prin pădure, treceri peste cale ferată, trafic stradal intens etc.)']['ZonaDezavantajata']]
    processed_tables['D19a'] = ''
    processed_tables['D26a'] = [extract_by_index_question_and_answer(xls.parse(36), 'RaeiID', raei_id, 'Etnie', 'Română').get('ScoalaProcent'), extract_by_index_question_and_answer(xls.parse(36), 'RaeiID', raei_id, 'Etnie',
                                                                                                                                                                                     'Maghiară/Secui').get('ScoalaProcent'), extract_by_index_question_and_answer(xls.parse(36), 'RaeiID', raei_id, 'Etnie', 'Rromi').get('ScoalaProcent'), extract_by_index_question_and_answer(xls.parse(36), 'RaeiID', raei_id, 'Etnie', 'Alte Etnii').get('ScoalaProcent')]
    processed_tables['D27'] = [extract_by_index_and_question(xls.parse(38), 'RaeiID', raei_id, 'NivelEducational')['Nici un parinte nu are studii generale (sub 8 clase absolvite)']['ScoalaProcent'], extract_by_index_and_question(xls.parse(38), 'RaeiID', raei_id, 'NivelEducational')['Cel putin un parinte are studii generale (8 clase absolvite)']
                               ['ScoalaProcent'], extract_by_index_and_question(xls.parse(38), 'RaeiID', raei_id, 'NivelEducational')['Cel putin un parinte are studii medii (liceu absolvit)']['ScoalaProcent'], extract_by_index_and_question(xls.parse(38), 'RaeiID', raei_id, 'NivelEducational')['Cel putin un parinte are studii superioare']['ScoalaProcent']]
    processed_tables['D29'] = [extract_by_index_and_question(xls.parse(40), 'RaeiID', raei_id, 'Timp')['sub 30 de minute']['ScoalaProcent'], extract_by_index_and_question(xls.parse(
        40), 'RaeiID', raei_id, 'Timp')['intre 30 si 60 de minute']['ScoalaProcent'], extract_by_index_and_question(xls.parse(40), 'RaeiID', raei_id, 'Timp')['peste 60 de minute']['ScoalaProcent']]
    processed_tables['D30'] = [extract_by_index_and_question(xls.parse(41), 'RaeiID', raei_id, 'Domiciliu')['Cu domiciliul în aceeaşi localitate cu şcoala:']['NrEleviProcent'], extract_by_index_and_question(xls.parse(41), 'RaeiID', raei_id, 'Domiciliu')['Cu domiciliul în altă localitate, care fac navetă zilnică']['NrEleviProcent'], extract_by_index_and_question(
        xls.parse(41), 'RaeiID', raei_id, 'Domiciliu')['Din alte localităţi care stau in gazda sau la internat']['NrEleviProcent'], extract_by_index_question_and_answer(xls.parse(41), 'RaeiID', raei_id, 'Domiciliu', 'Profilul liceului (militar / teologic) implica organizarea activitatiii in regim de internat').get('NrEleviProcent')]
    processed_tables['D37'] = ''
    processed_tables['D57'] = [extract_by_index_question_and_answer(xls.parse(76), 'RaeiID', raei_id, 'Denumire', 'Număr cadre didactice cu doctorat').get('StructuraProcent'), extract_by_index_and_question(xls.parse(76), 'RaeiID', raei_id, 'Denumire')['Număr cadre didactice cu gradul II']['StructuraProcent'], extract_by_index_and_question(xls.parse(76), 'RaeiID', raei_id, 'Denumire')['Număr cadre didactice cu gradul I']['StructuraProcent'], extract_by_index_and_question(
        xls.parse(76), 'RaeiID', raei_id, 'Denumire')['Număr cadre didactice cu definitivat']['StructuraProcent'], extract_by_index_and_question(xls.parse(76), 'RaeiID', raei_id, 'Denumire')['Număr cadre didactice fără definitivat']['StructuraProcent'], extract_by_index_question_and_answer(xls.parse(76), 'RaeiID', raei_id, 'Denumire', 'Număr personal didactic necalificat').get('StructuraProcent')]
    processed_tables['D63b'] = ''
    processed_tables['D64'] = extract_by_index(xls.parse(84), 'RaeiID', raei_id)[
        'NrMediuOrePeCadruDidactic']
    processed_tables['D68b'] = [extract_by_index_and_question(xls.parse(91), 'RaeiID', raei_id, 'Denumire')['numărul de absenţe motivate']['Absente'], extract_by_index_and_question(xls.parse(91), 'RaeiID', raei_id, 'Denumire')[
        'numărul de absenţe nemotivate']['Absente'], extract_by_index_and_question(xls.parse(91), 'RaeiID', raei_id, 'Denumire')['Total absenţe pe an']['Absente'], extract_by_index_and_question(xls.parse(91), 'RaeiID', raei_id, 'Denumire')['Număr mediu absenţe pe copil']['Absente']]
    processed_tables['D69a'] = (np.array([list(extract_by_index_and_question(xls.parse(92), 'RaeiID', raei_id, 'Denumire')['Numărul de elevi din învăţământul liceal, profil teoretic (IX-XII/XIII)'].values())[3:]]) + np.array([list(extract_by_index_and_question(xls.parse(92), 'RaeiID', raei_id, 'Denumire')[
                                'Numărul de elevi din învăţământul  liceal, profil vocational (IX-XII/XIII)'].values())[3:]]) + np.array([list(extract_by_index_and_question(xls.parse(92), 'RaeiID', raei_id, 'Denumire')['Numărul de elevi din învăţământul liceal, profil tehnologic (IX-XII/XIII)'].values())[3:]])).sum()
    processed_tables['D70a'] = (np.array([list(extract_by_index_and_question(xls.parse(94), 'RaeiID', raei_id, 'Denumire')['Numărul de elevi din învăţământul liceal, profil teoretic (IX-XII/XIII)'].values())[3:]]) + np.array([list(extract_by_index_and_question(xls.parse(94), 'RaeiID', raei_id, 'Denumire')[
                                'Numărul de elevi din învăţământul  liceal, profil vocational (IX-XII/XIII)'].values())[3:]]) + np.array([list(extract_by_index_and_question(xls.parse(94), 'RaeiID', raei_id, 'Denumire')['Numărul de elevi din învăţământul liceal, profil tehnologic (IX-XII/XIII)'].values())[3:]])).sum()
    processed_tables['D72a'] = list(extract_by_index_and_question(xls.parse(
        98), 'RaeiId', raei_id, 'Denumire')['Învăţământul liceal'].values())[2:]
    processed_tables['D77'] = list(extract_by_index_and_question(xls.parse(
        105), 'RaeiId', raei_id, 'Denumire')['Total'].values())[2:]
    processed_tables['D83'] = extract_by_index(xls.parse(
        112), 'RaeiID', raei_id)['NrElevi']
    processed_tables['D84'] = extract_by_index(xls.parse(
        113), 'RaeiID', raei_id)['Formatori']
    processed_tables['D85'] = extract_by_index(xls.parse(
        114), 'RaeiID', raei_id)['CadreDidacticeAutoriSauCoautoriManuale']
    return processed_tables


xls = pd.ExcelFile('aracip_2018.xlsx')
