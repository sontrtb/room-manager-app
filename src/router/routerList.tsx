import React, {ComponentType, ReactElement} from 'react';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import CONFIG from 'src/config';

import Login from 'src/screens/auth/login';
import HomeScreen from 'src/screens/home';
import Fluctuation from 'app/src/screens/fluctuation';
import MediaView from 'src/screens/media-view';
import FluctuationDetail from 'src/screens/fluctuation-detail';
import Profile from 'src/screens/profile';
import Notification from 'src/screens/notification';
import NotificationDetail from '../screens/notification-detail';

export interface IRouterList {
  name: string;
  label: string;
  component: ComponentType<ReactElement>;
  isBottom?: boolean;
  isHeader?: boolean;
  isModal?: boolean;
  icon?: ({isFocused}: {isFocused?: boolean}) => ReactElement;
}

export type RootStackParamList = {
  Login: undefined;
  FluctuationDetailScreen: {id: number};
  NotificationDetailScreen: {id: number};
  NotificationScreen: undefined;
};

const routerList: IRouterList[] = [
  {
    name: 'MainScreen',
    label: 'Trang chủ',
    component: HomeScreen,
    isBottom: true,
    isHeader: true,
    icon: props => (
      <IconAntDesign
        name="home"
        size={25}
        color={props.isFocused ? CONFIG.color.main : CONFIG.color.secondaryIcon}
      />
    ),
  },
  {
    name: 'Fluctuation',
    label: 'Biến động số dư',
    component: Fluctuation,
    isBottom: true,
    isHeader: true,
    icon: props => (
      <IconAntDesign
        name="areachart"
        size={25}
        color={props.isFocused ? CONFIG.color.main : CONFIG.color.secondaryIcon}
      />
    ),
  },
  {
    name: 'NotificationScreen',
    label: 'Thông báo',
    component: Notification,
    isBottom: true,
    isHeader: true,
    icon: props => (
      <IconFontAwesome
        name="bell"
        size={25}
        color={props.isFocused ? CONFIG.color.main : CONFIG.color.secondaryIcon}
      />
    ),
  },
  {
    name: 'ProfileScreen',
    label: 'Trang cá nhân',
    component: Profile,
    isBottom: true,
    isHeader: true,
    icon: props => (
      <IconFontAwesome
        name="user"
        size={28}
        color={props.isFocused ? CONFIG.color.main : CONFIG.color.secondaryIcon}
      />
    ),
  },

  {
    name: 'Login',
    label: 'Đăng nhập',
    isHeader: false,
    component: Login,
  },
  {
    name: 'MediaViewScreen',
    label: 'Chi tiết ảnh/video',
    isHeader: false,
    isModal: true,
    component: MediaView,
  },
  {
    name: 'FluctuationDetailScreen',
    label: 'Chi tiết',
    component: FluctuationDetail,
  },
  {
    name: 'NotificationDetailScreen',
    label: 'Chi tiết thông báo',
    component: NotificationDetail,
  },
];

export default routerList;
