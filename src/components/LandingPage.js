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
  const getProgressColor = (value) => {
    if (value >= 100) return '#4caf50'; // Green for complete
    if (value >= 75) return '#ff8a00'; // Orange for near complete
    if (value >= 50) return '#1a73e8'; // Blue for halfway
    if (value >= 25) return '#9c27b0'; // Purple for quarter
    return '#e91e63'; // Pink for just started
  };

  const colorVar = getProgressColor(props.value);

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        sx={{
          color: colorVar,
          filter: `drop-shadow(0 0 10px ${colorVar}40)`,
        }}
        variant="determinate"
        {...props}
        size={120}
        thickness={4}
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
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            color: colorVar,
            fontWeight: 700,
            fontSize: '1.5rem',
          }}
        >
          {Math.round(props.value)}%
        </Typography>
        <Typography
          variant="caption"
          component="div"
          sx={{
            color: '#a0aec0',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginTop: '2px',
          }}
        >
          Complete
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

      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          background:
            'linear-gradient(135deg, rgba(255, 138, 0, 0.1) 0%, rgba(76, 154, 255, 0.1) 50%, rgba(156, 39, 176, 0.1) 100%)',
          padding: '60px 20px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(circle at 50% 50%, rgba(255, 138, 0, 0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        ></div>

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #ff8a00, #e91e63)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '20px',
              lineHeight: 1.2,
            }}
          >
            Hacktoberfest 2025 Checker
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              color: '#a0aec0',
              marginBottom: '30px',
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto 30px',
            }}
          >
            Track your progress toward completing Hacktoberfest 2025! Make{' '}
            <strong style={{ color: '#ff8a00' }}>6 valid pull requests</strong>{' '}
            during October to earn your digital badges and become a Super
            Contributor.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                background: 'rgba(255, 138, 0, 0.1)',
                border: '1px solid rgba(255, 138, 0, 0.3)',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '14px',
                color: '#ff8a00',
                fontWeight: 600,
              }}
            >
              October 1-31, 2025
            </div>
            <div
              style={{
                background: 'rgba(76, 154, 255, 0.1)',
                border: '1px solid rgba(76, 154, 255, 0.3)',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '14px',
                color: '#4c9aff',
                fontWeight: 600,
              }}
            >
              6 Valid PRs Required
            </div>
            <div
              style={{
                background: 'rgba(76, 175, 80, 0.1)',
                border: '1px solid rgba(76, 175, 80, 0.3)',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '14px',
                color: '#4caf50',
                fontWeight: 600,
              }}
            >
              Digital Badges
            </div>
          </div>
        </div>
      </div>

      <div className={'main'}>
        <div className={'center text-center'}>
          <h2 className="check-your-progress-text">Check Your Progress</h2>
        </div>

        <Form
          onSubmit={handleSubmit}
          autoComplete="off"
          inline
          className={'row justify-content-center form1'}
          style={{ width: '100%' }}
        >
          <div className={'col-12 col-sm-10 col-lg-8 form1-inner'}>
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
            {bool && message && (
              <div className={'profile'}>
                <div
                  style={{
                    background: 'rgba(30, 35, 40, 0.8)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    padding: '40px',
                    border: '1px solid rgba(255, 138, 0, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    margin: '20px',
                    maxWidth: '600px',
                  }}
                >
                  {bool && (
                    <div style={{ marginBottom: '20px' }}>
                      <CircularProgressWithLabel
                        value={Math.round((count / 6) * 100)}
                      />
                    </div>
                  )}
                  <h4
                    style={{
                      color: bool
                        ? count >= 6
                          ? '#4caf50'
                          : '#ff8a00'
                        : '#e91e63',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      lineHeight: 1.5,
                      margin: '0',
                      textAlign: 'center',
                    }}
                  >
                    {message || ''}
                  </h4>
                </div>
              </div>
            )}

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
                                  borderColor: '#4caf50',
                                  backgroundColor: '#1e2328',
                                  boxShadow:
                                    '0 4px 12px rgba(76, 175, 80, 0.15)',
                                }
                              : {
                                  borderColor: '#ff8a00',
                                  backgroundColor: '#1e2328',
                                  boxShadow:
                                    '0 4px 12px rgba(255, 138, 0, 0.15)',
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
