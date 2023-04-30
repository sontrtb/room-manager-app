import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface IHeader {
  title: string;
}

function HeaderBottomTab(props: IHeader) {
  const {title} = props;

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default HeaderBottomTab;
