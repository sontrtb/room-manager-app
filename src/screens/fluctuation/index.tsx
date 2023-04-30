import React from 'react';
import {View, StyleSheet, VirtualizedList} from 'react-native';
import FluctuationItem from './components/FluctuationItem';
import {useQuery} from '@tanstack/react-query';
import {IFluctuationRes, getList} from 'app/src/api/fluctuation';
import CONFIG from 'app/src/config';

function Fluctuation() {
  const getListQuery = useQuery(['get_list_fluctuation'], getList);

  const handleRefetch = (): void => {
    getListQuery.refetch();
  };

  const getItemCount = (_data: string | any[]): number => _data?.length ?? 0;

  const getItem = (_data: IFluctuationRes[], index: number) => _data[index];

  return (
    <View style={styles.root}>
      <VirtualizedList
        data={getListQuery.data}
        initialNumToRender={10}
        renderItem={({item}) => <FluctuationItem item={item} />}
        keyExtractor={item => `${item.id}`}
        getItemCount={getItemCount}
        getItem={getItem}
        refreshing={getListQuery.isFetching && !getListQuery.isLoading}
        onRefresh={handleRefetch}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: CONFIG.layout.paddingHorizontal,
  },
});

export default Fluctuation;
