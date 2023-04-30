import CONFIG from 'src/config';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  login: {
    flex: 1,
    paddingHorizontal: CONFIG.layout.paddingHorizontal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    height: 40,
    borderRadius: 20,
    width: '100%',
  },
});

export default styles;
