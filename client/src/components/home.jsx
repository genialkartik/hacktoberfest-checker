import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Image, Card } from "react-bootstrap";
import { CircleProgress } from "react-gradient-progress";
import './home.css'
import announcement from "./announcement.png";

//
function Home() {

  const [username, setUsername] = useState({ uname: "" });
  const [data, Setdata] = useState([]);
  const [bool, Setbool] = useState(false);
  const [count, Setcount] = useState(1);
  const [message, Setmessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://hacktoberfestcheck.herokuapp.com", { uname: username }).then((res => {
      if (res.status === 200) {
        var data = res.data;
        for (var i = 0; i < res.data.length; i++) {
          var d = new Date(res.data[i].created_at);
          d.setDate(d.getDate() + 14);

          if (new Date() > d || new Date() === d)
            data[i].review = "Completed";

          else {
            var diff = Math.abs(d.getTime() - (new Date().getTime()));
            var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
            data[i].review = diffDays + " days left";
          }
        }
        Setdata(data);

        if (res.data.length >= 4) {
          Setcount(4);
          Setmessage("Congrats!! You have done 4 PR's")
        }
        else {
          Setcount(res.data.length);
          Setmessage("You need to do" + 4 - count + "PR's")
        }
        Setbool(true);
      }

    }))
  }

  return (
    <div>
      <Container fluid className={"nav center"}>
        <Row >
          <Col ><img src={announcement} height="40px" alt="announcement" /> &nbsp;Don't forget to
          <a href="https://hacktoberfest.digitalocean.com/" target="_blank" rel="noopener noreferrer"> register</a>  to be eligible for the tee or tree!</Col>
        </Row>
      </Container>

      <div className={"main"}>
        <div className={"center"}>
          <Image
            src={require('./hack.jpg')}
            height="258px"
            width="700px"
          />
        </div>

        <h1 className={"center"} style={{ color: "#FF8AE2", fontFamily: "cursive" }}>Check Your Progress</h1>


        <Form onSubmit={handleSubmit} autocomplete="off" inline className={"justify-content-center form1"}>
          <div style={{ margin: "0cm 2cm 0cm 3cm" }}>
            <Image roundedCircle src="https://avatars1.githubusercontent.com/u/32240906?s=460&v=4" width="100px" height="100px" />
          </div>
          <Form.Control
            className={"form"}
            type="text"
            placeholder="GitHub Username"
            name="uname"
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
          <Button variant="outline-primary"
            type="submit"
          >Check</Button>
        </Form>


        <div className={"profile"}>
          <div>
            {bool ? <CircleProgress percentage={((count / 4) * 100)} width={80} /> : <p></p>}
            <p>{message}</p>
          </div>
        </div>

        <div>{bool ?
          <div>
            {data.map((d) => (
              <div style={{ display: "flex " }}>
                <Card className={"card-info"} style={d.label_bool || d.topic_bool ? { borderColor: "green" } : { borderColor: "Red" }}>
                  <p style={{ fontSize: "3mm", margin: "10px 0px 0px 10px" }}>{new Date(Date.parse(d.created_at)).toUTCString()}</p>
                  <p style={{ margin: "10px 0px 0px 10px" }}>You submitted
                    <a href={d.pr_url} target="_blank" rel="noopener noreferrer" >{d.title}</a> to
                    <a href={d.repo_url} target="_blank" rel="noopener noreferrer" >{d.repo_name}</a>
                  </p>
                </Card>
                <Card className={"detail-card"} style={d.label_bool || d.topic_bool ? { borderColor: "green" } : { borderColor: "Red" }} >
                  <p style={{ margin: "4px 0px 0px 10px", height: "33%" }}>
                    Label/Topic : {d.label_bool || d.topic_bool ?
                      <img src={require('./correct.png')} height="30px" width="30px" alt="topic" /> :
                      <img src={require('./wrong.png')} height="30px" width="30px" alt="label" />}</p>
                  <p style={{ margin: "0px 0px 5px 10px", height: "33%" }}>Pull Request Status : &nbsp;  {d.state}</p>
                  <p style={{ margin: "0px 0px 5px 10px", height: "33%" }}>Public Repository : &nbsp;   <img src={require('./correct.png')} height="30px" width="30px" alt="topic" /> </p>
                  <p style={{ margin: "0px 0px 5px 10px", height: "33%" }}>Review Period : {d.review}</p>
                </Card>
              </div>
            ))}
          </div>

          : <p> </p>
        }</div>




        <footer className={"center"} style={{ marginTop: "50px" }}>
          <p>Attention : This site is just a fan made and it is not affiliated by <a href="https://hacktoberfest.digitalocean.com/" target="_blank" rel="noopener noreferrer">Hacktoberfest</a></p>
        </footer>
      </div>

    </div>
  );
}
export default Home;
