import {useMutation, useQueryClient} from '@tanstack/react-query';
import CONFIG from 'app/src/config';
import ButtonGlobal from 'app/src/components/ButtonGlobal';
import TextInputGlobal from 'app/src/components/TextInputGlobal';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ModalGlobal from 'src/components/ModalGlobal';
import TextGlobal from 'src/components/TextGlobal';
import {ICreateCategoryBody, createCategory} from 'app/src/api/category';

interface IModalCreateCategoryProps {
  isVisible: boolean;
  toggleModal: () => void;
}

function ModalCreateCategory(props: IModalCreateCategoryProps) {
  const {isVisible, toggleModal} = props;

  const queryClient = useQueryClient();

  const [bodyCreate, setBodyCreate] = useState<{
    name: string;
    price: string;
  }>({price: '', name: ''});

  const createMutate = useMutation(createCategory, {
    onSuccess: () => {
      toggleModal();
      setBodyCreate({price: '0', name: ''});
      queryClient.refetchQueries(['get_list_category']);
    },
  });

  const handleCreate = (): void => {
    const bodySend: ICreateCategoryBody = {
      price: Number(bodyCreate.price),
      name: bodyCreate.name,
    };

    createMutate.mutate(bodySend);
  };

  return (
    <ModalGlobal isVisible={isVisible} toggleModal={toggleModal}>
      <View>
        <TextGlobal style={styles.title}>Tạo danh mục chi tiêu</TextGlobal>

        <TextGlobal style={styles.text}>
          <TextGlobal style={styles.required}>*</TextGlobal>Tên:
        </TextGlobal>
        <TextInputGlobal
          placeholder="Tiền nước"
          value={bodyCreate?.name}
          onChangeText={text =>
            setBodyCreate({
              ...bodyCreate,
              name: text,
            })
          }
        />

        <TextGlobal style={styles.text}>
          <TextGlobal style={styles.required}>*</TextGlobal>Số tiền mặc định:
        </TextGlobal>
        <TextInputGlobal
          placeholder="x000 VNĐ"
          keyboardType="number-pad"
          value={bodyCreate?.price}
          onChangeText={text =>
            setBodyCreate({
              ...bodyCreate,
              price: text,
            })
          }
        />

        <View style={styles.buttonWrap}>
          <ButtonGlobal
            title="Hủy"
            style={[styles.button, {marginRight: 10}]}
            onPress={toggleModal}
          />
          <ButtonGlobal
            title="Khai báo"
            style={[styles.button, {marginLeft: 10}]}
            isLoading={createMutate.isLoading}
            onPress={handleCreate}
          />
        </View>
      </View>
    </ModalGlobal>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: CONFIG.color.secondaryText,
    marginBottom: 5,
  },
  required: {
    color: 'red',
  },
  text: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5,
    color: CONFIG.color.secondaryText,
  },
  buttonWrap: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {flex: 1},
});

export default ModalCreateCategory;
