import { Box, Card, CardContent, CardHeader, TextField } from '@mui/material'
import React from 'react';
import loginStore from '../../store/login.store';
import LoadingButton from '@mui/lab/LoadingButton';
import { observer } from 'mobx-react';

const Login: React.FC = observer(() => {
  const store = loginStore;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Card
        sx={{
          width: 500,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <CardHeader title="Log In"/>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "20px"
          }}
        >
        <TextField 
            size="small"
            label="Username"
            disabled={store.isFetching}
          />
          <TextField 
            size="small"
            label="Password"
            type="password"
            disabled={store.isFetching}
          />
          <LoadingButton 
            loading={store.isFetching}
            variant="contained"
            onClick={store.submit}
          >
            Log In
          </LoadingButton>
        </CardContent>
      </Card>
    </Box>
  )
});

export default Login;
