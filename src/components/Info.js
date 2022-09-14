import React from 'react'
import styled from 'styled-components'

function Info() {
  return (
    <Container>
      <Wrap>
        <Left>
            <Image>
                <img src='./images/profile.jpg' />
            </Image>
        </Left>
        <Right>
            <p>I'm a developer of Desktop, Mobile, Web 2.0 & Web 3.0 projects. I am capable of managing them in a well-organized manner. I can create Websites, Web Applications, Web 3.0 Applications(dapps), Smart Contracts,Desktop applications and Database Designs. I have around a year and a half of development expertise and I'm proud to claim that I've worked on over 50 NFT and other projects in the last six months. I'm familiar with a wide range of programming languages and tools. My ultimate goal is to ensure that you are completely satisfied with your purchase. Thank you!</p>
        </Right>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 70%;
    background: black;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

 

`
const Wrap = styled.div`
    width: 95%;
    display: flex;
    
`

const Left = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Right = styled.div`
    width: 50%;

    p{
        color: #fff;
        font-size: 22px;
        letter-spacing: 1.3px;
        text-align: center;
        padding: 10px;
    }
`

const Image = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;

    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

`
export default Info
