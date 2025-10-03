import React, { useEffect, useMemo } from 'react';
import NProgress from 'nprogress';
import { motion } from 'framer-motion';
import Logo from './LogoSquare';
import { alpha, Box, styled, GlobalStyles } from '@mui/material';

const globalStyles = (
  <GlobalStyles
    styles={{
      '#nprogress': {
        pointerEvents: 'none',
        '& .bar': {
          top: 0,
          left: 0,
          height: 2,
          width: '100%',
          position: 'fixed',
          zIndex: 1400,
          backgroundColor: '#1976d2',
          boxShadow: '0 0 2px #1976d2',
        },
        '& .peg': {
          right: 0,
          opacity: 1,
          width: 100,
          height: '100%',
          display: 'block',
          position: 'absolute',
          transform: 'rotate(3deg) translate(0px, -4px)',
          boxShadow: '0 0 10px #1976d2, 0 0 5px #1976d2',
        },
      },
    }}
  />
);

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background?.default || '#ffffff',
}));

export default function LoadingScreen({ ...other }) {
  useMemo(() => {
    NProgress.start();
  }, []);

  useEffect(() => {
    NProgress.done();
  }, []);

  return (
    <>
      {globalStyles}
      <RootStyle {...other}>
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeatDelay: 1,
            repeat: Infinity,
          }}
        >
          <Logo sx={{ width: 64, height: 64 }} />
        </motion.div>

        <Box
          component={motion.div}
          animate={{
            scale: [1.2, 1, 1, 1.2, 1.2],
            rotate: [270, 0, 0, 270, 270],
            opacity: [0.25, 1, 1, 1, 0.25],
            borderRadius: ['25%', '25%', '50%', '50%', '25%'],
          }}
          transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
          sx={{
            width: 100,
            height: 100,
            borderRadius: '25%',
            position: 'absolute',
            border: (theme) =>
              `solid 3px ${alpha(theme.palette.primary.dark, 0.24)}`,
          }}
        />

        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 270, 270, 0, 0],
            opacity: [1, 0.25, 0.25, 0.25, 1],
            borderRadius: ['25%', '25%', '50%', '50%', '25%'],
          }}
          transition={{
            ease: 'linear',
            duration: 3.2,
            repeat: Infinity,
          }}
          sx={{
            width: 120,
            height: 120,
            borderRadius: '25%',
            position: 'absolute',
            border: (theme) =>
              `solid 8px ${alpha(theme.palette.primary.dark, 0.24)}`,
          }}
        />
      </RootStyle>
    </>
  );
}
