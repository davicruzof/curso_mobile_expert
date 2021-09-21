import React from 'react'
import { View } from 'react-native';
import styled from 'styled-components';

// export const textPequeno = styled.Text`
//     font-size: 12px;
//     color: #838383;
// `

export default function textLigth({texto}) {
    return (
        <View>
            <textPequeno>{texto}</textPequeno>
        </View>
    )
}
