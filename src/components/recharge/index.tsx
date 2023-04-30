import CONFIG from 'app/src/config';
import React, {Fragment, useRef, useState} from 'react';
import {StyleSheet, Animated, PanResponder, View} from 'react-native';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TextGlobal from '../TextGlobal';
import PressableGlobal from '../PressableGlobal';
import ModalRecharge from './components/ModalRecharge';
import {useAppSelector} from 'app/src/hook/Redux';

function Recharge() {
  const user = useAppSelector(state => state.user);

  const pan = useRef(new Animated.ValueXY()).current;
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const toggleModal = (): void => {
    setIsVisibleModal(!isVisibleModal);
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;

  if (!user.token) {
    return <View />;
  }

  return (
    <Fragment>
      <Animated.View
        style={[
          {
            transform: [{translateX: pan.x}, {translateY: pan.y}],
          },
          styles.root,
        ]}
        {...panResponder.panHandlers}>
        <PressableGlobal style={styles.press} onPress={toggleModal}>
          <TextGlobal style={styles.text}>+</TextGlobal>
          <IconMaterialIcons
            name="monetization-on"
            size={30}
            color={CONFIG.color.main}
          />
        </PressableGlobal>
      </Animated.View>

      <ModalRecharge isVisible={isVisibleModal} toggleModal={toggleModal} />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 150,
    right: 20,
    borderRadius: 30,
    backgroundColor: CONFIG.color.background,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  press: {
    flexDirection: 'row',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '800',
    fontSize: 25,
    color: CONFIG.color.main,
  },
});

export default Recharge;
