import React from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import styles from 'src/styles/screens/home';
import {useQuery} from '@tanstack/react-query';
import {getTotal} from 'app/src/api/total';
import TotalMoney from './components/TotalMoney';
import Category from './components/Category';
import Carousel from './components/Carousel';
import {getListCategory} from 'app/src/api/category';
import {useAppSelector} from 'app/src/hook/Redux';

function HomeScreen() {
  const totalQuery = useQuery(['get_total'], getTotal);
  const listCategoryQuery = useQuery(['get_list_category'], getListCategory);

  const device_token = useAppSelector(state => state.device_token);

  console.log('device_token', device_token);

  const onRefresh = () => {
    totalQuery.refetch();
    listCategoryQuery.refetch();
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={onRefresh} />
      }>
      <View style={styles.root}>
        <TotalMoney data={totalQuery.data} />

        <Category
          data={listCategoryQuery.data}
          isLoading={listCategoryQuery.isLoading}
        />

        <Carousel />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
