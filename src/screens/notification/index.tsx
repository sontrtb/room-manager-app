import {useQuery} from '@tanstack/react-query';
import {INotificationRes, getList} from 'app/src/api/notification';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React from 'react';
import {View, StyleSheet, VirtualizedList} from 'react-native';
import NoficationItem from './components/NotificationItem';
import CONFIG from 'app/src/config';

function Notification() {
  const getListNotificationQuery = useQuery(['get_list_notification'], () =>
    getList(),
  );

  const handleRefetch = (): void => {
    getListNotificationQuery.refetch();
  };

  const getItemCount = (_data: string | any[]): number => _data?.length ?? 0;

  const getItem = (_data: INotificationRes[], index: number) => _data[index];

  if (getListNotificationQuery.isLoading) {
    return (
      <View style={styles.root}>
        <SkeletonPlaceholder borderRadius={10}>
          <SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item width="100%" height={70} marginTop={15} />
            <SkeletonPlaceholder.Item width="100%" height={70} marginTop={15} />
            <SkeletonPlaceholder.Item width="100%" height={70} marginTop={15} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <VirtualizedList
        data={getListNotificationQuery.data}
        initialNumToRender={10}
        renderItem={({item}) => <NoficationItem item={item} />}
        keyExtractor={item => `${item.id}`}
        getItemCount={getItemCount}
        getItem={getItem}
        refreshing={
          getListNotificationQuery.isFetching &&
          !getListNotificationQuery.isLoading
        }
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

export default Notification;
