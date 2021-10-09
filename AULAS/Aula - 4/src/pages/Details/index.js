import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Details({route}) {

    const navigation = useNavigation()
    const { img, subtitle, title, banheiro, quarto} = route.params.data

    console.log(banheiro, quarto)

    return (
        <View style={{flex:1, justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}
