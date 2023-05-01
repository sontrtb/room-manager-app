import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {INotificationRes} from 'app/src/api/notification';
import PressableGlobal from 'app/src/components/PressableGlobal';
import TextGlobal from 'app/src/components/TextGlobal';
import CONFIG from 'app/src/config';
import {RootStackParamList} from 'app/src/router/routerList';
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

function NoficationItem({item}: {item: INotificationRes}) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleOpenDetail = (): void => {
    navigation.navigate('NotificationDetailScreen', {id: item.id});
  };

  return (
    <PressableGlobal style={styles.root} onPress={handleOpenDetail}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View>
        <TextGlobal numberOfLines={1} style={styles.title}>
          {item.title}
        </TextGlobal>
        <TextGlobal numberOfLines={1} style={styles.content}>
          {item.content}
        </TextGlobal>
      </View>
    </PressableGlobal>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: CONFIG.color.secondaryMain,
    padding: 8,
    borderRadius: 10,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  content: {
    color: CONFIG.color.secondaryText,
  },
});

export default NoficationItem;
