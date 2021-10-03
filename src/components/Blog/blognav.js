import { Grid } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import OpenSource from '../Blog/OpenSource/index';
import Footer from '../footer';
import HacktoberFestSteps  from './HacktoberfestSteps';
import HacktoberFestRules from './HacktoberfestRuless';
const Section = styled.section`
  padding: 1.4em;
  color: #dbe8d9;
`;
const Title = styled.h6`
  font-size: 1.2em;
  color: rgb(218, 62, 62);
  font-weight: bold;
  font-family: 'Gill Sans', serif;
  margin-top: 1rem;
`;

export default function BlogNav() {
  return (
    <>
      <Section>
        <Grid container>
          <Grid item xs={2}>
            <Title>
              <a href={'/'} style={{ color: '#999' }}>
                Home
              </a>{' '}
            </Title>
          </Grid>
        </Grid>
        <HacktoberFestSteps />
        <HacktoberFestRules />
        <OpenSource />
      </Section>
      <Footer />
    </>
  );
}
