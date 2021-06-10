/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {
  allCategoryList,
  categoryForId,
  updateItemCategory,
  insertNewCategory,
} from '../../databases/allSchemas';

import {Container, Label, TextInput, Form} from './styled';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function NewCategory({navigation}) {
  const [id, setId] = useState();
  const [title, setTitle] = useState();

  const [listaCategory, setListaCategory] = useState([]);

  const reloadData = () => {
    allCategoryList()
      .then((allList) => {
        setListaCategory(allList);
      })
      .catch((error) => {
        setListaCategory([]);
      });
  };

  async function saveCategory() {
    if (!title) return Alert.alert('Defina o nome da Música!');

    const itemCategory = {
      id: parseInt(Math.random() * 1000),
      title: title,
    };

    //caso possua ID no estado, veio pra tela como edição
    if (id) {
      const itemCategoryEditing = {
        id: id,
        title: title,
      };

      updateItemCategory(itemCategoryEditing)
        .then(() => {
          navigation.navigate('Categorias');
        })
        .catch((error) => {
          console.log('Erro ao atualizar', error);
        });
    } else {
      insertNewCategory(itemCategory)
        .then(() => {
          navigation.navigate('Categorias');
        })
        .catch((error) => {
          console.log('DEBUG', error);
        });
    }
  }

  async function loadCategoryId(idCategory) {
    categoryForId(idCategory).then((result) => {
      setTitle(result[0].title);
    });
  }

  useEffect(() => {
    reloadData();
    if (navigation.state.params?.idCategory) {
      setId(navigation.state.params.idCategory);
      loadCategoryId(navigation.state.params.idCategory);
    }
  }, []);

  return (
    <>
      <Header showBack={true} navigation={navigation} />
      <Container>
        <Form>
          <Label>Nome da Categoria</Label>
          <TextInput
            maxLength={30}
            placeholder="Qual nome da categoria?"
            onChangeText={(text) => setTitle(text)}
            value={title}
          />
        </Form>
      </Container>
      <Footer icon={'save'} onPress={saveCategory} />
    </>
  );
}
