import CONFIG from 'app/src/config';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  headerModal: {
    height: 5,
    width: 80,
    alignSelf: 'center',
    backgroundColor: CONFIG.color.secondaryBackground,
    marginBottom: 20,
    borderRadius: 3,
  },
  modalContent: {
    backgroundColor: CONFIG.color.background,
    paddingHorizontal: CONFIG.layout.paddingHorizontal,
    paddingBottom: 30,
    paddingTop: 8,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
});
