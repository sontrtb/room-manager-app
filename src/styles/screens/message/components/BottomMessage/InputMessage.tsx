import CONFIG from 'app/src/config';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {},

  messageReplyWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: CONFIG.color.otherMessage,
    borderRadius: 15,
    marginBottom: 10,
  },
  messageReply: {
    width: 180,
    color: CONFIG.color.secondaryText,
  },

  inputWrap: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  leftIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMedia: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginBottom: 2,
  },
  input: {flex: 1, marginHorizontal: 7},
});

export default styles;
