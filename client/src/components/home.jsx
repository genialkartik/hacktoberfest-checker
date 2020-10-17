import React, { useState } from "react";
import axios from 'axios'
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
  const [username, setUsername] = useState('')
  const [ar_pr, setArPr] = useState([])

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
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
          <Button variant="outline-primary"
            onClick={() =>
              axios.post('/', {
                uname: username
              })
                .then(res => {
                  console.log(res.data)
                  setArPr(res.data)
                })
            }
          >Check</Button>
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
        <div style={{ display: "flex " }}>
          <div style={{ position: 'relative', float: 'left' }}>
            <ul>
              {(ar_pr.map(({
                title,
                html_url,
                repo_url,
                topic_bool,
                label_bool,
                state,
                created_at }) => (
                  <li key={new Date(Date.parse(created_at)).toUTCString()}>
                    <Card className={"card-info"}>
                      <p style={{ fontSize: "3mm" }}>{created_at}</p>
                      <p>You submitted {title} to {html_url}</p>
                      <p>Repos link: {repo_url}</p>
                    </Card>
                    <Card className={"detail-card"}>
                      <p style={{ marginLeft: "10px" }}>Label/Topic: {topic_bool || label_bool ? 'true' : 'false'}</p>
                      <p style={{ marginLeft: "10px" }}>Pull Request Status: {state}</p>
                      <p style={{ marginLeft: "10px" }}>Review Period</p>
                    </Card>
                  </li>
                )))}
            </ul>
          </div>
        </div>
        <footer className={"center"}>
          <p>Attention : This site is just a fan made and it is not affiliated by <a href="https://hacktoberfest.digitalocean.com/" target="_blank" rel="noopener noreferrer">Hacktoberfest</a></p>
        </footer>
      </div>
    </div>
  );
}
export default Home;
