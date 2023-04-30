import {RouteProp, useRoute} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {getDetail} from 'app/src/api/fluctuation';
import TextGlobal from 'app/src/components/TextGlobal';
import CONFIG from 'app/src/config';
import {RootStackParamList} from 'app/src/router/routerList';
import numberWithCommas from 'app/src/ultis/number-format/numberWithCommas';
import moment from 'moment';
import React from 'react';
import {View, StyleSheet} from 'react-native';

function FluctuationDetail() {
  const {params} =
    useRoute<RouteProp<RootStackParamList, 'FluctuationDetailScreen'>>();

  const getFluctuationDetail = () => getDetail(params.id);
  const {data} = useQuery(
    ['get_list_fluctuation', params.id],
    getFluctuationDetail,
  );

  return (
    <View style={styles.root}>
      <TextGlobal style={styles.title}>Người tạo:</TextGlobal>
      <TextGlobal style={styles.des}>{data?.userData.name ?? '-'}</TextGlobal>

      <TextGlobal style={styles.title}>Số tiền:</TextGlobal>
      <TextGlobal
        style={[
          styles.des,
          {
            color: data?.type === 1 ? CONFIG.color.up : CONFIG.color.down,
          },
        ]}>{`${data?.type === 1 ? '+ ' : '- '}${numberWithCommas(
        data?.amountMoney,
      )}`}</TextGlobal>

      <TextGlobal style={styles.title}>Thời gian:</TextGlobal>
      <TextGlobal style={styles.des}>
        {moment(data?.createdAt).format('DD/MM/YYYY HH:MM')}
      </TextGlobal>

      <TextGlobal style={styles.title}>Việc:</TextGlobal>
      <TextGlobal style={styles.des}>{data?.categoryData.name}</TextGlobal>

      <TextGlobal style={styles.title}>Nội dung:</TextGlobal>
      <TextGlobal style={styles.des}>{data?.content ?? '-'}</TextGlobal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: CONFIG.layout.paddingHorizontal,
  },
  title: {
    color: CONFIG.color.main,
    fontSize: 22,
    fontWeight: '500',
    marginTop: 20,
  },
  des: {
    fontSize: 18,
  },
});

export default FluctuationDetail;
