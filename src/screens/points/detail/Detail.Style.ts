import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  entityInfoContainer: {
    width: '100%',
  },
  banner: {
    minHeight: 150,
    width: '100%',
    backgroundColor: '#087D6F',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  imageContainer: {
    height: 72,
    width: 72,
    borderRadius: 100,
    position: 'absolute',
    top: -54,
  },
  points: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    width: '100%',
    marginTop: 30,
  },
  logo: {
    height: 66,
    width: 66,
    borderRadius: 100,
  },
  text: {
    marginVertical: 16,
    textAlign: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F7',
    width: '100%',
    height: 56,
    paddingHorizontal: 12,
  },
  infoConainer: {
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    gap: 8,
    paddingBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
});
