import React, {useEffect} from 'react';
import {View} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {infoToast} from 'src/ultis/toast';
import {useAppDispatch} from 'src/hook/Redux';
import {setToken} from 'src/redux/slices/DeviceTokenSlice';

function Notification() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('remoteMessage', remoteMessage.notification?.title);
      infoToast(
        remoteMessage.notification?.title,
        remoteMessage.notification?.body,
      );
    });

    const getDeviceToken = messaging()
      .getToken()
      .then(token => {
        dispatch(setToken(token));
      });

    return () => {
      unsubscribe();
      getDeviceToken;
    };
  }, [dispatch]);

  return <View />;
}

export default Notification;
