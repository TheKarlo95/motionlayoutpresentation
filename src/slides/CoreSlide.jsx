import React from 'react';
import styled from 'styled-components';

const primary = "#512da8"
const white = "#ffffff"

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
  height: 80px;
  background-color: ${primary};
  border: 0px;
  border-radius: 10px 10px 0px 0px;
`
const Title = styled.h1`
  margin: auto 16px;
  color: ${white};
  font-family: sans-serif;
  font-size: 2em;
`
export const Content = styled.div`
  width: 868px;
  height: 588px;
  padding: 16px;
  background-color: ${white};
  border: 0px;
  border-radius: 0px 0px 10px 10px;
`
export default function({title, children}) {
  return <Box>
    <TitleDiv>
      <Title>{title}</Title>
    </TitleDiv>
    {children}
  </Box>
}
