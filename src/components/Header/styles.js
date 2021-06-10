import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    backgroundColor: '#015A9B',
    borderBottomWidth: 5,
    borderBottomColor: '#EE6B26',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 50,
  },
  notification: {
    position: 'absolute',
    right: 20,
  },
  notificationImage: {
    width: 30,
    height: 35,
  },
  notificationText: {
    fontWeight: 'bold',
    color: '#EE6B26',
  },
  circle: {
    width: 25,
    height: 25,
    backgroundColor: '#FFF',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 13,
    bottom: 13,
  },
  leftIcon: {
    position: 'absolute',
    left: 20,
  },
  leftIconImage: {
    width: 55 * 0.5,
    height: 60 * 0.5,
  },
});

export default styles;
