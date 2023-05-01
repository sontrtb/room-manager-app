import {useAppDispatch, useAppSelector} from 'app/src/hook/Redux';
import {logout} from 'app/src/redux/slices/UserSlice';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {RootStackParamList} from 'app/src/router/routerList';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import CONFIG from 'app/src/config';
import PressableGlobal from 'app/src/components/PressableGlobal';
import TextGlobal from 'app/src/components/TextGlobal';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import ModalCreateCategory from './components/ModalCreateCategory';

function Setting() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const user = useAppSelector(state => state.user);

  const [isVisibleModalCategory, setIsVisibleModalCategory] = useState(false);

  const toggleModalCategory = (): void => {
    setIsVisibleModalCategory(!isVisibleModalCategory);
  };

  const handleLogout = (): void => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  return (
    <View style={styles.root}>
      <View>
        <PressableGlobal
          style={styles.settingItem}
          onPress={() => {
            navigation.navigate('NotificationCreateScreen');
          }}>
          <TextGlobal style={styles.settingText}>Tạo thông báo</TextGlobal>
          <IconMaterialIcons name="notifications-active" size={25} />
        </PressableGlobal>

        <PressableGlobal
          style={styles.settingItem}
          onPress={toggleModalCategory}>
          <TextGlobal style={styles.settingText}>
            Tạo danh mục chi tiêu
          </TextGlobal>
          <IconMaterialIcons name="category" size={25} />
        </PressableGlobal>

        {user.role === 'admin' && (
          <PressableGlobal
            style={styles.settingItem}
            onPress={() => {
              navigation.navigate('RegisterScreen');
            }}>
            <TextGlobal style={styles.settingText}>Tạo tài khoản</TextGlobal>
            <IconFontAwesome name="user-plus" size={25} />
          </PressableGlobal>
        )}
      </View>

      <PressableGlobal style={styles.settingItem} onPress={handleLogout}>
        <TextGlobal style={styles.settingText}>Đăng xuất</TextGlobal>
        <IconMaterialCommunityIcons name="logout" size={25} />
      </PressableGlobal>

      <ModalCreateCategory
        isVisible={isVisibleModalCategory}
        toggleModal={toggleModalCategory}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: CONFIG.layout.paddingHorizontal,
    paddingVertical: CONFIG.layout.paddingVertical,
    justifyContent: 'space-between',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: CONFIG.color.secondaryBackground,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  settingText: {
    fontSize: 16,
    fontWeight: '500',
    color: CONFIG.color.secondaryText,
  },
});

export default Setting;
