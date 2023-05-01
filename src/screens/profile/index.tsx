import ButtonGlobal from 'app/src/components/ButtonGlobal';
import {useAppDispatch} from 'app/src/hook/Redux';
import {logout} from 'app/src/redux/slices/UserSlice';
import React from 'react';
import {View} from 'react-native';
import {RootStackParamList} from 'app/src/router/routerList';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

function Profile() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleLogout = (): void => {
    dispatch(logout());
    navigation.navigate('Login');
  };
  return (
    <View>
      <ButtonGlobal title="Logout" onPress={handleLogout} />
    </View>
  );
}

export default Profile;
