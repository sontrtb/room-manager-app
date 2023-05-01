import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {INotificationRes} from 'app/src/api/notification';
import TextGlobal from 'app/src/components/TextGlobal';
import CONFIG from 'app/src/config';
import {RootStackParamList} from 'app/src/router/routerList';
import {getWindowWidth} from 'app/src/ultis/layout';
import React, {ReactElement, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Animated,
  Image,
  Pressable,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

function Carousel({data}: {data?: INotificationRes[]}): ReactElement {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const scrollX = new Animated.Value(0);
  const position = Animated.divide(scrollX, getWindowWidth);
  const refFlashList = useRef<FlatList | null>(null);

  const infiniteScroll = (): ReturnType<typeof setTimeout> => {
    const numberOfData = data?.length;
    let scrollValue = 0;
    let scrolled = 0;
    return setInterval(() => {
      scrolled++;
      if (numberOfData && scrolled < numberOfData) {
        scrollValue += getWindowWidth;
      } else {
        scrollValue = 0;
        scrolled = 0;
      }
      refFlashList.current?.scrollToOffset({
        animated: true,
        offset: scrollValue,
      });
    }, 5000);
  };

  useEffect(() => {
    const t = infiniteScroll();

    return () => {
      if (t) {
        clearInterval(t);
      }
    };
  });

  if (data && data.length) {
    return (
      <View style={styles.root}>
        <TextGlobal style={styles.textTitle}>Thông báo mới</TextGlobal>

        <FlatList
          ref={(myRef): void => {
            refFlashList.current = myRef;
          }}
          data={data}
          keyExtractor={(item, index): string => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          renderScrollComponent={(scrollComponentProps): ReactElement => (
            <ScrollView {...scrollComponentProps} />
          )}
          renderItem={({item}): ReactElement => {
            return (
              <Pressable
                onPress={(): void => {
                  navigation.navigate('NotificationDetailScreen', {
                    id: item.id,
                  });
                }}>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={{
                    uri: item.image,
                  }}
                />
                <TextGlobal style={styles.title}>{item.title}</TextGlobal>
              </Pressable>
            );
          }}
        />

        <View style={styles.dotView}>
          {data.map((_: any, index: number) => {
            const opacity = position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View key={index} style={[styles.dotItem, {opacity}]} />
            );
          })}
        </View>
      </View>
    );
  }
  return <View />;
}

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
  },

  textTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: CONFIG.layout.paddingHorizontal,
  },

  dotItem: {
    backgroundColor: CONFIG.color.main,
    borderRadius: 3,
    height: 6,
    marginHorizontal: 2.5,
    width: 6,
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  title: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    width: getWindowWidth - 100,
  },
  image: {
    width: getWindowWidth - CONFIG.layout.paddingHorizontal * 2,
    marginHorizontal: CONFIG.layout.paddingHorizontal,
    marginVertical: 10,
    height: 200,
    borderRadius: 15,
    backgroundColor: CONFIG.color.secondaryMain,
  },
});

export default Carousel;
