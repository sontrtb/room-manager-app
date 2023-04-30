// import CONFIG from 'src/config';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    marginTop: 15,
    flexDirection: 'row',
    padding: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  content: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  name: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 3,
  },
});

export default styles;
