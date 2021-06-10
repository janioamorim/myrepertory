import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 75,
    backgroundColor: '#015A9B',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 5,
    borderTopColor: '#EE6B26',
    alignItems: 'center',
  },
  button: {
    position: 'relative',
    top: -40,
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 15,
    position: 'relative',
    top: -38,
    color: '#FFF',
  },
});

export default styles;
