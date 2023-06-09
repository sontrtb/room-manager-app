import {RouteProp, useRoute} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {getDetail} from 'app/src/api/notification';
import TextGlobal from 'app/src/components/TextGlobal';
import CONFIG from 'app/src/config';
import {RootStackParamList} from 'app/src/router/routerList';
import useImageAspectRatio from 'app/src/ultis/hooks/useImageAspectRatio';
import {getWindowWidth} from 'app/src/ultis/layout';
import moment from 'moment';
import React from 'react';
import {LinkPreview} from '@flyerhq/react-native-link-preview';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import PressableGlobal from 'app/src/components/PressableGlobal';
import Clipboard from '@react-native-clipboard/clipboard';
import {infoToast} from 'app/src/ultis/toast';

function NotificationDetail() {
  const {params} =
    useRoute<RouteProp<RootStackParamList, 'FluctuationDetailScreen'>>();

  const getNotificationDetail = () => getDetail(params.id);
  const {data, isLoading} = useQuery(
    ['get_detail_notification', params.id],
    getNotificationDetail,
  );

  const aspectRatio = useImageAspectRatio(data?.image ?? '');

  const handleCopy = () => {
    if (data?.link) {
      Clipboard.setString(data.link);
      infoToast('Đã sao chép');
    }
  };

  if (isLoading) {
    return (
      <View style={styles.root}>
        <SkeletonPlaceholder borderRadius={10}>
          <SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item width={200} height={40} />
            <SkeletonPlaceholder.Item
              marginTop={15}
              width={getWindowWidth - CONFIG.layout.paddingHorizontal * 2}
              height={200}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.root}>
        <TextGlobal style={styles.title}>{data?.title}</TextGlobal>
        <TextGlobal style={styles.time}>
          {data?.createdAt
            ? `Ngày tạo: ${moment(data?.createdAt).format('DD/MM/YYYY HH:MM')}`
            : '--/--/-- --:--'}
        </TextGlobal>
        <TextGlobal style={styles.user}>
          {`Người tạo: ${data?.userData.name}`}
        </TextGlobal>

        {data?.image && (
          <Image
            source={{uri: data.image}}
            style={[
              styles.image,
              {
                width: getWindowWidth - CONFIG.layout.paddingHorizontal * 2,
                aspectRatio,
              },
            ]}
          />
        )}

        <TextGlobal style={styles.content}>{data?.content}</TextGlobal>

        {data?.link && (
          <View>
            <PressableGlobal onPress={handleCopy}>
              <TextGlobal style={styles.content}>
                Link đi kèm:{' '}
                <TextGlobal style={styles.link}>{data.link}</TextGlobal>
                <TextGlobal>{'   '}</TextGlobal>
                <IconAntDesign
                  name="copy1"
                  size={16}
                  color={CONFIG.color.secondaryText}
                />
              </TextGlobal>
            </PressableGlobal>
            <LinkPreview text={data.link} containerStyle={styles.linkPreview} />
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: CONFIG.layout.paddingHorizontal,
    paddingVertical: CONFIG.layout.paddingVertical,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
  time: {
    color: CONFIG.color.secondaryText,
  },
  user: {
    marginBottom: 15,
    color: CONFIG.color.secondaryText,
  },
  image: {
    borderRadius: 10,
    marginBottom: 15,
  },
  content: {
    marginBottom: 15,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  linkPreview: {
    borderColor: CONFIG.color.main,
    borderRadius: 10,
    borderWidth: 1,
  },
  none: {
    display: 'none',
  },
});

export default NotificationDetail;
