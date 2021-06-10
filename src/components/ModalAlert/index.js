import React from 'react';
import {View} from 'react-native';

import {
  Modal,
  Container,
  Contant,
  HeaderModal,
  TextHeader,
  BodyModal,
  TextBody,
  ContainerButtons,
  ButtonCancel,
  ButtonConfirm,
  TextCancel,
  TextConfirm,
} from './styles';

export default function ({isModalOpen, onClose, onConfirmRemove, textBody}) {
  return (
    <View>
      <Modal animationType="none" transparent={true} visible={isModalOpen}>
        <Container>
          <Contant>
            <HeaderModal>
              <TextHeader>Excluir</TextHeader>
            </HeaderModal>
            <BodyModal>
              <TextBody>{textBody}</TextBody>
            </BodyModal>
            <ContainerButtons>
              <ButtonCancel onPress={onClose}>
                <TextCancel> Não </TextCancel>
              </ButtonCancel>
              <ButtonConfirm onPress={onConfirmRemove}>
                <TextConfirm> Sim </TextConfirm>
              </ButtonConfirm>
            </ContainerButtons>
          </Contant>
        </Container>
      </Modal>
    </View>
  );
}
