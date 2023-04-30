import CONFIG from 'src/config';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textInputGlobal: {
    backgroundColor: CONFIG.color.input,
    paddingHorizontal: 13,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 7,
    paddingVertical: 5,
    maxHeight: 100,
    minHeight: 40,
    flex: 1,
  },
});

export default styles;
