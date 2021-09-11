import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Alert, Image } 
from 'react-native';

const imageUrl = "https://images.unsplash.com/photo-1631326657717-937a204d32a8?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

export default function App() {

  const [nome,setNome] = useState('');
  const [email,setEmail] = useState('');

  const exbibeNome = () => {
    nome && email ?
      Alert.alert('Cadastro realizado com')
    :
      Alert.alert('Preencha todos os campo!');
  }

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
      <View style={styles.avatar}>
        <Image style={styles.image}
        source={{uri: imageUrl}} />
      </View>
      <Text
        style={styles.text}
      >Hello World!</Text>

      <TextInput
        onChangeText={value => setNome(value)}
        value={nome}
        placeholder="Digite o seu nome"
        style={styles.input}
      />
      <TextInput
        onChangeText={value => setEmail(value)}
        value={email}
        placeholder="Digite o seu email"
        keyboardType="email-address"
        style={styles.input}
      />

    <Image style={{width: 300, height: 500}} 
      resizeMode="contain"
      source={{uri: imageUrl}} />
      
      <TouchableOpacity
        onPress={exbibeNome}
        style={{
          backgroundColor: 'red',
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            color: 'white'
          }}
        >Clique aqui</Text>
      </TouchableOpacity>

      <Text>
        {nome}
      </Text>
      </View>
    </ScrollView>
  );
    
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20, 
    paddingVertical: 50,
    marginBottom: 30,
    marginTop: 100
  },
  input: {
    height: 45,
    borderColor: "#000000",
    borderWidth: 1,
    marginBottom: 20, 
    paddingLeft: 15,
  },
  text: {
    fontSize: 20, 
    marginBottom: 30
  },
  image: {
    width: '100%', 
    height: '100%'
  },
  avatar: {
    height: 200,
    width: '100%',
    borderRadius: 20
  }
})
