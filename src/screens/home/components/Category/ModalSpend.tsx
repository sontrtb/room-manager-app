import {useMutation, useQueryClient} from '@tanstack/react-query';
import {ICategoryRes} from 'app/src/api/category';
import {ICreateFluctuationBody, create} from 'app/src/api/fluctuation';
import ButtonGlobal from 'app/src/components/ButtonGlobal';
import ModalGlobal from 'app/src/components/ModalGlobal';
import TextGlobal from 'app/src/components/TextGlobal';
import TextInputGlobal from 'app/src/components/TextInputGlobal';
import CONFIG from 'app/src/config';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';

interface IModalSpendProps {
  openModal: {
    isVisible: boolean;
    category?: ICategoryRes;
  };
  toggleModal: () => void;
}

function ModalSpend(props: IModalSpendProps) {
  const {openModal, toggleModal} = props;

  const queryClient = useQueryClient();

  const [bodyCreateFluctuation, setBodyCreateFluctuation] = useState<{
    content?: string;
    amountMoney: number | string;
  }>({amountMoney: openModal.category?.price ?? 0});

  useEffect(() => {
    setBodyCreateFluctuation({amountMoney: openModal.category?.price ?? 0});
  }, [openModal.category?.price]);

  const createFluctuationMutate = useMutation(create, {
    onSuccess: () => {
      toggleModal();
      queryClient.refetchQueries(['get_list_fluctuation']);
      queryClient.refetchQueries(['get_total']);
    },
  });

  const handleCreateFluctuation = (): void => {
    if (!openModal?.category?.id || !bodyCreateFluctuation?.amountMoney) {
      return;
    }
    const bodySend: ICreateFluctuationBody = {
      amountMoney: Number(bodyCreateFluctuation.amountMoney),
      content: bodyCreateFluctuation.content,
      type: 0,
      categoryId: openModal.category.id,
    };

    createFluctuationMutate.mutate(bodySend);
  };

  return (
    <ModalGlobal isVisible={openModal.isVisible} toggleModal={toggleModal}>
      <View>
        <TextGlobal style={styles.title}>{openModal.category?.name}</TextGlobal>

        <TextGlobal style={styles.text}>
          <TextGlobal style={styles.required}>*</TextGlobal>Số tiền:
        </TextGlobal>
        <TextInputGlobal
          placeholder="x000 VNĐ"
          keyboardType="number-pad"
          value={bodyCreateFluctuation?.amountMoney?.toString()}
          onChangeText={text =>
            setBodyCreateFluctuation({
              ...bodyCreateFluctuation,
              amountMoney: text,
            })
          }
        />

        <TextGlobal style={styles.text}>Nội dung:</TextGlobal>
        <TextInputGlobal
          placeholder="Chi tiêu..."
          value={bodyCreateFluctuation?.content}
          onChangeText={text =>
            setBodyCreateFluctuation({
              ...bodyCreateFluctuation,
              content: text,
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
            isLoading={createFluctuationMutate.isLoading}
            onPress={handleCreateFluctuation}
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

export default ModalSpend;
