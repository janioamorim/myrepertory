/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';

import {Container, ContainerFall, Title, TitleText, ScrollView} from './styled';
import {
  allRepertoriosList,
  deleteItemRepertorio,
} from '../../databases/allSchemas';

import Fallback from '../../assets/fallback-music.svg';

import ModalAlert from '../../components/ModalAlert';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MusicCard from '../../components/MusicCard';

export default function RepertorioList({navigation}) {
  const [listaRepertorios, setListaRepertorios] = useState([]);
  const [idMusic, setIdMusic] = useState();

  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);

  const reloadRepertoriosRealm = () => {
    allRepertoriosList(navigation.state.params.idCategory)
      .then((allList) => {
        setListaRepertorios(allList);
      })
      .catch((error) => {
        setListaRepertorios([]);
      });
  };

  const showDeleteConfirmation = (id) => {
    toggleModal();
    setIdMusic(id);
  };
  const onConfirmRemove = () => {
    deleteItemRepertorio(idMusic)
      .then(() => {
        reloadRepertoriosRealm();
        toggleModal();
      })
      .catch((error) => {
        console.log('FALHA AO DELETAR', error);
      });
  };

  function New(idCat) {
    navigation.navigate('FormMusic', {idCategory: idCat, idMusic: null});
  }

  function showForEdit(id) {
    navigation.navigate('FormMusic', {idMusic: id});
  }
  function msgAlert() {
    Alert.alert('Essa múscia não possui um link!');
  }

  useEffect(() => {
    reloadRepertoriosRealm();
  }, []);

  return (
    <Container>
      <Header showNotification={true} showBack={true} navigation={navigation} />

      <Title>
        <TitleText>MINHA LISTA</TitleText>
      </Title>
      {listaRepertorios.length > 0 ? (
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          {listaRepertorios.map((musica) => {
            return (
              <MusicCard
                key={musica.id}
                done={false}
                title={musica.title}
                artista={musica.artista}
                tom={musica.tom}
                link={musica.link}
                onDelete={() => showDeleteConfirmation(musica.id)}
                onEdit={() => showForEdit(musica.id)}
                openVideo={() => {
                  musica.link == null
                    ? msgAlert()
                    : navigation.navigate('VideoPlayer', {
                        videoURL: musica.link,
                      });
                }}
              />
            );
          })}
        </ScrollView>
      ) : (
        <ContainerFall>
          <Fallback width={200} />
        </ContainerFall>
      )}

      <Footer
        icon={'add'}
        onPress={() => New(navigation.state.params.idCategory)}
      />
      <ModalAlert
        isModalOpen={isModalOpen}
        onClose={toggleModal}
        onConfirmRemove={onConfirmRemove}
        textBody={'Quer mesmo remover essa música?'}
      />
    </Container>
  );
}
