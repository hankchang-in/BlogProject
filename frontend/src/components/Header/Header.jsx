import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'


//Adding Style in component from here!!
const Component = styled(AppBar)`
    background: #FB641B;
    color: #000;
`
const Container = styled(Toolbar)`
    justify-content : center ;
    margin-bottom: 6px;
    & > a{
        padding: 20px;
        color: #FFFFFF;
        text-decoration : none;
    }
`

const Header = () => {
  return (
    <div>
        <Component>
            <Container>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/login'}>Logout</Link>
            </Container>
        </Component>
    </div>
  )
}

export default Header