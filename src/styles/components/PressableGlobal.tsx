import CONFIG from 'src/config';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapperCustom: {
    borderRadius: 10,
    padding: 1,
  },
  pressed: {
    backgroundColor: CONFIG.color.backgroundPress,
    opacity: 0.7,
  },
  noPressed: {
    backgroundColor: CONFIG.color.background,
  },
});

export default styles;
