import {IGetTotalRes} from 'app/src/api/total';
import TextGlobal from 'app/src/components/TextGlobal';
import CONFIG from 'app/src/config';
import numberWithCommas from 'app/src/ultis/number-format/numberWithCommas';
import moment from 'moment';
import React from 'react';
import {View, StyleSheet} from 'react-native';

function TotalMoney({data}: {data?: IGetTotalRes}) {
  return (
    <View style={styles.root}>
      <TextGlobal style={styles.textTotal}>
        {data?.total || data?.total === 0
          ? numberWithCommas(data.total)
          : '- - -'}
      </TextGlobal>
      <TextGlobal style={styles.textTime}>
        <TextGlobal style={styles.textTime}>Cập nhật: </TextGlobal>
        {data?.updatedAt
          ? moment(data.updatedAt).format('DD/MM/YYYY HH:MM')
          : '--/--/---- --:--'}
      </TextGlobal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: CONFIG.color.main,
    marginHorizontal: CONFIG.layout.paddingHorizontal,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  textTotal: {
    fontSize: 50,
    fontWeight: '600',
    color: '#fff',
  },
  textTime: {
    color: '#fff',
  },
});

export default TotalMoney;
