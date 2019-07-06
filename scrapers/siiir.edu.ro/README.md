### Sistemul Informatic Integrat al Învățământului din România

Date: [Google Drive](https://drive.google.com/open?id=1vrkvvyI4K-UmTXXVmPYk2WMh6tyOoVrK)

#### Structură date colectate

* `ROW_NUM`
* `ID_SCHOOL`
* `CODE`
* `NAME`
* `SHORT_NAME`
* `LOCALITY`
* `PARENT_LOCALITY`
* `COUNTY`
* `STATUT`
* `SCHOOL_TYPE`
* `PROPERTY_FORM`
* `OTHERS`
  * `details`
    * `idSchool`
    * `internalIdSchool`
    * `idParentSchool`
    * `schoolSocialLinks`
    * `idSchoolYear`
      * `orderBy`
      * `isFutureYear`
      * `isCurrentYear`
      * `dateTo`
      * `dateFrom`
      * `description`
      * `code`
      * `idSchoolYear`
    * `schoolYearDescription`
    * `code`
    * `siruesCode`
    * `longName`
    * `shortName`
    * `statut`
    * `isPj`
    * `fiscalCode`
    * `operatingMode`
    * `propertyForm`
    * `fundingForm`
    * `county`
    * `locality`
    * `street`
    * `streetNumber`
    * `postalCode`
    * `phoneNumber`
    * `faxNumber`
    * `email`
    * `schoolNumbers`
      * `idSchool`
      * `studyFormationsCount`
      * `studentsCount`
      * `personnelCount`
  * `subunits (for each)`
    * `schoolId`
    * `code`
    * `name`
    * `locality`
    * `statut`
    * `pjUnit`
    * `fiscalCode`
  * `organisation`
    * `idSchool`
    * `schoolLevels (for each)`
      * `id`
      * `idSchool`
      * `dateFrom`
      * `level`
      * `state`
    * `schoolStudyFormations (for each)`
      * `id`
      * `idSchool`
      * `sfName`
      * `sfLevel`
      * `studyFormationType`
      * `educationType`
      * `fundingForm`
      * `educationForm`
      * `teachingMode`
      * `teachingLanguage`
      * `teachingType`
      * `studentsNo`
    * `materialresources`
      * `idSchool`
      * `schoolBuildings (for each)`
        * `id`
        * `idSchool`
        * `buildingCode`
        * `buildingDescription`
        * `builtSurface`
        * `heldSurface`
        * `constructionYear`
        * `propertyType`
        * `floorsNo`
        * `schoolInternalId`
        * `videoSurveillance`
        * `audioSurveillance`
        * `locality`
        * `street`
        * `streetNumber`
        * `postalCode`
        * `idPhoto`
      * `schoolClasses (for each)`
        * `id`
        * `idSchool`
        * `idBuilding`
        * `buildingName`
        * `code`
        * `name`
        * `roomType`
        * `surface`
        * `floor`
        * `seatsNo`
        * `computersNumber`
      * `schoolTransport (for each)`
        * `id`
        * `idSchool`
        * `property`
        * `servers`
        * `vehicleTyoe`
        * `seatsNo`
        * `acquisitionYear`
        * `driverType`
        * `itp`
        * `safety`
    
      

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
