import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  entityInfoContainer: {
    height: 222,
    width: '100%',
  },
  imageContainer: {
    height: 72,
    width: 72,
    borderRadius: 100,
    position: 'absolute',
    top: -43,
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
  gainsLabel: {
    height: 40,
    width: '85%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
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
