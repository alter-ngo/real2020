### Sistemul Informatic Integrat al Învățământului din România

Date: [Google Drive](https://drive.google.com/open?id=1vrkvvyI4K-UmTXXVmPYk2WMh6tyOoVrK)

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
