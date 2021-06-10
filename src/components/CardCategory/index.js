import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function CardCategory({data, onDelete, onEdit, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardTop}>
        <Text style={styles.cardLabel}>{data.title}</Text>
      </View>
      <View style={styles.cardBottom}>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.buttonRemove} onPress={onDelete}>
            <Text style={styles.buttonLabel}>Remove</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonEdit} onPress={onEdit}>
            <Text style={styles.buttonLabel}>Edita</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
