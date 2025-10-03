import React, { useState } from 'react';
import { Form, Image, Card } from 'react-bootstrap';
import './assets/Css/home.css';
import HacktoberfestLogo from '../components/assets/images/hack.svg';
import CorrectImage from './assets/images/correct.png';
import WrongImage from './assets/images/wrong.png';
import GithubApi from '../api/index';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import TopBar from './topbar';
import Footer from './footer';

function CircularProgressWithLabel(props) {
  const colorVar =
    props.value > 75
      ? 'var(--psybeam)'
      : props.value > 50
        ? 'var(--surf)'
        : 'var(--spark)';
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        sx={{ color: colorVar }}
        variant="determinate"
        {...props}
        size={100}
      />
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserAvatar('');
    setPullRequest([]);
    setMessage('');
    setCount(0);
    setBool(false);

    try {
      setLoader(true);

      // Validate username input
      if (!username || typeof username !== 'string' || username.trim() === '') {
        throw new Error('Please enter a valid GitHub username');
      }

      const resp = await GithubApi.getPRs(username.trim());

      // Check if response has error
      if (resp.err) {
        throw new Error(resp.err);
      }

      // Validate response structure
      if (!resp || typeof resp !== 'object') {
        throw new Error('Invalid response from API');
      }

      const userPrs = resp.user_prs || [];
      const validPrs = resp.valid_prs || 0;
      const totalPrs = resp.total_prs || 0;

      // Set user data
      setPullRequest(userPrs);
      setUserAvatar(resp.user_avatar_url || '');

      // Calculate review periods for each PR
      if (Array.isArray(userPrs) && userPrs.length > 0) {
        const updatedPrs = userPrs.map((pr) => {
          if (!pr.created_at) {
            return { ...pr, review: 'Unknown date' };
          }

          try {
            const createDate = new Date(pr.created_at);
            const reviewEndDate = new Date(createDate);
            reviewEndDate.setDate(reviewEndDate.getDate() + 7);

            if (new Date() >= reviewEndDate || pr.merged_at) {
              return { ...pr, review: 'Completed' };
            } else {
              const timeDiff = Math.abs(
                reviewEndDate.getTime() - new Date().getTime(),
              );
              const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
              return {
                ...pr,
                review: `${daysDiff} day${daysDiff !== 1 ? 's' : ''} left`,
              };
            }
          } catch (dateError) {
            console.warn('Error parsing date for PR:', pr.title, dateError);
            return { ...pr, review: 'Date error' };
          }
        });
        setPullRequest(updatedPrs);
      }

      // Calculate progress and messages based on valid PRs for Hacktoberfest 2025
      const requiredPrs = 6;
      const validPrsCount = Math.min(validPrs, requiredPrs);

      setCount(validPrsCount);

      if (validPrsCount >= requiredPrs) {
        setMessage(
          '🎉 Congratulations! You have completed Hacktoberfest 2025 with 6+ valid PRs!',
        );
        setBool(true);
      } else if (validPrsCount > 0) {
        const remaining = requiredPrs - validPrsCount;
        setMessage(
          `Great start! You need ${remaining} more valid PR${remaining !== 1 ? 's' : ''} to complete Hacktoberfest 2025`,
        );
        setBool(true);
      } else if (totalPrs > 0) {
        setMessage(
          'You have PRs, but none are valid for Hacktoberfest 2025. Make sure they are in repos with "hacktoberfest" topic or have "hacktoberfest-accepted" label.',
        );
        setBool(true);
      } else {
        setMessage(
          'No Hacktoberfest 2025 contributions found. Start contributing to eligible repositories!',
        );
        setBool(false);
      }
      setLoader(false);
    } catch (error) {
      console.error('Error fetching pull requests:', error);
      setLoader(false);
      setBool(false);
      setCount(0);
      setPullRequest([]);
      setUserAvatar('');

      // Display user-friendly error message
      const errorMessage = error?.message || 'An unexpected error occurred';
      setMessage(errorMessage);
    }
  };

  return (
    <div className={'appbody'}>
      <TopBar />

      <div className={'main'}>
        <div className={'center hacktoberfest-imgbox'}>
          <Image src={HacktoberfestLogo} height="150px" />
        </div>
        <div className={'center text-center'}>
          {/* <Image src={HackImg} style={{ width: '50px', marginRight: '10px' }} /> */}
          <h2 className="check-your-progress-text">Check Your Progress</h2>
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
                  'https://thumbnail.imgbin.com/2/4/7/imgbin-social-media-computer-icons-github-logo-symbol-social-media-ny7GSWdD1cDeyKrtvtZuYZPNr_t.jpg'
                }
                width="100px"
                height="100px"
              />
            </div>
            <div className="formBox row align-items-center justify-content-around">
              <Form.Control
                className={'col-12 col-sm-8 col-md-9 form'}
                type="text"
                placeholder="Your GitHub Username"
                name="uname"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <Button
                className={'col-6 col-sm-3 col-md-2 special'}
                size="large"
                variant="contained"
                type="submit"
                style={{ fontFamily: 'var(--main-font)' }}
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
                  <CircularProgressWithLabel
                    value={Math.round((count / 6) * 100)}
                  />
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
                                  borderColor: 'var(--surf)',
                                  backgroundColor: 'var(--main-background)',
                                }
                              : {
                                  borderColor: 'var(--spark)',
                                  backgroundColor: 'var(--main-background)',
                                }
                          }
                        >
                          <p>
                            Label/Topic :{' '}
                            {pr._has_hacktoberfest_label ||
                            pr._has_hacktoberfest_topic ? (
                              <img
                                src={CorrectImage}
                                height="30px"
                                width="30px"
                                alt="topic"
                              />
                            ) : (
                              <img
                                src={WrongImage}
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
                              src={CorrectImage}
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
                                href={pr.pr_url}
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
                              Date.parse(pr.created_at),
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
        <Footer />
      </div>
    </div>
  );
}
export default LandingPage;
