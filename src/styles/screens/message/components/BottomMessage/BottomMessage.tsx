import CONFIG from 'src/config';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: CONFIG.layout.paddingHorizontal - 5,
    paddingVertical: 10,
  },
});

export default styles;
