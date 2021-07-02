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

//
function Home() {
  const [username, setUsername] = useState({ uname: '' });
  const [data, Setdata] = useState([]);
  const [userImg, setUserImg] = useState(
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--ajGtUgSU--%2Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_80%2Cw_180%2Fhttps%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fbadge%2Fbadge_image%2F80%2Fhacktoberfest2020-badge_2.png&f=1&nofb=1'
  );
  const [bool, Setbool] = useState(false);
  const [count, Setcount] = useState(0);
  const [message, Setmessage] = useState('');
  const [loaderToggle, SetLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetLoader(true);
    await axios
      .post('http://localhost:2020', { uname: username })
      .then((res) => {
        //Check weather User made pull request is made or no
        if (!res.data.user_img) {
          SetLoader(false);
          Setbool(false);
          Setdata('');
          setUserImg(
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--ajGtUgSU--%2Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_80%2Cw_180%2Fhttps%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fbadge%2Fbadge_image%2F80%2Fhacktoberfest2020-badge_2.png&f=1&nofb=1'
          );
          Setmessage('Ugh!! INVALID username');
        } else if (res.data.noprs && res.data.user_img) {
          SetLoader(false);
          Setbool(false);
          Setdata('');
          setUserImg(res.data.user_img);
          Setmessage(
            "Damn! why didn't you made any PR in October. Well, Better Luck next time."
          );
        } else {
          if (res.status === 200) {
            var data = res.data.cb;
            setUserImg(res.data.user_img);
            for (var i = 1; i < res.data.cb.length; i++) {
              var d = new Date(res.data.cb[i].created_at);
              d.setDate(d.getDate() + 14);

              if (new Date() > d || new Date() === d)
                data[i].review = 'Completed';
              else {
                var diff = Math.abs(d.getTime() - new Date().getTime());
                var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
                data[i].review = diffDays + ' days left';
              }
            }
            Setdata(data);

            if (res.data.cb.length >= 4) {
              Setcount(4);
              Setmessage('Congrats!! You have done 4 PR(s)');
            } else {
              var Pr_left = 4 - res.data.cb.length;
              Setcount(4 - Pr_left);
              Setmessage(
                "You're just " + Pr_left + ' PR(s) away to get a tee/tree'
              );
            }
            Setbool(true);
            SetLoader(false);
          }
        }
      });
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
                  Setmessage('');
                  Setbool(false);
                  Setdata('');
                  setUserImg(
                    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--ajGtUgSU--%2Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_80%2Cw_180%2Fhttps%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fbadge%2Fbadge_image%2F80%2Fhacktoberfest2020-badge_2.png&f=1&nofb=1'
                  );
                }}
                required
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
                  {data.map((d) => (
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

        <div
          className="details-of-site"
          style={{ marginTop: bool ? '50px' : '20px' }}
        >
          <div className="part">
            <a
              target="_blank"
              href="https://github.com/genialkartik/hacktoberfest-checker"
              rel="noopener noreferrer"
              className="btn btn-success"
            >
              <span className={'fa fa-github'}></span>
              Github
            </a>
          </div>
          <div className="part">
            <a
              target="_blank"
              href="https://github.com/genialkartik/hacktoberfest-checker/graphs/contributors"
              rel="noopener noreferrer"
              className="btn btn-info"
            >
              <span className={'fa fa-code'}></span>
              Contributors
            </a>
          </div>
        </div>

        <footer className={'center'} style={{ textAlign: 'center' }}>
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
export default Home;
