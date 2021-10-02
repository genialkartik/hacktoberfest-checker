import React from 'react';
import BlogNav from '../Blog/blognav';
import TopBar from '../topbar';

export default function Blog() {
  return (
    <>
      <TopBar />
      <div style={{ backgroundColor: '#2B3531', paddingInline: '20%' }}>
        <BlogNav />
      </div>
    </>
  );
}
