import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Image,
  Card,
  ButtonGroup,
} from 'react-bootstrap';
import '../components/assets/css/home.css';
import announcement from './assets/images/announcement.png';
import HackImg from './assets/images/logohck.png';
import GithubApi from '../api/index';
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  CircularProgress,
  Typography,
} from '@mui/material';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} size={100} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h5" component="div">
          {`${props.value}%`}
        </Typography>
      </Box>
    </Box>
  );
}

function LandingPage(props) {
  const [username, setUsername] = useState({ uname: '' });
  const [userImg, setUserAvatar] = useState('');
  const [bool, setBool] = useState(false);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [loaderToggle, setLoader] = useState(false);
  const [pullRequests, setPullRequest] = useState([]);
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    (async () => {
      const contri = await GithubApi.getContributors();
      setContributors(contri || []);
    })();
  }, [props]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      if (!username) {
        throw 'User not found';
      }
      const resp = await GithubApi.getPRs(username);
      if (resp.err) {
        throw resp.err || 'Something gone wrong!';
      }
      if (resp.user_prs.length <= 0) {
        throw 'No contribution found!';
      }
      setPullRequest(resp.user_prs || []);
      setUserAvatar(resp.user_avatar_url);
      if (resp?.user_prs?.length) {
        for (let i = 0; i < resp.user_prs?.length; i++) {
          let create_date = new Date(resp.user_prs[i].created_at);
          create_date.setDate(create_date.getDate() + 14);
          if (new Date() >= create_date) {
            resp.user_prs[i].review = 'Completed';
          } else {
            let timeDiff = Math.abs(
              create_date.getTime() - new Date().getTime()
            );
            let daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
            resp.user_prs[i].review = daysDiff + ' days left';
          }
        }
      }

      if (resp.user_prs?.length >= 4) {
        setCount(4);
        setMessage('Congrats!! You have done 4 PR(s)');
      } else {
        var Pr_left = 4 - resp.user_prs?.length;
        setCount(4 - Pr_left);
        setMessage("You're just " + Pr_left + ' PR(s) away to get a tee');
      }
      setBool(true);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      setMessage(error);
    }
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
              <strong style={{ color: 'rgb(218, 64, 8)' }}>Register</strong>
            </a>{' '}
            to be eligible for the hacktoberfest!
          </Col>
        </Row>
      </Container>

      <div className={'main'}>
        <div className={'center hacktoberfest-imgbox'}>
          <Image
            src={require('../components/assets/images/hack.svg')}
            height="200px"
          />
        </div>
        <div
          className={'center text-center'}
          style={{ fontFamily: 'sans', color: '#dbe8d9' }}
        >
          <Image src={HackImg} />
          <h1 style={{ marginLeft: '1rem', marginTop: 10 }}>
            Check Your Progress
          </h1>
        </div>

        <Form
          onSubmit={handleSubmit}
          autoComplete="off"
          inline
          className={'row justify-content-center form1'}
        >
          <div className={'col-12 col-sm-10 col-lg-8 d-flex'}>
            <div className={'avatarBox'}>
              <Image
                roundedCircle
                src={
                  userImg ||
                  'https://hacktoberfest.digitalocean.com/_nuxt/img/sign-up-accent-right.2faed05.svg'
                }
                width="100px"
                height="100px"
              />
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
                style={{ backgroundColor: '#f74700', borderRadius: 50 }}
                size="large"
                variant="contained"
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
            <div className={'profile'}>
              <div>
                {bool && (
                  <CircularProgressWithLabel value={(count / 4) * 100} />
                )}
                <h4>{message || ''} </h4>
              </div>
            </div>

            <div className={'container'}>
              {bool && (
                <div className={'row justify-content-center'}>
                  {pullRequests?.map((pr) => (
                    <div className={'col-10 pullbox'} key={pr.title}>
                      <div className={'row'}>
                        <Card
                          className={'col-12 col-sm-6 col-lg-5 detail-card'}
                          style={
                            pr._has_hacktoberfest_label ||
                              pr._has_hacktoberfest_topic
                              ? {
                                borderColor: '#2ecc71',
                                backgroundColor: '#2B3531',
                              }
                              : {
                                borderColor: '#e74c3c',
                                backgroundColor: 'rgba(231,76,60,0.1)',
                              }
                          }
                        >
                          <p>
                            Label/Topic :{' '}
                            {pr._has_hacktoberfest_label ||
                              pr._has_hacktoberfest_topic ? (
                              <img
                                src={require('../components/assets/images/correct.png')}
                                height="30px"
                                width="30px"
                                alt="topic"
                              />
                            ) : (
                              <img
                                src={require('../components/assets/images/wrong.png')}
                                height="23px"
                                width="23px"
                                alt="label"
                              />
                            )}
                          </p>
                          <p>
                            Pull Request Status : &nbsp;{' '}
                            {pr.state?.toUpperCase()}
                          </p>
                          <p>
                            Public Repository : &nbsp;{' '}
                            <img
                              src={require('../components/assets/images/correct.png')}
                              height="30px"
                              width="30px"
                              alt="topic"
                            />{' '}
                          </p>
                          <p>Review Period : {pr.review}</p>
                        </Card>
                        <Card className={'col-12 col-sm-6 col-lg-7 card-info'}>
                          <p>
                            You submitted
                            <b>
                              <a
                                href={pr.pr_url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {' '}
                                {pr.title?.toUpperCase()}
                              </a>
                            </b>{' '}
                            to
                            <b>
                              <a
                                href={pr.repo_url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {' '}
                                {pr.repo_name?.toUpperCase()}{' '}
                              </a>
                            </b>
                          </p>
                          <p style={{ fontSize: '3mm' }}>
                            <br />
                            {new Date(
                              Date.parse(pr.created_at)
                            ).toLocaleString()}
                          </p>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        <footer
          style={{
            marginTop: bool ? '50px' : '20px',
            textAlign: 'center',
            color: '#dbe8d9',
          }}
        >
          <div
            style={{ marginBlock: 20 }}
            className="row justify-content-center"
          >
            <a
              href="https://github.com/genialkartik/hacktoberfest-checker/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Contributors
            </a>
          </div>
          <div
            style={{ marginBlock: 20 }}
            className="row justify-content-center"
          >
            <AvatarGroup max={contributors.length || 2}>
              {contributors?.map((contrib, idx) => (
                <Avatar
                  alt={contrib.login}
                  key={idx}
                  src={contrib.avatar_url}
                />
              ))}
            </AvatarGroup>
          </div>
          <div
            style={{ marginBlock: 20 }}
            className="row justify-content-center"
          >
            Attention : This site is just a fan made and it is not affiliated by{' '}
            <a
              href="https://hacktoberfest.digitalocean.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Hacktoberfest
            </a>
          </div>
          <div
            style={{ marginBlock: 20 }}
            className="row justify-content-center"
          >
            <ButtonGroup variant="text" aria-label="text button group">
              <Button
                sx={{ color: '#ff4400' }}
                onClick={() => (window.location.href = '/blog')}
              >
                Blog
              </Button>
              <Button
                sx={{ color: '#ff4400' }}
                onClick={() =>
                (window.location.href =
                  'http://github.com/genialkartik/hacktoberfest-checker')
                }
              >
                GitHub
              </Button>
              <Button
                sx={{ color: '#ff4400' }}
                onClick={() =>
                (window.location.href =
                  'https://hacktoberfest.digitalocean.com/')
                }
              >
                Participate
              </Button>
            </ButtonGroup>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default LandingPage;
