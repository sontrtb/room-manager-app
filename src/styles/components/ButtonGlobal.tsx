import CONFIG from 'src/config';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonGlobal: {
    backgroundColor: CONFIG.color.button,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  pressed: {
    opacity: 0.7,
  },
  noPressed: {},
  textButton: {
    fontWeight: 'bold',
    color: CONFIG.color.textButton,
  },
});

export default styles;
