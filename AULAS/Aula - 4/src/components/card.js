import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
    height: 272px;
    width: 222px;
    border-radius: 20px;
    margin-right: 24px;
`;

const Image = styled.Image`
    height: 100%;
    width: 100%;
    border-radius: 20px;
`;

const Title = styled.Text`
    font-size: 16px;
    color: #fff;
    margin-top: -60px;
    margin-left: 20px;
`;

const Subtitle = styled.Text`
    font-size: 12px;
    color: #D7D7D7;
    margin-left: 20px;
`;

const Card = ({img, title, subtitle}) => {

    return (
        <Container>
            <Image source={img} />
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}

export default Card;
