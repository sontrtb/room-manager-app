import 'src/firebase';
// import 'react-native-gesture-handler';

import React from 'react';

import {store} from 'src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from 'src/redux/store';

import {SafeAreaView, StatusBar} from 'react-native';

import Toast from 'react-native-toast-message';
import Notification from 'src/firebase/Notification';
import Recharge from './src/components/recharge';
import MyStack from './src/router';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={{flex: 1}}>
            <StatusBar />
            <MyStack />
            <Toast />
            <Notification />
            <Recharge />
          </SafeAreaView>
        </PersistGate>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
