import React from 'react';
import {Text, View} from 'react-native';

interface IHeader {
  title: string;
}

function HeaderBottomTab(props: IHeader) {
  const {title} = props;

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default HeaderBottomTab;
