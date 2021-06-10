import styled from 'styled-components/native';

export const Modal = styled.Modal`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  background-color: #000000aa;
  display: flex;
  flex: 1;
`;
export const Contant = styled.View`
  background-color: #fff;
  margin: 130px 25px;
`;
export const HeaderModal = styled.View`
  background-color: #dd0606;
  padding: 15px;
  display: flex;
  align-items: center;
`;
export const TextHeader = styled.Text`
  color: #fff;
  font-size: 21px;
`;
export const BodyModal = styled.View`
  display: flex;
  margin: 30px 20px;
`;
export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #557;
`;

export const TextBody = styled.Text`
  font-size: 19px;
  text-align: center;
`;
export const TextCancel = styled.Text`
  font-size: 19px;
  color: #fff;
`;
export const TextConfirm = styled.Text`
  font-size: 19px;
  color: #fff;
`;
export const ButtonCancel = styled.TouchableOpacity`
  width: 50%;
  padding: 15px;
  background: #0b77c5;
  align-items: center;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  width: 50%;
  padding: 15px;
  background: #dd0606;
  align-items: center;
`;
