import Toast from 'react-native-toast-message';

const successToast = (text1?: string, text2?: string, onPress?: () => void) => {
  Toast.show({
    type: 'success',
    text1: text1,
    text2: text2,
    onPress: onPress,
  });
};

const errorToast = (text1?: string, text2?: string, onPress?: () => void) => {
  Toast.show({
    type: 'error',
    text1: text1,
    text2: text2,
    onPress: onPress,
  });
};

const infoToast = (text1?: string, text2?: string, onPress?: () => void) => {
  Toast.show({
    type: 'info',
    text1: text1,
    text2: text2,
    onPress: onPress,
  });
};

export {successToast, errorToast, infoToast};
