'''
Script for merging SIIIR dataset with the new REAL2020 dataset

REAL2020 structure relative to SIIIR data:
{
  'institutions': [
    {
      'objective': {
        'identity': {
          'full_name': NAME,
          'short_name': SHORT_NAME,
          'sirues_code': OTHERS.details.siruesCode,
          'siiir_code': OTHERS.details.code,
          'cif': OTHERS.details.fiscalCode,
          'school_type': None
        },
        'legal': {
          'status': STATUT,
          'property_form': PROPERTY_FORM,
          'funding_form': OTHERS.details.fundingForm
        },
        'location': {
          'medium': None,
          'county': OTHERS.details.county,
          'locality': OTHERS.details.locality,
          'street': OTHERS.details.street,
          'street_number': OTHERS.details.streetNumber,
          'postal_code': OTHERS.details.street.postalCode,
          'position_relative_locality': None
        },
        'contact': {
          'phone_number': OTHERS.details.phoneNumber,
          'fax_number': OTHERS.details.faxNumber,
          'email': OTHERS.details.email
        },
        'students': {
          'student_count': OTHERS.details.schoolNumbers.studentsCount,
          'study_formations': [
            {
              'name': OTHERS.organisation.schoolStudyFormations[x].sfName,
              'type': OTHERS.organisation.schoolStudyFormations[x].studyFormationType,
              'education_type': OTHERS.organisation.schoolStudyFormations[x].educationType,
              'education_form': OTHERS.organisation.schoolStudyFormations[x].educationForm,
              'teaching_mode' OTHERS.organisation.schoolStudyFormations[x].teachingMode,
              'teaching_type': OTHERS.organisation.schoolStudyFormations[x].teachingType,
              'teaching_language': OTHERS.organisation.schoolStudyFormations[x].teachingLanguage,
              'student_count': OTHERS.organisation.schoolStudyFormations[x].studentsNo
            }
          ]
        },
        'resources': {
          'buildings': [
            {
              'building_id': OTHERS.materialresources.schoolBuildings[x].id,
              'code': OTHERS.materialresources.schoolBuildings[x].buildingCode,
              'description': OTHERS.materialresources.schoolBuildings[x].buildingDescription,
              'built_surface': OTHERS.materialresources.schoolBuildings[x].builtSurface
              'held_surface': OTHERS.materialresources.schoolBuildings[x].heldSurface,
              'construction_year': OTHERS.materialresources.schoolBuildings[x].constructionYear,
              'property_type': OTHERS.materialresources.schoolBuildings[x].propertyType,
              'floor_count': OTHERS.materialresources.schoolBuildings[x].floorsNo,
              'video_surveillance': OTHERS.materialresources.schoolBuildings[x].videoSurveillance,
              'audio_surveillance': OTHERS.materialresources.schoolBuildings[x].audioSurveillance
            }
          ],
          'rooms': [
            {
              'building_id': OTHERS.materialresources.schoolClasses[x].idBuilding,
              'name': OTHERS.materialresources.schoolClasses[x].name,
              'type': OTHERS.materialresources.schoolClasses[x].roomType,
              'surface': OTHERS.materialresources.schoolClasses[x].surface,
              'floor': OTHERS.materialresources.schoolClasses[x].floor,
              'seat_count': OTHERS.materialresources.schoolClasses[x].seatsNo,
              'computer_count': OTHERS.materialresources.schoolClasses[x].computersNumber
            }
          ],
          'transport': [
            {
              'property': OTHERS.materialresources.schoolTransport[x].property,
              'serving': OTHERS.materialresources.schoolTransport[x].servers,
              'vehicle_type': OTHERS.materialresources.schoolTransport[x].vehicleType,
              'seat_count': OTHERS.materialresources.schoolTransport[x].seatsNo,
              'acquisition_year': OTHERS.materialresources.schoolTransport[x].acquisitionYear,
              'driver': OTHERS.materialresources.schoolTransport[x].driverType,
              'itp': OTHERS.materialresources.schoolTransport[x].itp,
              'safety': OTHERS.materialresources.schoolTransport[x].safety
            }
          ],
          'utilities': {
                'running_water': OTHERS.schoolBuildingUtilities.runningWater,
                'sewerage': OTHERS.schoolBuildingUtilities.canalization,
                'gas': OTHERS.schoolBuildingUtilities.gas,
                'electricity': OTHERS.schoolBuildingUtilities.electricity,
                'heating': OTHERS.schoolBuildingUtilities.heating,
                'central_heating': OTHERS.schoolBuildingUtilities.centralHeating,
                'sanitation': OTHERS.schoolBuildingUtilities.salubitry,
                'toilets': OTHERS.schoolBuildingUtilities.toilet
            }
        }
      }
    }
  ]
}
'''

import json

with open('data.json') as f:
    SIIIR_DATA = json.loads(f.read())

real2020_dataset = {'institutions': []}



def get_students_formation(institution_passed):
    ''' get students formation from siiir dataset and adapt for real2020 dataset '''

    student_formation_list = []
    for student_formation in institution_passed['OTHERS']['organisation'][
            'schoolStudyFormations']:
        student_formation_entry = {
            'name': student_formation['sfName'],
            'type': student_formation['studyFormationType'],
            'education_type': student_formation['educationType'],
            'education_form': student_formation['educationForm'],
            'teaching_mode': student_formation['teachingMode'],
            'teaching_type': student_formation['techingType'],
            'teaching_language': student_formation['teachingLanguage'],
            'student_count': student_formation['studentsNo']
        }
        student_formation_list.append(student_formation_entry)

    return student_formation_list


def get_buildings(institution_passed):
    ''' get buildings from siiir dataset and adapt for real2020 dataset '''

    buildings_list = []
    for building in institution_passed['OTHERS']['materialresources'][
            'schoolBuildings']:
        buildings_entry = {
            'building_id': building['id'],
            'code': building['buildingCode'],
            'description': building['buildingDescription'],
            'built_surface': building['builtSurface'],
            'held_surface': building['heldSurface'],
            'construction_year': building['constructionYear'],
            'property_type': building['propertyType'],
            'floor_count': building['floorsNo'],
            'video_surveillance': building['videoSurveillance'],
            'audio_surveillance': building['audioSurveillance']
        }
        buildings_list.append(buildings_entry)

    return buildings_list


def get_rooms(institution_passed):
    ''' get rooms from siiir dataset and adapt for real2020 dataset '''

    rooms_list = []
    for rooms in institution_passed['OTHERS']['materialresources']['schoolClasses']:
        rooms_entry = {
            'building_id': rooms['idBuilding'],
            'name': rooms['name'],
            'type': rooms['roomType'],
            'surface': rooms['surface'],
            'floor': rooms['floor'],
            'seat_count': rooms['seatsNo'],
            'computer_count': rooms['computersNumber']
        }
        rooms_list.append(rooms_entry)

    return rooms_list


def get_transport(institution_passed):
    ''' get transport from siiir dataset and adapt for real2020 dataset '''

    transport_list = []
    for transport in institution_passed['OTHERS']['materialresources'][
            'schoolTransport']:
        transport_entry = {
            'property': transport['property'],
            'serving': transport['servers'],
            'vehicle_type': transport['vehicleType'],
            'seat_count': transport['seatsNo'],
            'acquisition_year': transport['acquisitionYear'],
            'driver': transport['driverType'],
            'itp': transport['itp'],
            'safety': transport['safety']
        }
        transport_list.append(transport_entry)

    return transport_list


def get_utilities(institution_passed):
    ''' get utilities from siiir dataset and adapt for real2020 dataset '''

    utilities_data = {
        'running_water': 0,
        'sewerage': 0,
        'gas': 0,
        'electricity': 0,
        'heating': 0,
        'central_heating': 0,
        'sanitation': 0,
        'toilets': 0
    }

    for utilities in institution_passed['OTHERS']['schoolBuildingUtilities']:
        utilities_data = {
            'running_water':
            utilities_data['running_water'] + 1
            if utilities['runningWater'] == 'Da' else utilities_data['running_water'] - 1,
            'sewerage':
            utilities_data['sewerage'] + 1
            if utilities['canalization'] == 'Da' else utilities_data['sewerage'] - 1,
            'gas':
            utilities_data['gas'] + 1
            if utilities['gas'] == 'Da' else utilities_data['gas'] - 1,
            'electricity':
            utilities_data['electricity'] + 1
            if utilities['electricity'] == 'Da' else utilities_data['electricity'] - 1,
            'heating':
            utilities_data['heating'] + 1
            if utilities['heating'] == 'Da' else utilities_data['heating'] - 1,
            'central_heating':
            utilities_data['central_heating'] +1
            if utilities['centralHeating'] == 'Da' else utilities_data['central_heating'] - 1,
            'sanitation':
            utilities_data['sanitation'] + 1
            if utilities['salubrity'] == 'Da' else utilities_data['sanitation'] - 1,
            'toilets':
            utilities_data['toilets'] + 1 if utilities['toilet'] ==
            'În interiorul clădirii, stare corespunzătoare' else utilities_data['toilets'] - 1
        }

    data_lenght = len(institution_passed['OTHERS']['schoolBuildingUtilities'])

    def get_results(ternary_result):
        ''' decide wheter or not the utility exists in the instituion '''
        if ternary_result == data_lenght:
            return 'Da'
        elif ternary_result == -data_lenght:
            return 'Nu'
        else:
            return 'Partial'

    return {
        'running_water': get_results(utilities_data['running_water']),
        'sewerage': get_results(utilities_data['sewerage']),
        'gas': get_results(utilities_data['gas']),
        'electricity': get_results(utilities_data['electricity']),
        'heating': get_results(utilities_data['heating']),
        'central_heating': get_results(utilities_data['central_heating']),
        'sanitation': get_results(utilities_data['sanitation']),
        'toilets': get_results(utilities_data['toilets'])
    }


def is_highschool(instituion_passed):
    ''' Check wheter or not an institution is a highschool '''
    for institution_type in instituion_passed['OTHERS']['organisation']['schoolLevels']:
        if institution_type['level'] == 'Liceal' and institution_type['state'] == 'Acreditat':
            return True
    return False

for institution in SIIIR_DATA:
    if is_highschool(institution):
        real2020_entry = {
            'objective': {
                'identity': {
                    'full_name': institution['NAME'],
                    'short_name': institution['SHORT_NAME'],
                    'sirues_code': institution['OTHERS']['details']['siruesCode'],
                    'siiir_code': institution['OTHERS']['details']['code'],
                    'cif': institution['OTHERS']['details']['fiscalCode']
                },
                'legal': {
                    'status': institution['STATUT'],
                    'property_form': institution['PROPERTY_FORM'],
                    'funding_form': institution['OTHERS']['details']['fundingForm']
                },
                'location': {
                    'county': institution['OTHERS']['details']['county'],
                    'locality': institution['OTHERS']['details']['locality'],
                    'street': institution['OTHERS']['details']['street'],
                    'street_number':
                    institution['OTHERS']['details']['streetNumber'],
                    'postal_code': institution['OTHERS']['details']['postalCode']
                },
                'contact': {
                    'phone_number':
                    institution['OTHERS']['details']['phoneNumber'],
                    'fax_number': institution['OTHERS']['details']['faxNumber'],
                    'email': institution['OTHERS']['details']['email']
                },
                'students': {
                    'student_count':
                    institution['OTHERS']['details']['schoolNumbers']
                    ['studentsCount'],
                    'study_formations':
                    get_students_formation(institution)
                },
                'resources': {
                    'buildings': get_buildings(institution),
                    'rooms': get_rooms(institution),
                    'transport': get_transport(institution),
                    'utilities': get_utilities(institution)
                }
            }
        }
        real2020_dataset['institutions'].append(real2020_entry)

with open('real2020.json', 'w') as f:
    json.dump(real2020_dataset, f)
