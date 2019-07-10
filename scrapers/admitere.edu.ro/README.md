### ADLIC - Admiterea în licee şi şcoli de arte şi meserii
Primul sistem informatizat folosit în Romania la nivel naţional pentru centralizarea rezultatelor testelor naţionale şi distribuirea în licee şi şcoli profesionale a candidaţilor.

User URL: [`http://admitere.edu.ro/2018/repartizare`](http://admitere.edu.ro/2018/repartizare)

API Base Endpoint: `http://admitere.edu.ro/2018/repartizare`

#### Lista licee
Nume, Adresa etc.

GET `/<județ>/data/highschool.json`

#### Lista scoli
Nume, Adresa etc.

GET `/<județ>/data/school.json`

#### Listă specializări
Nume, Unitate, Ultima Medie etc.

GET `/<județ>/data/specialization.json`

#### Listă locuri libere
Nume, Locuri Libere etc.

GET `/<județ>/data/empty-seats.json`

#### Structura
- ```j(Județ)```
- ```lc(Numar Liceu >100)```
- ```l(Nume)```
- ```t(Tipul Instituției)```
- ```a(Adresă)```
- ```p(Telefon)```
- ```f(Fax)```
- ```m(Mediu - Urban/Rural)```
- ```sp(Specializare)```
