import React, {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import Card from '../../components/card';
import house1 from '../../assets/house.jpg'
import house2 from '../../assets/house2.jpg'
import house3 from '../../assets/house3.jpg'
import house4 from '../../assets/house4.jpg'
import filter from '../../assets/filter.png'
import CardMenor from '../../components/card_menor';
import { Botao, Container, Image, 
    ContainerHeader, ContainerSearch, Input, ScrollContainer, TextoLocalizacao, TitleHeader, ScrollHorizontal, Scroll } from './style';
import FrameText from '../../components/frameText';

const imagensCards = [
  {
    img: house1,
    title: "Casa 1",
    subtitle: "Casa Grande"
  },
  {
    img: house2,
    title: "Casa 2",
    subtitle: "Casa Grande"
  },
  {
    img: house3,
    title: "Casa 3",
    subtitle: "Casa Grande"
  },
  {
    img: house4,
    title: "Casa 4",
    subtitle: "Casa Grande"
  }
];

const cardsMenor = [
  {
    img: house1,
    title: "Casa 1",
    subtitle: "Casa Grande",
    banheiro: 3,
    quarto: 6
  },
  {
    img: house2,
    title: "Casa 2",
    subtitle: "Casa Grande",
    banheiro: 1,
    quarto: 2
  },
  {
    img: house3,
    title: "Casa 3",
    subtitle: "Casa Grande",
    banheiro: 2,
    quarto: 5
  },
  {
    img: house4,
    title: "Casa 4",
    subtitle: "Casa Grande",
    banheiro: 4,
    quarto: 12
  }
];

export default function Home() {

  const [search, setSearch] = useState('');

  return (
    <Container>
      <ScrollContainer>
      <TextoLocalizacao>Localização</TextoLocalizacao>
      <ContainerHeader>
        <TitleHeader>Paulo</TitleHeader>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </ContainerHeader>
      <ContainerSearch>
        <Input
          onChangeText={(value) => setSearch(value)}
          value={search}
          placeholder="O que deseja buscar?"
        />
        <Botao>
          <Image source={filter} />
        </Botao>
      </ContainerSearch>
        
        <FrameText 
            texto1="Perto de você" 
            texto2="ver mais"
        />
    
        <Scroll
            horizontal={true}
            showsHorizontalScrollIndicator={false}
           
            >
                {
                imagensCards.map((item,chave) => 
                    <Card 
                        img={item.img}
                        title={item.title}
                        subtitle={item.subtitle}
                        key={chave}
                    />
                )
                }
       </Scroll>

       <FrameText 
            texto1="Recomendado para você" 
            texto2="ver mais"
        />
        <Scroll>
          {
            cardsMenor.map((item,chave) => 
              <CardMenor 
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                banheiro={item.banheiro}
                quarto={item.quarto}
                key={chave}
              />
            )
          }
      </Scroll>
      </ScrollContainer>
    </Container>
  );
}
