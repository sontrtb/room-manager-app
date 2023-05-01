import {useNavigation} from '@react-navigation/native';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {INotificationCreateBody, create} from 'app/src/api/notification';
import ButtonGlobal from 'app/src/components/ButtonGlobal';
import ModalGlobal from 'app/src/components/ModalGlobal';
import PressableGlobal from 'app/src/components/PressableGlobal';
import TextGlobal from 'app/src/components/TextGlobal';
import TextInputGlobal from 'app/src/components/TextInputGlobal';
import CONFIG from 'app/src/config';
import {getWindowWidth} from 'app/src/ultis/layout';
import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function NotificationCreate() {
  const navigation = useNavigation();

  const [notificationCreateBody, setNotificationCreateBody] =
    useState<INotificationCreateBody>({title: ''});
  const [isOpenModalChangeImage, setIsOpenModalChangeImage] = useState(false);

  const toggerModalChangeAvatar = (): void => {
    setIsOpenModalChangeImage(!isOpenModalChangeImage);
  };

  const pickerMedia = () =>
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
      },
      res => {
        setNotificationCreateBody({
          ...notificationCreateBody,
          image: res.assets?.[0],
        });
        toggerModalChangeAvatar();
      },
    );

  const openCamera = () =>
    launchCamera(
      {
        mediaType: 'photo',
      },
      res => {
        setNotificationCreateBody({
          ...notificationCreateBody,
          image: res.assets?.[0],
        });
        toggerModalChangeAvatar();
      },
    );

  const createNotiMutate = useMutation(create, {
    onSuccess: () => {
      navigation.goBack();
    },
  });
  const handleCreateNoti = () => {
    createNotiMutate.mutate(notificationCreateBody);
  };

  return (
    <View style={styles.root}>
      <View>
        <TextGlobal style={styles.text}>
          <TextGlobal style={styles.required}>*</TextGlobal>Tiêu đề:
        </TextGlobal>
        <TextInputGlobal
          placeholder="Thông báo..."
          maxLength={255}
          value={notificationCreateBody.title}
          onChangeText={text =>
            setNotificationCreateBody({
              ...notificationCreateBody,
              title: text,
            })
          }
        />

        <TextGlobal style={styles.text}>Nội dung:</TextGlobal>
        <TextInputGlobal
          placeholder="Nội dung chi tiết..."
          multiline
          style={styles.multilineInput}
          value={notificationCreateBody.content}
          onChangeText={text =>
            setNotificationCreateBody({
              ...notificationCreateBody,
              content: text,
            })
          }
        />

        <TextGlobal style={styles.text}>Link đính kèm:</TextGlobal>
        <TextInputGlobal
          placeholder="https://..."
          maxLength={255}
          value={notificationCreateBody.link}
          onChangeText={text =>
            setNotificationCreateBody({
              ...notificationCreateBody,
              link: text,
            })
          }
        />

        <TextGlobal style={styles.text}>Ảnh:</TextGlobal>
        <PressableGlobal
          onPress={toggerModalChangeAvatar}
          style={styles.imageWrap}>
          {notificationCreateBody.image?.uri ? (
            <Image
              source={{
                uri: notificationCreateBody.image.uri,
              }}
              style={styles.image}
              resizeMode="contain"
            />
          ) : (
            <IconMaterialCommunityIcons
              name="image-plus"
              size={100}
              color={CONFIG.color.placeholderText}
            />
          )}
        </PressableGlobal>
      </View>

      <ButtonGlobal
        title="Tạo"
        isLoading={createNotiMutate.isLoading}
        style={{width: '100%'}}
        onPress={handleCreateNoti}
      />

      {/* modal change image */}
      <ModalGlobal
        isVisible={isOpenModalChangeImage}
        toggleModal={toggerModalChangeAvatar}>
        <View>
          <PressableGlobal
            onPress={pickerMedia}
            style={styles.optionChangeAvatar}>
            <IconFontAwesome5
              name="image"
              size={26}
              color={CONFIG.color.secondaryIcon}
            />
            <TextGlobal style={styles.textOptionChangeAvatar}>
              Thư viện ảnh
            </TextGlobal>
          </PressableGlobal>
          <PressableGlobal
            onPress={openCamera}
            style={styles.optionChangeAvatar}>
            <IconFontAwesome5
              name="camera"
              size={23}
              color={CONFIG.color.secondaryIcon}
            />
            <TextGlobal style={styles.textOptionChangeAvatar}>
              Camera
            </TextGlobal>
          </PressableGlobal>
        </View>
      </ModalGlobal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: CONFIG.layout.paddingHorizontal,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
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
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 5,
    color: CONFIG.color.secondaryText,
  },
  multilineInput: {
    height: 100,
    alignItems: 'flex-start',
  },
  imageWrap: {
    height: 200,
    width: getWindowWidth - CONFIG.layout.paddingHorizontal * 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(230, 230, 230)',
  },
  image: {
    borderRadius: 10,
    height: 200,
    width: getWindowWidth - CONFIG.layout.paddingHorizontal * 2,
  },
  optionChangeAvatar: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  textOptionChangeAvatar: {
    fontWeight: '700',
    marginLeft: 10,
  },

  label: {
    fontWeight: '700',
    marginTop: 20,
  },
});

export default NotificationCreate;
