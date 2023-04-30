import CONFIG from 'src/config';
import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    backgroundColor: CONFIG.color.backgroundMediaView,
  },

  header: {
    height: 50,
    paddingHorizontal: CONFIG.layout.paddingHorizontal,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  iconAction: {
    padding: 1,
    backgroundColor: CONFIG.color.backgroundMediaView,
  },

  image: {
    width: '100%',
    height: height - 50,
  },
});

export default styles;
