import React, {ReactNode} from 'react';
import {styles} from 'src/styles/components/ModalGlobal';
import Modal from 'react-native-modal';
import {View} from 'react-native';

interface ModalContainerProps {
  isVisible: boolean;
  children: ReactNode;
  hasBackdrop?: boolean;
  toggleModal: () => void;
}

function ModalGlobal(props: ModalContainerProps) {
  const {children, isVisible, toggleModal, hasBackdrop = true} = props;

  return (
    <Modal
      style={styles.modal}
      hasBackdrop={hasBackdrop}
      isVisible={isVisible}
      backdropOpacity={0.3}
      backdropTransitionOutTiming={0}
      backdropTransitionInTiming={0}
      onBackdropPress={toggleModal}
      onSwipeComplete={toggleModal}
      useNativeDriverForBackdrop
      swipeDirection="down"
      avoidKeyboard>
      <View style={styles.modalContent}>
        <View style={styles.headerModal} />
        {children}
      </View>
    </Modal>
  );
}

export default ModalGlobal;
