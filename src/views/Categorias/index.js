import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {
  removeAllMusic,
  allCategoryList,
  deleteItemCategory,
} from '../../databases/allSchemas';

import Fallback from '../../assets/fallback.svg';

import {
  Container,
  Title,
  TitleText,
  Contant,
  ContentCards,
  ContainerFall,
} from './styled';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardCategory from '../../components/CardCategory';
import ModalAlert from '../../components/ModalAlert';

export default function Categorias({navigation}) {
  const [listaCategory, setListaCategory] = useState([]);
  const [idCategory, setIdCategory] = useState();

  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);

  const reloadCategoryRealm = () => {
    allCategoryList()
      .then(allList => {
        setListaCategory(allList);
      })
      .catch(error => {
        setListaCategory([]);
      });
  };

  const showDeleteConfirmation = id => {
    toggleModal();
    setIdCategory(id);
  };

  const onConfirmRemove = () => {
    deleteItemCategory(idCategory)
      .then(() => {
        reloadCategoryRealm();
        onRemoveAllMusic();
        toggleModal();
      })
      .catch(error => {
        console.log('FALHA AO DELETAR', error);
      });
  };

  const onRemoveAllMusic = () => {
    removeAllMusic(idCategory)
      .then()
      .catch(error => {
        console.log('FALHA AO DELETAR', error);
      });
  };

  function NewCategory() {
    navigation.navigate('NewCategory', {idCategory: null});
  }

  function showForEdit(id) {
    navigation.navigate('NewCategory', {idCategory: id});
  }
  function showRepertoryForCategory(id) {
    navigation.navigate('RepertorioList', {idCategory: id});
  }

  useEffect(() => {
    reloadCategoryRealm();
  }, []);

  const renderItem = ({item}) => {
    return (
      <CardCategory
        done={false}
        data={item}
        onPress={() => showRepertoryForCategory(item.id)}
        onDelete={() => showDeleteConfirmation(item.id)}
        onEdit={() => showForEdit(item.id)}
      />
    );
  };

  return (
    <Container>
      <Header
        showNotification={true}
        showBack={false}
        navigation={navigation}
      />

      <Title>
        <TitleText>CATEGORIAS</TitleText>
      </Title>

      <Contant>
        <ContentCards>
          {listaCategory.length > 0 ? (
            <FlatList
              data={listaCategory}
              renderItem={renderItem}
              numColumns={2}
            />
          ) : (
            <ContainerFall>
              <Fallback width={190} />
            </ContainerFall>
          )}
        </ContentCards>
      </Contant>

      <Footer icon={'add'} onPress={NewCategory} />
      <ModalAlert
        isModalOpen={isModalOpen}
        onClose={toggleModal}
        onConfirmRemove={onConfirmRemove}
        textBody={'Você excluirá todo o repertório desta lista?'}
      />
    </Container>
  );
}
