import CONFIG from 'src/config';
import {StyleSheet} from 'react-native';
import {getWindowHeight} from 'app/src/ultis/layout';

const styles = StyleSheet.create({
  root: {
    paddingVertical: CONFIG.layout.paddingVertical,
    justifyContent: 'space-between',
    minHeight: getWindowHeight - 135,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default styles;
