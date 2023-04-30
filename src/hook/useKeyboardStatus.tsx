import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

function useKeyboardStatus() {
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return {
    isShowKeyboard: keyboardStatus,
  };
}

export default useKeyboardStatus;
