import React from "react";

import { Row, Col, Divider, Button } from "antd";
import Jumbotron from "components/REAL/Jumbotron";
import DataOverview from "components/REAL/DataOverview";
import TextPhoto from "components/REAL/TextPhoto";
import TeamMembers from "components/REAL/Team";
import BlogOverview from "../../components/REAL/BlogOverview";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: 0,
      windowWidth: 0
    };
  }

  updateWindowDimension = () => {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  };

  componentDidMount() {
    this.updateWindowDimension();
    window.addEventListener("resize", this.updateWindowDimension);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimension);
  }

  render() {
    let sides = ['left', 'right'];
    if(this.state.windowWidth<800) sides = ['left','left']
    return (
      <React.Fragment>
        <Row gutter={16}>
          <Col span={24}>
            <TextPhoto
              side={sides[0]}
              title="Context"
              caption="Liceu"
              imgSrc="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fhighschool.jpg?alt=media&token=e3194309-c889-4cf7-bf34-4f68360a5626"
            >
              Considerăm că ultima medie și promovabilitatea sunt măsurători necesare, dar nu suficiente, deoarece nu înglobează complet calitatea unei instituții de învățământ.
              <br />
              <br />
              Datele despre sistemul educațional românesc nu au fost niciodată complet centralizate, îngrădind potențialul deciziilor informate.
              <br />
              <br />
              Ne-am propus să ne asumăm responsabilitatea de a construi cea mai mare colecție de date despre învățământ, combinând informații de la instituții de stat cu opiniile elevilor, profesorilor și tutorilor.
              <br />
              <br />
              Cu ajutorul acestor date, vom ghida dezvoltarea sistemului educațional, de la elevi până la factori decizionali.
            </TextPhoto>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <TextPhoto
              side={sides[1]}
              title="Obiective"
              caption="Strategie"
              imgSrc="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fobjectives.jpg?alt=media&token=b207235b-240c-4c89-ae6e-60b20ea4e81c"
            >
            Registrul Educațional Alternativ este o platformă care ajută mai multe categorii de persoane, având un număr de obiective strategice:
            <br />
              <br />
              <ul>
                <li>
                  Ajutăm elevii să aleagă cea mai potrivită instituție unde să își petreacă anii de liceu.
                </li>
                <br/>
                <li>
                  Ajutăm profesorii să aleagă cel mai potrivit cadru profesional. 
                </li>
                <br/>
                <li>
                  Ajutăm tutorii să aleagă un liceu sigur pentru copii. 
                </li>
                <br/>
                <li>
                  Facilităm cercetarea și jurnalismul în educație oferind date de o calitate și cantitate fără precedent.
                </li>
                <br/>
                <li>
                  Ghidăm luarea măsurilor de către personalul administrativ, oferind recomandări concrete.
                </li>
                <br/>
                <li>
                  Ghidăm luarea măsurilor de către factorii decizionali, oferind o sursă de date independentă.
                </li>
              </ul>              
            </TextPhoto>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <TextPhoto
              side={sides[0]}
              title="Echipă"
              caption="Colaborare"
              imgSrc="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fteam.jpg?alt=media&token=e0eee32f-c2cd-4654-bf11-1b2656c9e5df"
            >
              Registrul Educațional Alternativ este un proiect ce se află sub egida Asociației Alter. Această organizație neguvernamentală este inițiată și susținută în totalitate de o echipă de liceeni și studenți voluntari, cu background-uri și abilitați diverse. 
              <br />
              <br />
              Deoarece împreună putem realiza lucruri mai bune, am încheiat un număr de parteneriate cu alte entități din societatea civilă și din mediul academic.
              <br />
              <br />
              Suntem organizați în 4 departamente distincte, cu obiective specifice: #community, #content, #financial și #technical.
              <br />
              <br />
              Asociația Alter, conform statutului și actului constitutiv, este o organizație neguvernamentală independentă, neafiliată politic și apolitică.
            </TextPhoto>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default HomePage;
