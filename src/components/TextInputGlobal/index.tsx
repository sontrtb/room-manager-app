import CONFIG from 'app/src/config';
import React, {ReactNode} from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import styles from 'src/styles/components/TextInputGlobal';

interface ITextInputGlobal extends TextInputProps {
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}

function TextInputGlobal(
  props: ITextInputGlobal,
  ref?: React.LegacyRef<TextInput>,
) {
  const {iconStart, iconEnd, style} = props;

  return (
    <View style={[styles.textInputGlobal, style]}>
      {iconStart}
      <TextInput
        placeholderTextColor={CONFIG.color.placeholderText}
        {...props}
        ref={ref}
        style={styles.input}
      />
      {iconEnd}
    </View>
  );
}

export default React.forwardRef(TextInputGlobal);
