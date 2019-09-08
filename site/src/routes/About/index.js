import React from "react";

import { Row, Col, Divider, Button } from "antd";
import Jumbotron from "components/REAL/Jumbotron";
import DataOverview from "components/REAL/DataOverview";
import TextPhoto from "components/REAL/TextPhoto";
import TeamMembers from "components/REAL/Team";
import BlogOverview from "../../components/REAL/BlogOverview";

const HomePage = () => {
  return (
    <React.Fragment>
      <Row gutter={16}>
        <Col span={24}>
          <TextPhoto title="Context" caption="Caption" imgSrc="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Felevi.jpg?alt=media&token=2e59253a-b2fc-41e0-9f83-100c0aea2e9e">
            Considerăm ca ultima medie și promovabilitatea sunt măsurători necesare, dar nu suficiente, deoarece nu înglobează complet calitatea unei instituții de învățământ. În plus, cei doi indicatori tradiționali variază implicit în funcție de dificultatea examenului, deci nu pot oferii un suport stabil de măsurare a progresului. De asemenea, ultima medie se bazează pe elevii din anul precedent, care au fost ghidați la rândul lor de elevii din anul precedent lor, impregnând o inerție ce nu facilitează dezvoltarea meritocratică a instituțiilor de învățământ.
            <br />
            <br />
            Nu credem într-un clasament absolut al liceelor, deoarece fiecare caută altceva la un liceu. Am identificat 6 dimensiuni relevante de evaluare a liceelor, bazate pe mediile notelor acordate de respondenți.
            <br />
            <br />
            Un sistem nu poate fi optimizat fără să poată fi evaluat corespunzător.
          </TextPhoto>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <TextPhoto title="Obiectiv" caption="Caption" imgSrc="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Felevi.jpg?alt=media&token=2e59253a-b2fc-41e0-9f83-100c0aea2e9e">
            Registrul Educațional Alternativ este o platformă prin care liceele sunt evaluate chiar de către elevi, profesori, părinți și absolvenți.
            <br />
            <br />
            Acesta a fost gândit pentru a îi ajuta pe elevii din clasa a VIII-a în alegerea opțiunilor de liceu, dar și pentru a le oferi conducerilor instituțiilor de învățământ un mecanism de autoevaluare, încurajând astfel competitivitatea constructivă.
            <br />
            <br />
            Proiectul a fost inițiat și susținut integral de o echipă de elevi de liceu voluntari și se bucură de colaborări cu un număr de organizații non-guvernamentale, Centrul pentru Inovare Publică și Școala de Valori, și cu un număr de instituții oficiale, Consiliul Municipal al Elevilor București și Ministerul Educației Naționale.
            <br />
            <br />
            Beneficiarii sistemului educațional ar trebui să poată ghida de îndeaproape evaluarea acestuia și să aibă acces la rezultate.
          </TextPhoto>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <TextPhoto title="Metodologie" caption="Caption" imgSrc="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Felevi.jpg?alt=media&token=2e59253a-b2fc-41e0-9f83-100c0aea2e9e">
            Pentru a oferi o imagine de ansamblu reprezentativă a sistemului educațional românesc, vom urma o metodologie. Considerăm că cel mai relevant set de informații ce caracterizează sistemul de învățământ sunt opiniile beneficiarilor acestuia. Am considerat 4 categorii de beneficiari: ELEVI, ABSOLVENȚI, PĂRINȚI, și PROFESORI. Considerăm că aceste categorii înglobează eficient situația sistemului de învământ. Fiecare persoană care se încadrează într-o astfel de categorie poate oferi informații relevante despre instituțiile cu care a avut contact. De exemplu, în cazul elevilor, acestea se referă la instituțiile unde învață.
             <br />
            <br />
            Pentru fiecare categorie de beneficiari, am întocmit un set de întrebări, sub forma unui formular, care să capteze eficient percepția acestora față de multiple aspecte relevante ale sistemului de învățământ. Printre aceste aspecte se numără: nivelul resurselor, expunerea la oportunități, gradul de diversitate, calitatea relațiilor dintre beneficiari, logistică și organizare, modul de predare etc. Deși percepția asupra acestor aspecte ale sistemului de învățământ sunt măsurători subiective, considerăm ca o cantitate suficient de mare de astfel de informații pot conduce la o evaluare extrem de riguroasă și relevantă a sistemului de învățământ.
            <br />
            <br />
            Pe baza datelor brute ce provin din răspunsurile la întrebările din formular vom genera o colecție de informații ce pot fi interpretate ușor, atât la nivel agregat, cât și la nivel de instituție.
          </TextPhoto>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default HomePage;
