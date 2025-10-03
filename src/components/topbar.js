import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './assets/Css/home.css';
import announcement from './assets/images/announcement.png';

function TopBar() {
  return (
    <Container fluid className={'nav center'}>
      <Row className={'container text-center'}>
        <Col>
          <span style={{ display: 'inline-block', padding: '0px 5px' }}>
            <img
              src={announcement}
              style={{ filter: 'invert()' }}
              height="40px"
              alt="announcement"
            />
          </span>{' '}
          <span style={{ display: 'inline-block' }}>
            Don't forget to{' '}
            <a
              href="https://hacktoberfest.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Register</strong>
            </a>{' '}
            to be eligible for the hacktoberfest!
          </span>
        </Col>
      </Row>
    </Container>
  );
}
export default TopBar;
