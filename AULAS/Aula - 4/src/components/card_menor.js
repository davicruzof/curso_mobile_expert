import React from 'react';
import styled from 'styled-components';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const Container = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
`;

const Image = styled.Image`
    height: 70px;
    width: 74px;
    border-radius: 10px;
    margin-right: 20px;
`;

const Title = styled.Text`
    font-size: 20px;
    color: #000;
`;

const TextoAzul = styled.Text`
     color: #0A8ED9;
     font-size: 12px;
`;

const ContainerDetails = styled.View`
    display: flex;
    flex-direction: row;
`;

const CardDetails = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
`;

const TextDetails = styled.Text`
    color: #858585;
    margin-left: 8px;
`;

const ContainerInfos =styled.View`
    display: flex;
    flex-direction: column;
`

const CardMenor = ({img, title, subtitle, quarto, banheiro}) => {

    return (
        <Container>
            <Image source={img} />
            <ContainerInfos>
                <Title>{title}</Title>
                <TextoAzul>{subtitle}</TextoAzul>
                <ContainerDetails>
                    <CardDetails>
                        <FontAwesome name="bed" size={16} color="#858585" />
                        <TextDetails>
                            {quarto > 1 ? `${quarto} Quartos` : 
                            `${quarto} Quarto` }
                        </TextDetails>
                    </CardDetails>
                    <CardDetails>
                        <FontAwesome name="bathtub" size={16} color="#858585" />
                        <TextDetails>
                            {banheiro > 1 ? `${banheiro} Banheiros` : 
                            `${banheiro} Banheiro` }
                        </TextDetails>
                    </CardDetails>
                </ContainerDetails>
            </ContainerInfos>
        </Container>
    )
}

export default CardMenor;