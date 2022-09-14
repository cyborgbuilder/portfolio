import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Container>
        <Left>
            <Text>
                <h1>Isuru Senadeera</h1>
                <h3>CyborgBuilder</h3>
            </Text>
        </Left>
        <Right>
            <TextTwo>
                <h1>A guy is a cyborg. cyborg ancient and spiritual. He is trying to put his crazy ideas into cyber. That's what his projects all about. </h1>
                {/* <h1>CYBORGBUILDER</h1>
                <h1>CYBORGBUILDER</h1>
                <h1>CYBORGBUILDER</h1>
                <h1>CYBORGBUILDER</h1>
                <h1>CYBORGBUILDER</h1>
                <h1>CYBORGBUILDER</h1>
                <h1>CYBORGBUILDER</h1>
                <h1>CYBORGBUILDER</h1>
                <h1>CYBORGBUILDER</h1>
                <h1>CYBORGBUILDER</h1> */}
            

            </TextTwo>
        </Right>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;

`
const Left = styled.div`
    width: 70%;
    background: linear-gradient(180deg, #0000004A 0%, #000000 100%), url('/Images/profile4.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`
const Right = styled.div`
    width: 30%;
    background: #e6e6e6;
    position: relative;
`
const Text = styled.div`
    position: absolute;
    top: 30%;
    right: 7%;
    color: #fff;
    padding: 10px;

    h1{
        font-size: 90px;
    }
    h3{
        font-family: 'Libre Barcode 39 Text', cursive;
        font-size: 40px; 
    }
`

const TextTwo = styled.div`
    width: 100%;
    overflow: scroll;
    position: absolute;
    text-transform: uppercase;
    padding: 10px;


    h1{
        font-family: "Audiowide", sans-serif;
        font-size: 90px;
        
    }
    
`
export default Home
