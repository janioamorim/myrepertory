import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

// ICONES
import Logo from '../../assets/logo.svg';
import back from '../../assets/back.png';

export default function Header({showBack, navigation}) {
  function Back() {
    navigation.goBack();
  }

  return (
    <View style={styles.header}>
      {showBack ? (
        <TouchableOpacity style={styles.leftIcon} onPress={Back}>
          <Image source={back} style={styles.leftIconImage} />
        </TouchableOpacity>
      ) : null}

      <Logo width={250} height={60} />
    </View>
  );
}
