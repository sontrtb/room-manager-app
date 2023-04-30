import CONFIG from 'src/config';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: CONFIG.color.background,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  tabItemWrap: {
    flex: 1,
  },
  tabItemContent: {
    height: CONFIG.layout.heightBottomTab,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
