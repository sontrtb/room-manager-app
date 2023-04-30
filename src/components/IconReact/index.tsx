import React from 'react';
import {Image} from 'react-native';

interface IIconReactProps {
  uri: string;
  size?: number;
}

function IconReact(props: IIconReactProps) {
  const {uri, size = 16} = props;
  return (
    <Image
      source={{uri: uri}}
      style={{width: size, height: size, borderRadius: size / 2}}
    />
  );
}

export default IconReact;
