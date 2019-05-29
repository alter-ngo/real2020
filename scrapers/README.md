# Scrapers
Aici găsești script-uri care extrag informații de pe site-uri cu date despre instituții de învățământ, dar și documentații ale unor API-uri reverse engineered.

## APIs
### Sistemul Informatic Integrat al Învățământului din România
User URL: [`https://www.siiir.edu.ro/carto`](https://www.siiir.edu.ro/carto)

API Base Endpoint: `https://www.siiir.edu.ro/carto/app/rest`

#### Detalii despre unitate de învățământ după cod
Nume, Adresa, Contact, Număr Elevi/Personal, Mod Operare, Finanțare etc.

GET `/school/details/<cod>`

#### Listă de subunități ale unei instituții de învățământ după cod
Nume, Adresa, Statut etc.

GET `/school/subunits/<cod>`

#### Listă de clase
Nume, Nivel, Număr Elevi, Limba Predare etc.

GET `/school/organisation/11261049`

#### Listă de săli
Nume, Tip, Adresa, Suprafață, Etaje etc.

GET `/school/materialresources/11261049`

#### Listă unități de învățământ
Cod, Nume, Adresa etc.

POST `/genericData/find?filters={}&page=1&size=10&sort={"NAME":"asc"}`

### Ministerul Educației Naționale
User URL: [`http://admitere.edu.ro/2018/repartizare`](http://admitere.edu.ro/2018/repartizare)

API Base Endpoint: `http://admitere.edu.ro/2018/repartizare`

#### Lista licee
Nume, Adresa etc.

GET `/<județ>/data/highschool.json`

#### Listă specializări
Nume, Unitate, Ultima Medie etc.

GET `/<județ>/data/specialization.json`
