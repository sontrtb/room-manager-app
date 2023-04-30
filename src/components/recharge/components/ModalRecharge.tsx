import {useMutation, useQueryClient} from '@tanstack/react-query';
import {ICreateFluctuationBody, create} from 'app/src/api/fluctuation';
import CONFIG from 'app/src/config';
import ButtonGlobal from 'app/src/components/ButtonGlobal';
import TextInputGlobal from 'app/src/components/TextInputGlobal';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ModalGlobal from 'src/components/ModalGlobal';
import TextGlobal from 'src/components/TextGlobal';

interface IModalRechargeProps {
  isVisible: boolean;
  toggleModal: () => void;
}

function ModalRecharge(props: IModalRechargeProps) {
  const {isVisible, toggleModal} = props;

  const queryClient = useQueryClient();

  const [bodyCreateFluctuation, setBodyCreateFluctuation] = useState<{
    content?: string;
    amountMoney: number | string;
  }>({amountMoney: 100000});

  const createFluctuationMutate = useMutation(create, {
    onSuccess: () => {
      toggleModal();
      setBodyCreateFluctuation({amountMoney: 100000});
      queryClient.refetchQueries(['get_list_fluctuation']);
      queryClient.refetchQueries(['get_total']);
    },
  });

  const handleCreateFluctuation = (): void => {
    const bodySend: ICreateFluctuationBody = {
      amountMoney: Number(bodyCreateFluctuation.amountMoney),
      content: bodyCreateFluctuation.content,
      type: 1,
      categoryId: 1,
    };

    createFluctuationMutate.mutate(bodySend);
  };

  return (
    <ModalGlobal isVisible={isVisible} toggleModal={toggleModal}>
      <View>
        <TextGlobal style={styles.title}>Đóng tiền quỹ phòng</TextGlobal>

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
          placeholder="Đóng tiền hàng tháng..."
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

export default ModalRecharge;
