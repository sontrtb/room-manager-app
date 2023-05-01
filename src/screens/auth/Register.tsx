import {useNavigation} from '@react-navigation/native';
import ButtonGlobal from 'app/src/components/ButtonGlobal';
import TextGlobal from 'app/src/components/TextGlobal';
import TextInputGlobal from 'app/src/components/TextInputGlobal';
import React, {useState} from 'react';
import {View} from 'react-native';
import styles from 'src/styles/screens/auth/login';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CONFIG from 'app/src/config';
import {IRegisterBody, register} from 'app/src/api/auth';
import {useMutation} from '@tanstack/react-query';

function Register() {
  const navigation = useNavigation();

  const [registerBody, setRegisterBody] = useState<IRegisterBody>({
    userName: '',
    password: '',
    name: '',
  });

  const registerMutate = useMutation(register, {
    onSuccess: () => {
      navigation.goBack();
    },
  });

  const handleRegister = () => {
    registerMutate.mutate(registerBody);
  };

  return (
    <View style={styles.login}>
      <TextGlobal style={styles.title}>Đăng ký tài khoản</TextGlobal>

      <TextInputGlobal
        placeholder="Phạm Văn A"
        style={styles.input}
        value={registerBody?.name}
        onChangeText={text => setRegisterBody({...registerBody, name: text})}
        iconStart={
          <IconFontAwesome5
            name="user-alt"
            size={16}
            color={CONFIG.color.secondaryIcon}
          />
        }
      />
      <TextInputGlobal
        placeholder="abc123"
        style={styles.input}
        value={registerBody?.userName}
        onChangeText={text =>
          setRegisterBody({...registerBody, userName: text})
        }
        iconStart={
          <IconFontAwesome5
            name="user-alt"
            size={16}
            color={CONFIG.color.secondaryIcon}
          />
        }
      />
      <TextInputGlobal
        placeholder="123asds"
        style={styles.input}
        value={registerBody?.password}
        onChangeText={text =>
          setRegisterBody({...registerBody, password: text})
        }
        iconStart={
          <IconFontAwesome5
            name="lock"
            color={CONFIG.color.secondaryIcon}
            size={16}
          />
        }
      />

      <ButtonGlobal
        title="Đăng ký"
        style={styles.button}
        onPress={handleRegister}
        isLoading={registerMutate.isLoading}
      />
    </View>
  );
}

export default Register;
