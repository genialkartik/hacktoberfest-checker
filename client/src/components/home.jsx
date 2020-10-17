import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Card,
} from "react-bootstrap";
import { CircleProgress } from "react-gradient-progress";
import "../css/home.css";
import hack from "../css/hack.jpg";

function Home() {
  return (
    <div>
      <Container fluid className={"nav center"}>
        <Row >
          <Col >Remember to  <a href="https://hacktoberfest.digitalocean.com/" target="_blank" rel="noopener noreferrer">register</a>  to be eligible for the tee or tree!</Col>
        </Row>
      </Container>
      <div className={"main"}>
        <div className={"center"}>
          <Image 
          src={hack}
          height="258px"
          width="700px"
          />
        </div>

        <h1 className={"center"}>Check Your Progress</h1>
        <Form inline className={"justify-content-center form1"}>
          <Form.Control
            className={"form"}
            type="text"
            placeholder="GitHub Username"
          />
          <Button variant="outline-primary">Check</Button>
        </Form>
        <div className={"profile"}>
          <div style={{ margin: "0cm 2cm 0cm 3cm" }}>
            <Image roundedCircle src={hack} width="100px" height="100px" />
          </div>
          <div>
            <CircleProgress percentage={(2 / 4) * 100} width={80} />
            <p>you are left with just one PR </p>
          </div>
        </div>
        <div style={{display:"flex "}}>
          <Card className={"card-info"}>
              <p style={{fontSize:"3mm"}}>date comes here</p>
              <p>You submitted Update README.md to genialkartik/Macfolio</p>
          </Card>
          <Card className={"detail-card"}>
              <p style={{marginLeft:"10px"}}>Label/Topic</p>
              <p style={{marginLeft:"10px"}}>Pull Request Status</p>
              <p style={{marginLeft:"10px"}}>Review Period</p>
          </Card>
        </div>
        <footer className={"center"}>
          <p>Attention : This site is just a fan made and it is not affiliated by <a href="https://hacktoberfest.digitalocean.com/" target="_blank" rel="noopener noreferrer">Hacktoberfest</a></p>
        </footer>
      </div>
    </div>
  );
}
export default Home;
