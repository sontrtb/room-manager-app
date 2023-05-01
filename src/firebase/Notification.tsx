import React, {useEffect} from 'react';
import {View} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {infoToast} from 'src/ultis/toast';
import {useAppDispatch} from 'src/hook/Redux';
import {setToken} from 'src/redux/slices/DeviceTokenSlice';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../router/routerList';
import {useNavigation} from '@react-navigation/native';

function Notification() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage?.data?.id) {
          navigation.navigate('NotificationDetailScreen', {
            id: Number(remoteMessage?.data?.id),
          });
        }
      });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
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
  }, [dispatch, navigation]);

  return <View />;
}

export default Notification;
