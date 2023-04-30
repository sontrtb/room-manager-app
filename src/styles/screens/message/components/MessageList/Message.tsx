import CONFIG from 'src/config';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    marginHorizontal: CONFIG.layout.paddingHorizontal,
    marginVertical: 10,
    alignItems: 'flex-end',
  },

  myMessageWrap: {
    flexDirection: 'row-reverse',
  },
  otherMessageWrap: {
    flexDirection: 'row',
  },

  message: {
    borderRadius: 15,
    maxWidth: CONFIG.layout.widthMessage,
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  myMessage: {
    backgroundColor: CONFIG.color.main,
  },
  otherMessage: {
    backgroundColor: CONFIG.color.otherMessage,
  },
  textMyMessage: {
    color: CONFIG.color.textMyMessage,
  },
  textOtherMessage: {
    color: CONFIG.color.text,
  },

  avatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },

  mediaWrap: {
    marginVertical: 10,
  },
  image: {
    width: 200,
    height: 130,
    borderRadius: 10,
  },

  reactionsWrap: {
    flexDirection: 'row',
    padding: 2,
    borderRadius: 11,
    position: 'absolute',
    bottom: -14,
    left: 20,
  },
  myReactionsWrap: {
    backgroundColor: CONFIG.color.main,
  },
  otherReactionsWrap: {
    backgroundColor: CONFIG.color.otherMessage,
  },
  iconReact: {
    marginHorizontal: 1,
  },

  messageReply: {
    maxWidth: CONFIG.layout.widthMessage - 30,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: CONFIG.color.otherMessage,
    opacity: 0.4,
    borderRadius: 12,
    left: 10,
    top: 5,
  },
});

export default styles;
