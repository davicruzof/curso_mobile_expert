import React from 'react';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

const Container = styled.TouchableOpacity`
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

const Card = ({img, title, subtitle, item}) => {

    const navigator = useNavigation()

    return (
        <Container onPress={() => navigator.navigate('Details',{
            data: item
        })}>
            <Image source={img} />
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}

export default Card;
