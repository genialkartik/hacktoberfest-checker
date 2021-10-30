import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './assets/css/home.css';
import announcement from './assets/images/announcement.png';

function TopBar(props) {
  return (
    <>
      <Container fluid className={'nav center'}>
        <Row className={'container text-center'}>
          <Col>
            <span style={{display: "inline-block", padding: "0px 5px"}}><img src={announcement} height="40px" alt="announcement" /></span>{' '}
            <span style={{display:"inline-block"}}>Don't forget to
            <a
              href="https://hacktoberfest.digitalocean.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <strong style={{ color: 'rgb(218, 64, 8)' }}>Register</strong>
            </a>{' '}
            to be eligible for the hacktoberfest!
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default TopBar;
