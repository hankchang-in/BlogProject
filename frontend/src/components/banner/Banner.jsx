import React from 'react'
import { Box , Typography , styled } from '@mui/material'

const Image = styled(Box)`
background : #d9d3c7;
    width: 100vw;
    height: 70vh;
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction : column;
`;
const Heading = styled(Typography)`
      display:grid;
      place-items : center;
      font-size: 100px;
      color: #FB641B;
      font-family: 'Poppins', sans-serif;

`;

const Description = styled(Typography)`
  font-size: 30px;
  font-family: 'Poppins', sans-serif;
  

`

const Banner = () => {
  return (
    <Image>
        <Heading>B-LOG'S</Heading>
        <Description>Discover stories, thinking, and expertise </Description>
        <Description>from writers on any topic.</Description>
        
    </Image>
  )
}

export default Banner