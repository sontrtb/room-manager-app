// import CONFIG from 'src/config';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 5,
  },
  previewItem: {
    position: 'relative',
    marginHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  iconRemoveMedia: {
    width: 20,
    position: 'absolute',
    top: 2,
    right: -5,
    padding: 0,
  },
});

export default styles;
