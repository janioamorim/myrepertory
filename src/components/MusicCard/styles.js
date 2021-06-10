import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 5,
    height: 130,
    borderRadius: 7,
    elevation: 4,
    backgroundColor: '#0B77C5',
  },
  cardLeft: {
    display: 'flex',
    width: '72%',
    marginTop: 10,
    paddingLeft: 12,
  },

  cardLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF',
    marginTop: 3,
  },
  cardLabelButton: {
    fontWeight: 'bold',
    fontSize: 11,
    color: '#FFF',
  },
  cardRight: {
    backgroundColor: '#667',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '23%',
    borderTopEndRadius: 7,
    borderBottomEndRadius: 7,
  },
  containerRemove: {
    display: 'flex',
    width: '100%',
    height: 65,
    backgroundColor: '#DD0606',
    borderTopEndRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerEdit: {
    display: 'flex',
    width: '100%',
    height: 65,
    backgroundColor: '#00BE13',
    borderBottomEndRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
