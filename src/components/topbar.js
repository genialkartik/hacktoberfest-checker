import React from 'react';

import {
  Container,
  Row,
  Col,
  Form,
  Image,
  Card,
  ButtonGroup,
} from 'react-bootstrap';
import './assets/Css/home.css';
import announcement from './assets/images/announcement.png';
import HackImg from './assets/images/logohck.png';
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

function TopBar(props) {

  return (
    <>
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

          </>
    
  );
}
export default TopBar;
