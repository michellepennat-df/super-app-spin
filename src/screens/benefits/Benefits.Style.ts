import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
  },
  image: {
    width: 120,
    height: 120,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  cards: {
    gap: 16,
    marginBottom: 16,
  },
  viewSell: {
    paddingBottom: 24,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBlockColor: '#E6E6EC',
  },
  mb16: {
    marginBottom: 16,
  },
  mb24: {
    marginBottom: 24,
  },
  mt24: {
    marginTop: 24,
  },
  item: {
    marginRight: 16,
  },
});
