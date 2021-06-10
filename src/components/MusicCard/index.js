import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';
import Trash from '../../assets/trash.svg';
import Edit from '../../assets/edit_pencil.svg';

export default function MusicCard({
  title,
  artista,
  tom,
  link,
  onDelete,
  onEdit,
  openVideo,
}) {
  return (
    <TouchableOpacity style={[styles.card]}>
      <View style={styles.cardLeft}>
        <Text style={styles.cardLabel}>Música: {title}</Text>
        <Text style={styles.cardLabel}>Artista: {artista}</Text>
        <Text style={styles.cardLabel}>Tom: {tom}</Text>
        <TouchableOpacity onPress={openVideo}>
          <Text style={styles.cardLabel}>
            Link: {link == null ? 'Sem link' : link}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardRight}>
        <TouchableOpacity style={styles.containerRemove} onPress={onDelete}>
          <Trash />
          <Text style={styles.cardLabelButton}>Remove</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerEdit} onPress={onEdit}>
          <Edit />
          <Text style={styles.cardLabelButton}>Editar</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
