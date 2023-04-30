import React, {ComponentType, ReactElement} from 'react';

import IconAntDesign from 'react-native-vector-icons/AntDesign';

import CONFIG from 'src/config';

import Login from 'src/screens/auth/login';
import HomeScreen from 'src/screens/home';
import Fluctuation from 'app/src/screens/fluctuation';
import MediaView from 'src/screens/media-view';

export interface IRouterList {
  name: string;
  label: string;
  component: ComponentType<ReactElement>;
  isBottom?: boolean;
  isHeader?: boolean;
  isModal?: boolean;
  icon?: ({isFocused}: {isFocused?: boolean}) => ReactElement;
}

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
];

export default routerList;
