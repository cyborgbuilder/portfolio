import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
function Prasara() {
  return (
    <Container>
      <ReactPlayer  url='/images/Prasara Project Demo Desktop.mp4'  config={{ file: { attributes: {autoPlay: true,muted: true  }}}} playing='playing' loop='true' width='100%' height='100%' controls='true' />
    </Container>
  )
}
const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Prasara
