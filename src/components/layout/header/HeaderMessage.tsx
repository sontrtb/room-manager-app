// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
// import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TextGlobal from 'src/components/TextGlobal';

interface IHeader {
  title: string;
}

function HeaderMessage(props: IHeader) {
  const {title} = props;

  return (
    <View>
      <TextGlobal>{title}</TextGlobal>
    </View>
  );
}

export default HeaderMessage;
