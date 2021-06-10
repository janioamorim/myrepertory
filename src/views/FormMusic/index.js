/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';

import {
  insertNewRepertorio,
  allRepertoriosList,
  musicId,
  updateItemMusic,
  musicForCategory,
} from '../../databases/allSchemas';

import {KeyboardAvoidingView, ScrollView, Label, TextInput} from './styled';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function FormMusic({navigation}) {
  const [id, setId] = useState();

  const [title, setTitle] = useState();
  const [artista, setArtista] = useState();
  const [tom, setTom] = useState();
  const [link, setLink] = useState();
  const [allRepertory, setAllRepertory] = useState();
  const [listaRepertorios, setListaRepertorios] = useState([]);
  const [idCategory, setIdCategory] = useState(
    navigation.state?.params?.idCategory,
  );

  const reloadData = () => {
    allRepertoriosList(idCategory)
      .then((allList) => {
        setListaRepertorios(allList);
      })
      .catch((error) => {
        setListaRepertorios([]);
      });
  };

  async function SaveMusic() {
    if (!title) return Alert.alert('Defina o nome da Música!');
    if (!artista) return Alert.alert('Defina o artista da Música!');
    if (!tom) return Alert.alert('Opa! esqueceu o Tom da Música!');

    const itemRepertorio = {
      id: parseInt(Math.random() * 1000),
      title: title,
      artista: artista,
      tom: tom,
      link: link,
      idCategory: idCategory,
    };

    //caso possua ID no estado, veio pra tela como edição
    if (id) {
      const itemRepertorioEditing = {
        id: id,
        title: title,
        artista: artista,
        tom: tom,
        link: link,
      };

      updateItemMusic(itemRepertorioEditing)
        .then(() => {
          navigation.navigate('RepertorioList');
        })
        .catch((error) => {
          console.log('Erro ao atualizar', error);
        });
    } else {
      insertNewRepertorio(itemRepertorio)
        .then(() => {
          navigation.navigate('RepertorioList', {idCategory: idCategory});
        })
        .catch((error) => {
          console.log('DEBUG', error);
        });
    }
  }

  async function loadMusicId(idMusic) {
    musicId(idMusic).then((result) => {
      setTitle(result[0].title);
      setArtista(result[0].artista);
      setTom(result[0].tom);
      setLink(result[0].link);
    });
  }

  async function loadRepertoryForCategory(idCat) {
    musicForCategory(idCat).then((result) => {
      setAllRepertory(result);
    });
  }

  useEffect(() => {
    reloadData();
    if (navigation.state?.params?.idMusic) {
      setId(navigation.state.params.idMusic);
      loadMusicId(navigation.state.params.idMusic);
    } else {
      setIdCategory(navigation.state?.params?.idCategory);
      loadRepertoryForCategory(navigation.state.params.idCategory);
    }
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding">
      <Header showBack={true} navigation={navigation} />

      <ScrollView>
        <Label>Título</Label>
        <TextInput
          maxLength={30}
          placeholder="Qual título da música?"
          onChangeText={(text) => setTitle(text)}
          value={title}
        />

        <Label>Artista</Label>
        <TextInput
          maxLength={30}
          placeholder="Qual artista?"
          onChangeText={(text) => setArtista(text)}
          value={artista}
        />

        <Label>Tom</Label>
        <TextInput
          maxLength={30}
          placeholder="Qual o Tom da música?"
          onChangeText={(text) => setTom(text)}
          value={tom}
        />
        <Label>Link</Label>
        <TextInput
          maxLength={30}
          placeholder="Tem um link?"
          onChangeText={(text) => setLink(text)}
          value={link}
        />
      </ScrollView>

      <Footer icon={'save'} onPress={SaveMusic} />
    </KeyboardAvoidingView>
  );
}
