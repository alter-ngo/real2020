'''
Script for merging SIIIR dataset with the new REAL2020 dataset

REAL2020 structure relative to SIIIR data:
{
  'institutions': [
    {
      'objective': {
        'identity': {
          'full_name': details.longName,
          'short_name': details.shortName,
          'sirues_code': details.siruesCode,
          'siiir_code': details.code,
          'school_code': details.idSchool,
          'cif': details.fiscalCode,
          'school_type': None
        },
        'legal': {
          'status': details.status,
          'property_form': details.propertyForm,
          'funding_form': details.fundingForm
        },
        'location': {
          'medium': None,
          'county': details.county,
          'locality': details.locality,
          'street': details.street,
          'street_number': details.streetNumber,
          'postal_code': details.street.postalCode,
          'position_relative_locality': None
        },
        'contact': {
          'phone_number': details.phoneNumber,
          'fax_number': details.faxNumber,
          'email': details.email
        },
        'students': {
          'student_count': details.schoolNumbers.studentsCount,
          'study_formations': [
            {
              'name': organisation.schoolStudyFormations[x].sfName,
              'type': organisation.schoolStudyFormations[x].studyFormationType,
              'education_type': organisation.schoolStudyFormations[x].educationType,
              'education_form': organisation.schoolStudyFormations[x].educationForm,
              'teaching_mode' organisation.schoolStudyFormations[x].teachingMode,
              'teaching_type': organisation.schoolStudyFormations[x].teachingType,
              'teaching_language': organisation.schoolStudyFormations[x].teachingLanguage,
              'student_count': organisation.schoolStudyFormations[x].studentsNo
            }
          ]
        },
        'resources': {
          'buildings': [
            {
              'building_id': organisation.materialresources.schoolBuildings[x].id,
              'code': organisation.materialresources.schoolBuildings[x].buildingCode,
              'description': organisation.materialresources.schoolBuildings[x].buildingDescription,
              'built_surface': organisation.materialresources.schoolBuildings[x].builtSurface
              'held_surface': organisation.materialresources.schoolBuildings[x].heldSurface,
              'construction_year': organisation.materialresources.schoolBuildings[x].constructionYear,
              'property_type': organisation.materialresources.schoolBuildings[x].propertyType,
              'floor_count': organisation.materialresources.schoolBuildings[x].floorsNo,
              'video_surveillance': organisation.materialresources.schoolBuildings[x].videoSurveillance,
              'audio_surveillance': organisation.materialresources.schoolBuildings[x].audioSurveillance
            }
          ],
          'rooms': [
            {
              'building_id': organisation.materialresources.schoolClasses[x].idBuilding,
              'name': organisation.materialresources.schoolClasses[x].name,
              'type': organisation.materialresources.schoolClasses[x].roomType,
              'surface': organisation.materialresources.schoolClasses[x].surface,
              'floor': organisation.materialresources.schoolClasses[x].floor,
              'seat_count': organisation.materialresources.schoolClasses[x].seatsNo,
              'computer_count': organisation.materialresources.schoolClasses[x].computersNumber
            }
          ],
          'transport': [
            {
              'property': organisation.materialresources.schoolTransport[x].property,
              'serving': organisation.materialresources.schoolTransport[x].servers,
              'vehicle_type': organisation.materialresources.schoolTransport[x].vehicleType,
              'seat_count': organisation.materialresources.schoolTransport[x].seatsNo,
              'acquisition_year': organisation.materialresources.schoolTransport[x].acquisitionYear,
              'driver': organisation.materialresources.schoolTransport[x].driverType,
              'itp': organisation.materialresources.schoolTransport[x].itp,
              'safety': organisation.materialresources.schoolTransport[x].safety
            }
          ],
          'utilities': {
                'running_water': buildingsstate.schoolBuildingUtilities.runningWater,
                'sewerage': buildingsstate.schoolBuildingUtilities.canalization,
                'gas': buildingsstate.schoolBuildingUtilities.gas,
                'electricity': buildingsstate.schoolBuildingUtilities.electricity,
                'heating': buildingsstate.schoolBuildingUtilities.heating,
                'central_heating': buildingsstate.schoolBuildingUtilities.centralHeating,
                'sanitation': buildingsstate.schoolBuildingUtilities.salubitry,
                'toilets': buildingsstate.schoolBuildingUtilities.toilet
            }
        }
      }
    }
  ]
}
'''

import json

with open('siiir_2020.json') as f:
    SIIIR_DATA = json.loads(f.read())

real2020_dataset = {'institutions': []}


def get_students_formation(institution_passed):
    ''' get students formation from siiir dataset and adapt for real2020 dataset '''

    student_formation_list = []
    for student_formation in institution_passed['organisation'][
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

    if institution_passed.get('materialresources') == None:
        return None

    buildings_list = []
    for building in institution_passed['materialresources'][
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

    if institution_passed.get('materialresources') == None:
        return None

    rooms_list = []
    for rooms in institution_passed['materialresources']['schoolClasses']:
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

    if institution_passed.get('materialresources') == None:
        return None

    transport_list = []
    for transport in institution_passed['materialresources'][
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

    if institution_passed.get('buildingsstate') == None:
        return None

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

    for utilities in institution_passed['buildingsstate']['schoolBuildingUtilities']:
        utilities_data = {
            'running_water': utilities_data['running_water'] + 1 if utilities['runningWater'] == 'Da' else utilities_data['running_water'] - 1,
            'sewerage': utilities_data['sewerage'] + 1 if utilities['canalization'] == 'Da' else utilities_data['sewerage'] - 1,
            'gas': utilities_data['gas'] + 1 if utilities['gas'] == 'Da' else utilities_data['gas'] - 1,
            'electricity': utilities_data['electricity'] + 1 if utilities['electricity'] == 'Da' else utilities_data['electricity'] - 1,
            'heating': utilities_data['heating'] + 1 if utilities['heating'] == 'Da' else utilities_data['heating'] - 1,
            'central_heating': utilities_data['central_heating'] + 1 if utilities['centralHeating'] == 'Da' else utilities_data['central_heating'] - 1,
            'sanitation': utilities_data['sanitation'] + 1 if utilities['salubrity'] == 'Da' else utilities_data['sanitation'] - 1,
            'toilets': utilities_data['toilets'] + 1 if utilities['toilet'] == 'În interiorul clădirii, stare corespunzătoare' else utilities_data['toilets'] - 1
        }

    data_length = len(
        institution_passed['buildingsstate']['schoolBuildingUtilities'])

    def get_results(ternary_result):
        ''' decide whether or not the utility exists in the instituion '''
        if ternary_result == data_length:
            return 'Da'
        elif ternary_result == -data_length:
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
    if instituion_passed.get('organisation') == None:
        return None

    for institution_type in instituion_passed['organisation']['schoolLevels']:
        if institution_type['level'] == 'Liceal' and institution_type['state'] == 'Acreditat':
            return True
    return False


for institution in SIIIR_DATA:
    print(SIIIR_DATA.index(institution))
    if is_highschool(institution):
        if institution.get('details') == None:
            continue

        real2020_entry = {
            'objective': {
                'identity': {
                    'full_name': institution['details']['longName'],
                    'short_name': institution['details']['shortName'],
                    'sirues_code': institution['details']['siruesCode'],
                    'siiir_code': institution['details']['code'],
                    'school_code': institution['details']['idSchool'],
                    'cif': institution['details']['fiscalCode']
                },
                'legal': {
                    'status': institution['details']['statut'],
                    'property_form': institution['details']['propertyForm'],
                    'funding_form': institution['details']['fundingForm']
                },
                'location': {
                    'county': institution['details']['county'],
                    'locality': institution['details']['locality'],
                    'street': institution['details']['street'],
                    'street_number':
                    institution['details']['streetNumber'],
                    'postal_code': institution['details']['postalCode']
                },
                'contact': {
                    'phone_number':
                    institution['details']['phoneNumber'],
                    'fax_number': institution['details']['faxNumber'],
                    'email': institution['details']['email']
                },
                'students': {
                    'student_count':
                    institution['details']['schoolNumbers']
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
