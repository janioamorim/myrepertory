import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    padding: 10,
    width: '45%',
    marginVertical: 5,
    borderRadius: 4,
    shadowColor: '#000',
    elevation: 3,
    marginHorizontal: 7,
    height: 170,
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'center',
    height: 70,
  },

  cardLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#d9480f',
    textAlign: 'center',
  },

  buttonLabel: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFF',
    textAlign: 'center',
  },
  cardBottom: {
    height: 80,
    display: 'flex',
    justifyContent: 'flex-end',
  },

  containerButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonRemove: {
    backgroundColor: '#B40404',
    justifyContent: 'center',
    width: '50%',
    marginRight: 3,
    borderRadius: 4,
  },
  buttonEdit: {
    backgroundColor: '#0080FF',
    justifyContent: 'center',
    padding: 10,
    width: '50%',
    marginRight: 3,
    borderRadius: 4,
  },
});

export default styles;
