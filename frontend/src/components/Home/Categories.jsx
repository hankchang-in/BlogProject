import React from 'react'
import { Button , Box } from '@mui/material'
import styled from '@emotion/styled'


const Container = styled(Box)`
    background-color : #101820;
    height : 55vh;
    display: flex;
    justify-content: center;
    align-items: center;


`
const CreateBlog = styled(Button)`
    background-color: #317773;
    color: white;
    font-weight: 500;
    
`

const Categories = () => {
  return (
    <div>
        <Container>
        <CreateBlog variant='outlined'>Create Blog</CreateBlog>
        </Container>
    </div>
  )
}

export default Categories