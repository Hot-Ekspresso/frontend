import { Box, Card, CardContent, CardHeader, TextField } from '@mui/material'
import React from 'react';
import { H4 } from '../../components/typography';

export default function Login() {
  return (
    <Card>
      <CardHeader title="Login"/>
      <CardContent>
        <TextField />
      </CardContent>
    </Card>
  )
}
