# external_data

Here you can find crawlers, scrapers, spiders and other sorts of scripts which automate the extraction of public data from various platforms. Additionally, these are accompanied by other data wrangling scripts.

| Platform                                                                                     | Description                                      |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [admitere.edu.ro](https://github.com/paubric/real/tree/master/external_data/admitere.edu.ro) | highschool admission data                        |
| bacalaureat.edu.ro                                                                           | Bacalaureat data                                 |
| [beta.aracip.eu](https://github.com/paubric/real/tree/master/external_data/beta.aracip.eu)   | internal and external highschool quality reports |
| [portal.just.ro](https://github.com/paubric/real/tree/master/external_data/portal.just.ro)   | (il)legal data                                   |
| [siiir.edu.ro](https://github.com/paubric/real/tree/master/external_data/siiir.edu.ro)       | comprehensive objective highschool data          |
| titularizare.edu.ro                                                                          | tenure data                                      |

# REAL2020 dataset structure
```
{
  "institutions": [
    {
      "objective": {
        "identity": {
          "full_name": "Colegiul Național Imaginar",
          "short_name": "Col. Naț. Imaginar",
          "sirues_code": "123456",
          "siiir_code": "12345678",
          "cif": "1234567",
          "school_type": "Colegiu Național"
        },
        "legal": {
          "status": "Cu personalitate juridică",
          "property_form": "Publică de interes naţional şi local",
          "funding_form": "Buget"
        },
        "location": {
          "medium": "Urban",
          "county": "Municipiul București",
          "locality": "Sector 7",
          "street": "Calea Lactee",
          "street_number": 123,
          "postal_code": "070045",
          "position_relative_locality": "Zonă centrală",
          "socioeconomically_disadvantaged_area": "Nu",
          "access_problems_area": "Da"
        },
        "contact": {
          "phone_number": "1234567890",
          "fax_number": "1234567890",
          "email": "contact@cnimaginar.ro"
        },
        "students": {
          "student_count": 1000,
          "ces_count": 100,
          "study_formations": [
            {
              "name": "A",
              "type": "Clasa a X-a",
              "education_type": "Masă",
              "education_form": "Zi",
              "teaching_mode" "Tradițional",
              "teaching_type": "Normal",
              "teaching_language": "Limba română",
              "student_count": 30
            }
          ],
          "ethnicity_percentages": {
            "romanian": 95.5,
            "hungarian": 3.2,
            "rroma": 1.3,
            "others": 0
          },
          "parent_studies_percentages": {
            "less_than_eight_classes": 10.5,
            "eight_classes": 14.5,
            "twelve_classes": 54.5,
            "superior_studies": 20.5
          },
          "travel_time_percentages": {
            "under_half_an_hour": 25.5,
            "half_to_one_hour": 70.2,
            "over_one_hour": 4.3
          },
          "home_relative_location_percentages": {
            "same_locality": 85.5,
            "different_locality": 10.3,
            "hosted": 4.2,
            "boarding": 0
          },
          "absences: {
            "total_motivated_absences": 50000,
            "total_unmotivated_absences": 10000,
            "total_absences": 60000,
            "average_absences_per_student": 36.7
          },
          "flux": {
            "registered_initially": 1000,
            "registered_finally": 990,
            "registered_during": 3,
            "transferred": 2,
            "dropouts": 3,
            "repeaters": 2,
            "almost_repeaters": 2,
            "unfinished_situation": 0
          },
          "class_grades_percentages": {
            "five_to_six": 14.5,
            "six_to_seven": 15.5,
            "seven_to_eight": 30.5,
            "eight_to_nine": 29.5,
            "nine_to_ten": 10
          },
          "bacalaureat_grades_percentages": {
            "under_six": 14.5,
            "six_to_seven": 15.5,
            "seven_to_eight": 30.5,
            "eight_to_nine": 29.5,
            "nine_to_ten": 10
          },
          "recognized_awards": 360
        },
        "teachers": {
          "teacher_count": 80,
          "didactic_degrees_percentages": {
            "doctorate": 5.7,
            "first_degree": 31.7,
            "second_degree": 40.3,
            "with_definitive": 70.5,
            "without_definitive": 29.5,
            "unqualified": 0
          },
          "authors_of_didactic_resources": 15,
          "continuous_learning_hours_per_teacher": 120,
          "directors": [
            {
              "position": "Director",
              "subject": "Fizică",
              "didactic_degree": "Gradul I",
              "tenure": 24,
              "management_courses": "Da"
            }
          ]
        },
        "specializations": [
          {
            "branch": "Teoretică",
            "profile": "Real",
            "specializations": "Matematică-Informatică",
            "last_admission_grade": 9.3
          }
        ],
        "admission_conditions": "Media minimă de intrare în lice, în anul de referință",
        "resources": {
          "buildings": [
            {
              "building_id": 1,
              "name": "Corpul A",
              "description": "corp principal",
              "built_surface": 123.45,
              "held_surface": 1234.5,
              "construction_year": 1995,
              "property_type": "Administrator UAT",
              "floor_count": 2,
              "video_surveillance": "Da",
              "audio_surveillance": "Da"
            }
          ],
          "rooms": [
            {
              "building_id": 1,
              "name": "laborator 5",
              "type": "Laborator informatic",
              "surface": 123,
              "floor": 1,
              "seat_count": 40,
              "computer_count": 40
            }
          ],
          "transport": [
            {
              "property": "Da",
              "serving": "Nu",
              "vehicle_type": "Microbuz",
              "seat_count": 12,
              "acquisition_year": 2005,
              "driver": "Extern",
              "itp": "Da",
              "safety": "Da"
            }
          ],
          "utilities": {
            "running_water": "Da",
            "sewerage": "Da",
            "gas": "Da",
            "electricity": "Da",
            "heating": "Partial",
            "central_heating": "Nu",
            "sanitation": "Da",
            "toilets": "In interior"
          },
          "accommodation": {
            "dining_room_seat_count": 50,
            "accommodation_count": 100
          }
        }
      }
    }
  ]
}
```

