import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Card,
} from 'react-bootstrap';
import { CircleProgress } from 'react-gradient-progress';
import './home.css';
import announcement from './announcement.png';
import { getPRs } from '../api';

function LandingPage() {
  const [username, setUsername] = useState({ uname: '' });
  const [data, Setdata] = useState([]);
  const [userImg, setUserImg] = useState(
    'data:image/png;base64,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'
  );
  const [bool, Setbool] = useState(false);
  const [count, Setcount] = useState(0);
  const [message, Setmessage] = useState('');
  const [loaderToggle, SetLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetLoader(true);
    const data = await getPRs('genialkartik');
    console.log(data);
    // await axios
    //   .post('https://hacktoberfestcheck.herokuapp.com', { uname: username })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       var data = data.PRs;
    setUserImg(data.avatar_url);
    for (var i = 1; i < data.PRs.length; i++) {
      var d = new Date(data.PRs[i].created_at);
      d.setDate(d.getDate() + 14);

      if (new Date() > d || new Date() === d) data.PRs[i].review = 'Completed';
      else {
        var diff = Math.abs(d.getTime() - new Date().getTime());
        var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        data[i].review = diffDays + ' days left';
      }
    }
    Setdata(data);

    if (data.PRs.length >= 4) {
      Setcount(4);
      Setmessage('Congrats!! You have done 4 PR(s)');
    } else {
      var Pr_left = 4 - data.PRs.length;
      Setcount(4 - Pr_left);
      Setmessage("You're just " + Pr_left + ' PR(s) away to get a tee/tree');
    }
    Setbool(true);
    SetLoader(false);
    // }
    // });
  };

  return (
    <div className={'appbody'}>
      <Container fluid className={'nav center'}>
        <Row className={'container text-center'}>
          <Col>
            <img src={announcement} height="40px" alt="announcement" />{' '}
            &nbsp;Don't forget to
            <a
              href="https://hacktoberfest.digitalocean.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              register
            </a>{' '}
            to be eligible for the tee or tree!
          </Col>
        </Row>
      </Container>

      <div className={'main'}>
        <div className={'center hacktoberfest-imgbox'}>
          <Image src={require('./hack.svg')} height="260px" />
        </div>

        <h1
          className={'center text-center'}
          style={{ color: '#FF8AE2', fontFamily: 'sans' }}
        >
          Check Your Progress
        </h1>

        <Form
          onSubmit={handleSubmit}
          autoComplete="off"
          inline
          className={'row justify-content-center form1'}
        >
          <div className={'col-12 col-sm-10 col-lg-8 d-flex'}>
            <div className={'avatarBox'}>
              <Image roundedCircle src={userImg} width="100px" height="100px" />
            </div>
            <div className="formBox row align-items-center justify-content-around">
              <Form.Control
                className={'col-12 col-sm-8 col-md-9 form'}
                type="text"
                placeholder="GitHub Username"
                name="uname"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <Button
                className={'col-6 col-sm-3 col-md-2'}
                variant="outline-primary"
                type="submit"
              >
                Check
              </Button>
            </div>
          </div>
        </Form>

        {loaderToggle ? (
          <div className="loader">
            <div className="loadscreen"></div>
          </div>
        ) : (
          <div>
            <div className={'profile'} style={bool ? { padding: '10px' } : {}}>
              <div>
                {bool ? (
                  <CircleProgress percentage={(count / 4) * 100} width={80} />
                ) : (
                  ''
                )}
                {message !== '' ? <p>{message}</p> : ''}
              </div>
            </div>

            <div className={'container'}>
              {bool ? (
                <div className={'row justify-content-center'}>
                  {data.PRs.map((d) => (
                    <div className={'col-10 pullbox'} key={d.title}>
                      <div className={'row'}>
                        <Card className={'col-12 col-sm-6 col-lg-7 card-info'}>
                          <p>
                            You submitted
                            <b>
                              <a
                                href={d.pr_url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {' '}
                                {d.title}
                              </a>
                            </b>{' '}
                            to
                            <b>
                              <a
                                href={d.repo_url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {' '}
                                {d.repo_name}{' '}
                              </a>
                            </b>
                          </p>
                          <p style={{ fontSize: '3mm' }}>
                            <br />
                            {new Date(Date.parse(d.created_at)).toUTCString()}
                          </p>
                        </Card>
                        <Card
                          className={'col-12 col-sm-6 col-lg-4 detail-card'}
                          style={
                            d.label_bool || d.topic_bool
                              ? {
                                  borderColor: '#2ecc71',
                                  backgroundColor: 'rgba(46,204,113,0.1)',
                                }
                              : {
                                  borderColor: '#e74c3c',
                                  backgroundColor: 'rgba(231,76,60,0.1)',
                                }
                          }
                        >
                          <p>
                            Label/Topic :{' '}
                            {d.label_bool || d.topic_bool ? (
                              <img
                                src={require('./correct.png')}
                                height="30px"
                                width="30px"
                                alt="topic"
                              />
                            ) : (
                              <img
                                src={require('./wrong.png')}
                                height="23px"
                                width="23px"
                                alt="label"
                              />
                            )}
                          </p>
                          <p>Pull Request Status : &nbsp; {d.state}</p>
                          <p>
                            Public Repository : &nbsp;{' '}
                            <img
                              src={require('./correct.png')}
                              height="30px"
                              width="30px"
                              alt="topic"
                            />{' '}
                          </p>
                          <p>Review Period : {d.review}</p>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        )}

        <footer
          className={'center'}
          style={{ marginTop: bool ? '50px' : '20px', textAlign: 'center' }}
        >
          <p>
            Attention : This site is just a fan made and it is not affiliated by{' '}
            <a
              href="https://hacktoberfest.digitalocean.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hacktoberfest
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
export default LandingPage;
