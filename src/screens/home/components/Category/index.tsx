import PressableGlobal from 'app/src/components/PressableGlobal';
import TextGlobal from 'app/src/components/TextGlobal';
import CONFIG from 'app/src/config';
import IconEntypo from 'react-native-vector-icons/Entypo';

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {getWindowWidth} from 'app/src/ultis/layout';
import {ICategoryRes} from 'app/src/api/category';
import ModalSpend from './ModalSpend';

function Category({data}: {data?: ICategoryRes[]}) {
  const [openModal, setOpenModal] = useState<{
    isVisible: boolean;
    category?: ICategoryRes;
  }>({
    isVisible: false,
  });

  const toggleModal = (): void => {
    setOpenModal({isVisible: false});
  };

  return (
    <View style={styles.root}>
      <TextGlobal style={styles.textTitle}>Chi tiêu</TextGlobal>
      {data?.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <View key={item.id} style={styles.item}>
              <PressableGlobal
                style={styles.itemWrap}
                onPress={(): void =>
                  setOpenModal({isVisible: true, category: item})
                }>
                <TextGlobal>{data[index].name}</TextGlobal>
                <IconEntypo name="chevron-right" size={25} />
              </PressableGlobal>
              {data[index + 1] && (
                <PressableGlobal
                  style={styles.itemWrap}
                  onPress={(): void =>
                    setOpenModal({isVisible: true, category: item})
                  }>
                  <TextGlobal>{data[index + 1]?.name}</TextGlobal>
                  <IconEntypo name="chevron-right" size={25} />
                </PressableGlobal>
              )}
            </View>
          );
        }
      })}

      <ModalSpend openModal={openModal} toggleModal={toggleModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: CONFIG.layout.paddingHorizontal,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '600',
  },

  // item
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: getWindowWidth / 2 - 22,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: CONFIG.color.secondaryBackground,
  },
});

export default Category;
