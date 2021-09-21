import React, {useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, 
  TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function App() {

  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
      <Text style={styles.texto}>Localização</Text>
      <View style={styles.header}>
        <Text style={styles.textoMaior}>Paulo</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <View style={styles.containerInput}>
        <TextInput
          onChangeText={(value) => setSearch(value)}
          value={search}
          style={styles.input}
          placeholder="O que deseja buscar?"
        />
        <TouchableOpacity style={styles.botaoOptions}>
          <Image style={styles.icon} 
          source={require('./filter.png')} />
        </TouchableOpacity>
      </View>
        <View style={styles.conatinerText}>
          <Text style={styles.textoMaior}>Perto de você</Text>
          <Text style={styles.texto}>ver mais</Text>
        </View>
        <ScrollView 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
      >
        <View style={styles.card}>
          <Image style={styles.imageCard} source={require('./house.jpg')} />
          <Text style={styles.cardTitle}>Dreamsville House</Text>
          <Text style={styles.cardSubtitle}>testando</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.imageCard} source={require('./house2.jpg')} />
          <Text style={styles.cardTitle}>Dreamsville House</Text>
          <Text style={styles.cardSubtitle}>testando</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.imageCard} source={require('./house3.jpg')} />
          <Text style={styles.cardTitle}>Dreamsville House</Text>
          <Text style={styles.cardSubtitle}>testando</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.imageCard} source={require('./house4.jpg')} />
          <Text style={styles.cardTitle}>Dreamsville House</Text>
          <Text style={styles.cardSubtitle}>testando</Text>
        </View>
      </ScrollView>
        <View style={styles.conatinerText}>
          <Text style={styles.textoMaior}>Sugestão para você</Text>
          <Text style={styles.texto}>ver mais</Text>
        </View>
        <ScrollView style={styles.vertical}>
        <View style={styles.cardMenor}>
          <Image style={styles.imageCardMenor} source={require('./house.jpg')} />
          <View>
            <Text style={styles.textoMaior}>Local</Text>
            <Text style={styles.textAzul}>wyewoy</Text>
            <View style={styles.containerDetails}>
              <View style={styles.cardDetails}>
                <FontAwesome name="bed" size={16} color="#858585" />
                <Text style={styles.textDetails}>4 Quartos</Text>
              </View>
              <View style={styles.cardDetails}>
                <FontAwesome name="bathtub" size={16} color="#858585" />
                <Text style={styles.textDetails}>2 Banheiros</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardMenor}>
          <Image style={styles.imageCardMenor} source={require('./house2.jpg')} />
          <View>
            <Text style={styles.textoMaior}>Local</Text>
            <Text style={styles.textAzul}>wyewoy</Text>
            <View style={styles.containerDetails}>
              <View style={styles.cardDetails}>
                <FontAwesome name="bed" size={16} color="#858585" />
                <Text style={styles.textDetails}>4 Quartos</Text>
              </View>
              <View style={styles.cardDetails}>
                <FontAwesome name="bathtub" size={16} color="#858585" />
                <Text style={styles.textDetails}>2 Banheiro</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardMenor}>
          <Image style={styles.imageCardMenor} source={require('./house3.jpg')} />
          <View>
            <Text style={styles.textoMaior}>Local</Text>
            <Text style={styles.textAzul}>wyewoy</Text>
            <View style={styles.containerDetails}>
              <View style={styles.cardDetails}>
                <FontAwesome name="bed" size={16} color="#858585" />
                <Text style={styles.textDetails}>4 Quartos</Text>
              </View>
              <View style={styles.cardDetails}>
                <FontAwesome name="bathtub" size={16} color="#858585" />
                <Text style={styles.textDetails}>2 Banheiro</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardMenor}>
          <Image style={styles.imageCardMenor} source={require('./house4.jpg')} />
          <View>
            <Text style={styles.textoMaior}>Local</Text>
            <Text style={styles.textAzul}>wyewoy</Text>
            <View style={styles.containerDetails}>
              <View style={styles.cardDetails}>
                <FontAwesome name="bed" size={16} color="#858585" />
                <Text style={styles.textDetails}>4 Quarto</Text>
              </View>
              <View style={styles.cardDetails}>
                <FontAwesome name="bathtub" size={16} color="#858585" />
                <Text style={styles.textDetails}>2 Banheiro</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  texto: {
    fontSize: 12,
    color: '#838383',
    marginBottom: 8,
  },
  textoMaior: {
    fontSize: 20,
    color: '#000'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#f1f1f1',
    height: 48,
    borderRadius: 10,
    paddingLeft: 16,
    width: '85%',
    marginRight: 10
  },
  botaoOptions: {
    backgroundColor: '#0A8ED9',
    height: 48,
    width: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
  },
  containerInput: {
    flexDirection: 'row',
    marginTop: 24
  },
  conatinerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
  },
  card: {
    height: 272,
    width: 222,
    borderRadius: 20,
    marginRight: 24
  },
   imageCard: {
     height: '100%',
     width: '100%',
     borderRadius: 20,
   },
   scroll: {
     marginTop: 24
   },
   cardTitle: {
     fontSize: 16,
     color: '#fff',
     marginTop: -60,
     marginLeft: 20
   },
   cardSubtitle: {
     fontSize: 12,
     color: '#D7D7D7',
     marginLeft: 20
   },
   imageCardMenor: {
     height: 70,
     width: 74,
     borderRadius: 10,
     marginRight: 20
   },
   textAzul: {
     color: '#0A8ED9',
     fontSize: 12,
   },
   cardMenor: {
     flexDirection: 'row',
     marginBottom: 24,
   },
   vertical: {
     marginTop: 24
   },
   cardDetails: {
     flexDirection: 'row',
     alignItems: 'center',
     marginRight: 20
   },
   textDetails: {
     color: '#858585',
     marginLeft: 8
   },
   containerDetails: {
     flexDirection: 'row',
   },
   scrollContainer: {
    //  flex: 1,
    height: '100%'
   }
})

