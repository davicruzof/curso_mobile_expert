import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
`;

const Title = styled.Text`
    font-size: 18px;
    color: #000;
    font-weight: bold;
`;

const Subtitle = styled.Text`
    font-size: 12px;
    color: #D7D7D7;
    margin-left: 20px;
`;

const FrameText = ({texto1,texto2}) => {
  return(
      <Container>
          <Title>{texto1}</Title>
          <Subtitle>{texto2}</Subtitle>
      </Container>
  );
}

export default FrameText;