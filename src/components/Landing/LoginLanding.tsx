import { Box } from '@mui/system';
import React from 'react';
import * as colors from '@mui/material/colors';

const LoginLanding: React.FC = ({children}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "100px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 70,
          backgroundColor: colors.blue[700],
        }}
      >
      </Box>
        {children}
    </Box>
  )
}

export default LoginLanding;