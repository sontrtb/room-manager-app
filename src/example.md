## icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';

## navigation
const navigation = useNavigation()

## style
import CONFIG from 'src/config';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

export default styles;

## redux
  const user = useAppSelector((state) => state.user);
  
  const device_token = useAppSelector(state => state.device_token);

  const dispatch = useAppDispatch();
   dispatch(logout());

## new comopnent
import React from 'react';
import {View} from 'react-native';

function Login() {

  return (
    <View style={styles.root}>
    
    </View>
  );
}

export default Login;

## IOS not config
@react-native-image-picker
@react-native-async-storage/async-storage
react-native-vector-icons
firebase
react-native-gesture-handler
