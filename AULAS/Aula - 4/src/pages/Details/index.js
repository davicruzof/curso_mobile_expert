import React from 'react'
import { View, Text, TouchableOpacity, Image, ViewPropTypes } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import house1 from '../../assets/house.jpg'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function Details({route}) {

    const navigation = useNavigation()
    const { img, subtitle, title, banheiro, quarto} = route.params.data

    console.log(banheiro, quarto)

    return (
        <View style={{flex:1, justifyContent: 'center'}}>
            <View style={{padding: 20, width: '100%', height: '100%',
                paddingTop: 50}}>
                <Image source={house1} style={{
                    height: '40%',
                    width: '100%',
                    resizeMode: 'cover',
                    borderRadius: 20,
                }} />
                
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{
                        backgroundColor: 'rgba(0,0,0,0.24)', width: 34, height: 34, position: 'absolute', left: 40, top: 70,
                        borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
                        <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        backgroundColor: 'rgba(0,0,0,0.24)', width: 34, height: 34,
                        borderRadius: 20, alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 40, top: 70,}}>
                        <FontAwesome name="bookmark-o" size={20} color="white" />
                    </TouchableOpacity>
                    <View style={{marginTop: -120, marginLeft: 20, marginBottom: 20}}>
                        <Text style={{ color: '#fff', fontSize: 20, marginBottom: 8}}>{title}</Text>
                        <Text style={{ color: '#fff', fontSize: 12, marginBottom: 20}}>{subtitle}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{
                                    backgroundColor: 'rgba(255,255,255,0.2)',
                                    borderRadius: 5, width: 28, height: 28, alignItems: 'center',
                                    justifyContent: 'center', marginRight: 12
                                    }}>
                                    <FontAwesome name="bed" size={16} color="#fff" />
                                </View>
                                <Text style={{color: '#fff',  fontSize: 12}}>
                                    {quarto > 1 ? `${quarto} Quartos` : 
                                    `${quarto} Quarto` }
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 32}}>
                            <View style={{
                                    backgroundColor: 'rgba(255,255,255,0.2)',
                                    borderRadius: 5, width: 28, height: 28, alignItems: 'center',
                                    justifyContent: 'center', marginRight: 12
                                    }}>
                                <FontAwesome name="bathtub" size={16} color="#fff" />
                                </View>
                                <Text style={{color: '#fff',  fontSize: 12}}>
                                    {banheiro > 1 ? `${banheiro} Banheiros` : 
                                    `${banheiro} Banheiro` }
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{marginTop: 20, fontSize: 16}}>Descrição</Text>
                    <Text style={{marginTop: 20, fontSize: 12}}>The 3 level house that has a modern design, 
                    has a large pool and a garage that fits up to four cars..</Text>
                </View>
            
        </View>
    )
}
