import {
  Container,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Button
} from '@mui/material'
import React from 'react'

const Profil:React.FC = () => {
  return (
    <Container maxWidth='sm'>
      <Card className='h-full'>
        <CardContent>
          <Grid container spacing={2} alignItems='center'>
            <Grid item xs={12} sm={4}>
              <Avatar
                alt='User Name'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s'
                sx={{ width: 100, height: 100 }}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant='h5'>Dilshodbek Hasanov</Typography>
              <Typography variant='body2' color='text.secondary'>
                Front-End Developer | JavaScript | React
              </Typography>
              <Button variant='contained' color='primary' sx={{ mt: 2 }}>
                Follow
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                sx={{ mt: 2, ml: 2 }}
              >
                Message
              </Button>
            </Grid>
          </Grid>
          <Typography variant='h4' sx={{ mt: 3 }}>
            About
          </Typography>
          <Typography fontSize={18} color='gray'>
            Passionate front-end developer with experience in building
            responsive web applications using React, MUI, and modern JavaScript
            technologies.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Profil
