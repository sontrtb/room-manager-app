import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, TextProps} from 'react-native';

function TextGlobal(props: TextProps) {
  const {colors} = useTheme();
  return <Text {...props} style={[{color: colors.text}, props.style]} />;
}

export default TextGlobal;
