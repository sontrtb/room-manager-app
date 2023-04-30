import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  Text,
  ViewStyle,
} from 'react-native';
import styles from 'app/src/styles/components/ButtonGlobal';

interface IButtonGlobal {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  onLongPress?: () => void;
  isLoading?: boolean;
}

function ButtonGlobal(props: IButtonGlobal) {
  const {style, onPress, onLongPress, title, isLoading} = props;
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({pressed}) => [
        pressed ? styles.pressed : styles.noPressed,
        styles.buttonGlobal,
        style,
      ]}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={styles.textButton}>{title}</Text>
      )}
    </Pressable>
  );
}

export default ButtonGlobal;
