import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  mb16: {
    marginBottom: 16,
  },
  card: {
    height: 80,
    width: '99%',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 8,
  },
  shadowIOS: {
    shadowRadius: 3,
    shadowOpacity: 0.3,
  },
  shadowAndroid: {
    elevation: 3,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 16,
  },
});
