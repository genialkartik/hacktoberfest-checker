import { Container } from '@mui/material';
import React from 'react';
import BlogNav from '../Blog/blognav';
import TopBar from '../topbar';

export default function Blog() {
  return (
    <>
      <TopBar />
      <Container
        sx={{
          background: '#1C1C3F',
          my: 2,
          borderRadius: '20px',
        }}
      >
        <BlogNav />
      </Container>
    </>
  );
}
