import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import CSLlogosrc from '../components/assets/images/hack.svg';

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  return (
    <Box
      component="img"
      src={CSLlogosrc}
      // src="/static/logo.svg"
      sx={{ width: 90, height: 40, ...sx }}
    />
  );
}
