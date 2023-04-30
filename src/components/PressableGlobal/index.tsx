import styles from 'app/src/styles/components/PressableGlobal';
import React from 'react';
import {Pressable, PressableProps} from 'react-native';

function PressableGlobal(props: PressableProps) {
  return (
    <Pressable
      {...props}
      style={({pressed}) => [
        pressed ? styles.pressed : styles.noPressed,
        styles.wrapperCustom,
        props.style,
      ]}
    />
  );
}

export default PressableGlobal;
