import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import routerList from 'src/router/routerList';
import BottomTab from 'src/components/layout/BottomTab';
import CONFIG from 'src/config';
import {memo} from 'react';
import {useAppSelector} from 'src/hook/Redux';
import HeaderBottomTab from '../components/layout/header/HeaderBottomTab';
import Notification from 'src/firebase/Notification';

const Stack = createStackNavigator();

const ThemeApp = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: CONFIG.color.background,
    text: CONFIG.color.text,
    border: '#000',
  },
};

function MyStack() {
  const user = useAppSelector(state => state.user);

  return (
    <NavigationContainer theme={ThemeApp}>
      <Stack.Navigator initialRouteName={user.token ? 'HomeScreen' : 'Login'}>
        <Stack.Screen
          name="HomeScreen"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />

        {routerList.map(router => (
          <Stack.Screen
            key={router.name}
            name={router.name}
            component={router.component}
            options={{
              headerShown: router.isHeader,
              headerTitle: () => <HeaderBottomTab title={router.label} />,
              gestureEnabled: true,
              presentation: router.isModal ? 'modal' : 'card',
            }}
          />
        ))}
      </Stack.Navigator>

      <Notification />
    </NavigationContainer>
  );
}

export default memo(MyStack);
