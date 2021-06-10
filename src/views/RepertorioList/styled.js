import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: flex-start;
`;

export const ContainerFall = styled.View`
  width: 100%;
  height: 480px;
  align-self: center;
  align-content: center;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-color: #20295f;
  align-items: center;
`;

export const TitleText = styled.Text`
  color: #20295f;
  font-size: 18px;
  position: relative;
  top: 11px;
  background-color: #fff;
  padding: 0 10px 0 10px;
`;

export const ScrollView = styled.ScrollView`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 80px;
`;
