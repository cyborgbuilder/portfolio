import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
function Projects() {
    const navigate = useNavigate();
  return (
    <Container>
        <p>Projects</p>
      <Wrap>
        <Box onClick={() => navigate("/yoogoo")}>
            <Image>
            <img src='./images/animated_yoogoo.png' />
            </Image>
            <Text>
                <h1>YooGoo NFT</h1>
            </Text>
        </Box>

        <Box onClick={() => navigate("/cellphones")}>
            <Image>
            <img src='./images/cell.png' />
            </Image>
            <Text>
                <h1>CryptoCellphones</h1>
            </Text>
        </Box>

        <Box onClick={() => navigate("/prasara")}>
            <Image>
            <img src='./images/home.png' />
            </Image>
            <Text>
                <h1>Prasara Pvt Ltd.</h1>
            </Text>
        </Box>

        <Box onClick={() => navigate("/nosignal")}>
            <Image>
            <img src='./images/m5.png' />
            </Image>
            <Text>
                <h1>NO SIGNAL NFT</h1>
            </Text>
        </Box>

        <Box onClick={() => navigate("/mekaverse")}>
            <Image>
            <img src='./images/mekaverse.png' />
            </Image>
            <Text>
                <h1>MEKAVERSE-CLONE</h1>
            </Text>
        </Box>

        <Box onClick={() => navigate("/holdinghopes")}>
            <Image>
            <img src='./images/bot.png' />
            </Image>
            <Text>
                <h1>HOLDING HOPES</h1>
            </Text>
            
        </Box>
        
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 70%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: black;

    p{
        color: #fff;
        text-align: left;
        margin-bottom: 100px;
    }

`

const Wrap = styled.div`
    width: 95%;
    display: flex;
    flex-wrap: wrap;

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

const Image = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 80%;
        height: 100%;
        border-radius: 15px;
    }
`

const Text = styled.div`
    h1{
        color: #fff;
        font-family: 'Libre Barcode 39 Text', cursive;
        text-align: right;
        padding: 10px;
        font-size: 28px;
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
`
export default Projects
