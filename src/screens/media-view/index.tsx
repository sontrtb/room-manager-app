import React from 'react';
import {Image, View} from 'react-native';
import styles from 'app/src/styles/media-view';
import {useNavigation, useRoute} from '@react-navigation/native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CONFIG from 'app/src/config';
import PressableGlobal from 'app/src/components/PressableGlobal';

function MediaView() {
  const {params} = useRoute();

  const {goBack} = useNavigation();

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <PressableGlobal
          style={styles.iconAction}
          hitSlop={10}
          onPress={goBack}>
          <IconFontAwesome5
            name="arrow-left"
            color={CONFIG.color.secondaryIcon}
            size={20}
          />
        </PressableGlobal>
      </View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: params.uri,
        }}
      />
    </View>
  );
}

export default MediaView;
