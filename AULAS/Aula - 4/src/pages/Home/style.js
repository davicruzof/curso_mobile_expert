import styled from "styled-components";

export const Container = styled.SafeAreaView.attrs({
    paddingHorizontal: 10,
})`
    margin-top: 50px;
`;

export const ScrollContainer = styled.ScrollView`
    height: 100%;
`;

export const TextoLocalizacao = styled.Text`
    font-size: 12px;
    color: #838383;
    margin-bottom: 8px;
`;

export const ContainerHeader = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const TitleHeader = styled.Text`
    font-size: 20px;
    color: #000;
`;

export const ContainerSearch = styled.View`  
    display: flex;
    flex-direction: row;
    margin-top: 24px;
`;

export const Input = styled.TextInput`
    background-color: #f1f1f1;
    padding-left: 16px;
    margin-right: 10px;
    width: 85%;
    height: 48px;
    border-radius: 10px;
`;

export const Botao =styled.TouchableOpacity`
    background-color: #0A8ED9;
    height: 48px;
    width: 48px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image.attrs({
    height: 20,
    width: 20,
})``; 


export const Scroll = styled.ScrollView`
    margin-top: 24px;
`;