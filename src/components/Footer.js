import React from 'react'
import styled from 'styled-components'
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
function Footer() {
  return (
    <Container>
        <p>Contacts</p>
      <Wrap>
      <Right>
       <a href='https://www.linkedin.com/in/isuru-udara-b4b88b219/'> < BsLinkedin style={{margin: '10px 20px', color: '#fff'}} /></a>
        <a href='https://www.instagram.com/cyborgbuilder/'>< BsInstagram style={{margin: '10px 20px',  color: '#fff'}} /></a>
        <a href='https://twitter.com/IsuruSenadeera'>< BsTwitter style={{margin: '10px 20px',  color: '#fff'}} /></a>
        </Right>
        <Left>
            {/* <h2>isuruud8@gmail.com</h2>
            <h2>+94 765671421</h2> */}
        </Left>
        
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 70%;
    min-height: 10vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: black;

    p{
        color: #fff;
        text-align: left;
        margin-bottom: 20px;
    }

`

const Wrap = styled.div`
    width: 95%;
   


`
const Box = styled.div`
    width: 280px;
    height: 280px;
    border: 1px solid #fff;
    border-radius: 15px;
    background: url('/images/mainback.png');
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    margin: 30px;
    &:hover{
        cursor: pointer;
        transform: scale(1.01);
    }

   
`

const Left = styled.div`
margin-top: 50px;

a{
    text-decoration: none;
}

    h2{
        color: #fff;
    }
`

const Right = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 50px;

  
`
export default Footer
