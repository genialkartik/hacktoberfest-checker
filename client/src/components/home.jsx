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
  const [loaderToggle, SetLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetLoader(true);
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
        SetLoader(false);
      }

    }))
  }

  return (
    <div>
      <Container fluid className={"nav center"}>
        <Row className={"container text-center"}>
          <Col ><img src={announcement} height="40px" alt="announcement" /> &nbsp;Don't forget to
          <a href="https://hacktoberfest.digitalocean.com/" target="_blank" rel="noopener noreferrer"> register</a>  to be eligible for the tee or tree!</Col>
        </Row>
      </Container>

      <div className={"main"}>
        <div className={"center hacktoberfest-imgbox"}>
          <Image
            src={require('./hack.svg')}
            height="260px"
          />
        </div>

        <h1 className={"center text-center"} style={{ color: "#FF8AE2", fontFamily: "sans" }}>Check Your Progress</h1>


        <Form onSubmit={handleSubmit} autocomplete="off" inline className={"row justify-content-center form1"}>
          <div className={"col-12 col-sm-10 col-lg-8 d-flex"}>
            <div className={"avatarBox"}>
              <Image roundedCircle src="https://avatars1.githubusercontent.com/u/32240906?s=460&v=4" width="100px" height="100px" />
            </div>
            <div className="formBox row align-items-center justify-content-around">
              <Form.Control
                className={"col-12 col-sm-8 col-md-9 form"}
                type="text"
                placeholder="GitHub Username"
                name="uname"
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
              />
              <Button className={"col-6 col-sm-3 col-md-2"} variant="outline-primary"
                type="submit"
              >Check</Button>
            </div>
          </div>
        </Form>


        <div className={"profile"} style={ bool ? { padding:"10px" } : {} }>
          <div>
            {bool ? <CircleProgress percentage={((count / 4) * 100)} width={80} /> : ''}
            { message !== '' ? <p>{message}</p> : '' }
          </div>
        </div>

        <div className={"container"}>{bool ?
          <div className={"row justify-content-center"}>
            {data.map((d) => (
              <div className={"col-10 pullbox"}>
                <div className={"row"}>
                  <Card className={"col-12 col-sm-6 col-lg-7 card-info"}>
                    <p style={{ fontSize: "3mm" }}>{new Date(Date.parse(d.created_at)).toUTCString()}</p>
                    <p>You submitted 
                      <a href={d.pr_url} target="_blank" rel="noopener noreferrer" > {d.title}</a> to 
                      <a href={d.repo_url} target="_blank" rel="noopener noreferrer" > {d.repo_name} </a>
                    </p>
                  </Card>
                  <Card className={"col-12 col-sm-6 col-lg-4 detail-card"} style={d.label_bool || d.topic_bool ? { borderColor: "#2ecc71",backgroundColor:"rgba(46,204,113,0.1)" } : { borderColor: "#e74c3c",backgroundColor:"rgba(231,76,60,0.1)" }} >
                    <p>
                      Label/Topic : {d.label_bool || d.topic_bool ?
                        <img src={require('./correct.png')} height="30px" width="30px" alt="topic" /> :
                        <img src={require('./wrong.png')} height="30px" width="30px" alt="label" />}</p>
                    <p>Pull Request Status : &nbsp;  {d.state}</p>
                    <p>Public Repository : &nbsp;   <img src={require('./correct.png')} height="30px" width="30px" alt="topic" /> </p>
                    <p>Review Period : {d.review}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          : ''
        }</div>

        <div className="loader" style={loaderToggle?{ display:'block'} : {display:'none'}}>
          <div className="loadscreen">
          </div>
        </div>


        <footer className={"center"} style={{marginTop:bool?"50px":"20px",textAlign:'center' }}>
          <p>Attention : This site is just a fan made and it is not affiliated by <a href="https://hacktoberfest.digitalocean.com/" target="_blank" rel="noopener noreferrer">Hacktoberfest</a></p>
        </footer>
      </div>

    </div>
  );
}
export default Home;

