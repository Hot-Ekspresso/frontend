import { Box, Card, CardContent, CardHeader, Link, TextField } from '@mui/material'
import React from 'react';
import loginStore from '../../store/login.store';
import LoadingButton from '@mui/lab/LoadingButton';
import { observer } from 'mobx-react';
import registerStore from '../../store/register.store';

const Register: React.FC = observer(() => {
  const store = registerStore;
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
        <CardHeader title="Sign Up"/>
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
            label="Email"
            type="email"
            disabled={store.isFetching}
          />
          <TextField 
            size="small"
            label="Password"
            type="password"
            disabled={store.isFetching}
          />
          <TextField 
            size="small"
            label="Repeat password"
            type="password"
            disabled={store.isFetching}
          />
          <Link href="/login" variant="body2" underline="hover">
            Already have an account? Log in here!
          </Link>
          <LoadingButton 
            loading={store.isFetching}
            variant="contained"
            onClick={store.submit}
          >
            Sign Up
          </LoadingButton>
        </CardContent>
      </Card>
    </Box>
  )
});

export default Register;
