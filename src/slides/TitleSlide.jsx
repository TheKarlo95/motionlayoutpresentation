import React from 'react';
import styled from 'styled-components';

const primary = "#008eb9"
const accent = "#fecf00"

const Box = styled.div`
  display: block;
  width: 900px;
  height: 700px;
  border: 1px solid rgba(0, 0, 0, .3);
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, .1);
  text-shadow: 0 2px 2px rgba(0, 0, 0, .1);
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -1px;
`
const TitleDiv = styled.div`
  display:flex;
  flex-direction:column;
  width: 900px;
  height: 80%;
  background-color: ${primary};
  border: 0px;
  border-radius: 10px 10px 0px 0px;
`
const SubTitleDiv = styled.div`
  display:flex;
  flex-direction:column;
  width: 900px;
  height: 20%;
  background-color: #FFF;
  border: 0px;
  border-radius: 0px 0px 10px 10px;
`
const Title = styled.h1`
  margin-top: auto;
  margin-bottom: 16px;
  margin-left: 16px;
  color: #FFF;
  text-shadow: 2px 2px 2px #CCC;
  font-family: sans-serif;
  font-size: 2em;
`
const SubTitle = styled.h1`
  margin-top: 16px;
  margin-left: 16px;
  color: ${primary};
  text-shadow: 2px 2px 2px #CCC;
  font-family: 'Raleway', sans-serif;
  font-size: 1.3em;
`
const FloatingActionButton = styled.div`
  position: absolute;
  left: 800px;
  top: 550px;
  width: 96px;
  height: 96px;
  border-radius: 48px;
  background-color: ${accent}
`

export default function() {
  return <Box>
    <TitleDiv>
      <Title>MotionLayout</Title>
    </TitleDiv>
    <SubTitleDiv>
      <SubTitle>Karlo Vrbić | Undabot</SubTitle>
    </SubTitleDiv>
    <FloatingActionButton>
      <img style={{margin: "24px 4px"}} src="images/logo.svg" alt="Undabot logo"/>
    </FloatingActionButton>
  </Box>
}
