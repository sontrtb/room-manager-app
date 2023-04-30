import CONFIG from 'src/config';
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
const widthActionMessage = 283;

const styles = StyleSheet.create({
  reactionWrap: {
    position: 'absolute',
    zIndex: 10,
    left: (width - widthActionMessage) / 2,
    width: widthActionMessage,
    backgroundColor: CONFIG.color.background,
    borderRadius: 23,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection: 'row',
    padding: 3,
  },
  reaction: {
    padding: 5,
    marginHorizontal: 3,
    borderRadius: 20,
  },

  actionWrap: {
    position: 'absolute',
    zIndex: 10,
    left: 0,
    bottom: 0,
    width: width,
    backgroundColor: CONFIG.color.background,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    borderTopWidth: 2,
    borderColor: CONFIG.color.backgroundPress,
    borderRadius: 10,
  },
  actionItem: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 2,
  },
  iconAction: {
    padding: 5,
  },

  overlay: {
    position: 'absolute',
    width: width,
    height: height,
  },
});

export default styles;
