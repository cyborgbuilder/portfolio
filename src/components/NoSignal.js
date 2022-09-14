import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { BsFillArrowRightSquareFill } from "react-icons/bs";
function NoSignal() {
  return (
    <Container>
      <Player>
      <ReactPlayer  url='/images/No Signal Final Demo.mp4'  config={{ file: { attributes: {autoPlay: true,muted: true  }}}} playing='playing' loop='true' width='100%' height='100%' controls='true' />
      </Player>
      <Text>
        
        <BsFillArrowRightSquareFill style={{margin: '10px', fontSize: '30px'}} />
        <a href='https://nosignalnft.com/'>
        <h1>Visit Website</h1>
        </a>

      </Text>
    </Container>
  )
}
const Container = styled.div`
    width: 100%;
    height: 130vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Player = styled.div`
    width: 100%;
    height: 80%;

`
const Text = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    color: #fff;
    padding: 40px 10px;

    h1{
        color: #fff;
    }

    a{
        text-decoration: none;
    }

`
export default NoSignal