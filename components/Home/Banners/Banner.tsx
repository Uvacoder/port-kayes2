import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Profile from '../../../public/images/profile.jpg';
import Check from "https://i.ibb.co/7GsGMZ9/1640680010421-1.jpg";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Banner() {
  function myLoader() {
    return <p> loading </p>;
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          {/* <Item>xs=8</Item> */}
          <img src="https://i.ibb.co/7GsGMZ9/1640680010421-1.jpg" alt="" />
        </Grid>
        <Grid item xs={8}>
          <Image
          // loader={myLoader}
          src={Profile}
          alt="Picture of the author"
          width={500}
          height={500} />  
        </Grid>
      </Grid>
    </Box>
  )
}