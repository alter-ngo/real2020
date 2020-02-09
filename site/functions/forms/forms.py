import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

def checksum(data):
    

def insert_data(request):
    cred = credentials.ApplicationDefault()
    firebase_admin.initialize_app(cred, {
        'yourKey': 'Here'
    })
    db = firestore.client()
    print(request)
    request_json = request.get_json()
    doc = db.collection(u'forms').document()
    doc.set(request_json)

    return 'Added new form'