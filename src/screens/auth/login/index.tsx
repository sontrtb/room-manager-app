import {useNavigation} from '@react-navigation/native';
import ButtonGlobal from 'app/src/components/ButtonGlobal';
import TextGlobal from 'app/src/components/TextGlobal';
import TextInputGlobal from 'app/src/components/TextInputGlobal';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from 'src/styles/screens/auth/login';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CONFIG from 'app/src/config';
import {ILoginBody, login} from 'app/src/api/auth';
import {useMutation} from '@tanstack/react-query';
import {useAppDispatch, useAppSelector} from 'app/src/hook/Redux';
import {setUser} from 'app/src/redux/slices/UserSlice';

function Login() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const device_token = useAppSelector(state => state.device_token);

  const [loginBody, setLoginBody] = useState<ILoginBody>({
    userName: '',
    password: '',
    deviceToken: device_token.token ?? '',
  });

  useEffect(() => {
    setLoginBody({
      userName: '',
      password: '',
      deviceToken: device_token.token ?? '',
    });
  }, [device_token]);

  const loginMutate = useMutation(login, {
    onSuccess: res => {
      dispatch(setUser(res));
      navigation.navigate('HomeScreen');
    },
  });

  const handleLogin = () => {
    loginMutate.mutate(loginBody);
  };

  return (
    <View style={styles.login}>
      <TextGlobal style={styles.title}>Đăng nhập</TextGlobal>

      <TextInputGlobal
        placeholder="Tên đăng nhập"
        style={styles.input}
        value={loginBody?.userName}
        onChangeText={text => setLoginBody({...loginBody, userName: text})}
        iconStart={
          <IconFontAwesome5
            name="user-alt"
            size={16}
            color={CONFIG.color.secondaryIcon}
          />
        }
      />
      <TextInputGlobal
        placeholder="Mật khẩu"
        style={styles.input}
        value={loginBody?.password}
        onChangeText={text => setLoginBody({...loginBody, password: text})}
        iconStart={
          <IconFontAwesome5
            name="lock"
            color={CONFIG.color.secondaryIcon}
            size={16}
          />
        }
      />

      <ButtonGlobal
        title="Đăng nhập"
        style={styles.button}
        onPress={handleLogin}
        isLoading={loginMutate.isLoading}
      />
    </View>
  );
}

export default Login;
