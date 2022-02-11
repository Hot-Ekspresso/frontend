import { Box } from '@mui/system';
import React from 'react';
import * as colors from '@mui/material/colors';
import { AppBar, Toolbar, Typography } from '@mui/material';

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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hot Ekspresso Travel ✈️
          </Typography>
        </Toolbar>
      </AppBar>
        {children}
    </Box>
  )
}

export default LoginLanding;