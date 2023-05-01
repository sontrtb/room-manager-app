import {Asset} from 'react-native-image-picker';
import rootApi from '../rootApi';
import {isIos} from 'app/src/ultis/checkDevice';

export interface INotificationRes {
  id: number;
  title: string;
  content: string;
  link: string;
  image: string;
  createdAt: Date;
}

export interface IDetailNotificationRes {
  id: number;
  title: string;
  content: string;
  link: string;
  image: string;
  createdAt: Date;
  userData: {
    name: string;
  };
}

export interface IListNotificationParam {
  limit?: number;
}

export interface INotificationCreateBody {
  title: string;
  content?: string;
  link?: string;
  image?: Asset;
}

const path = {
  create: '/notification/create',
  getList: '/notification',
  getDetail: '/notification',
};

const getList = (
  param?: IListNotificationParam,
): Promise<INotificationRes[]> => {
  return rootApi({
    url: path.getList,
    method: 'get',
    params: param,
  });
};

const getDetail = (id: number): Promise<IDetailNotificationRes> => {
  return rootApi({
    url: path.getDetail + '/' + id,
    method: 'get',
  });
};

const create = (data: INotificationCreateBody): Promise<unknown> => {
  const form = new FormData();

  form.append('title', data.title);
  data.content && form.append('content', data.content);
  data.link && form.append('link', data.link);

  data.image &&
    console.log('sds', {
      name: data.image.fileName,
      type: data.image.type,
      uri: isIos ? data.image.uri?.replace('file://', '') : data.image.uri,
    });

  data.image &&
    form.append('image', {
      name: data.image.fileName,
      type: data.image.type,
      uri: isIos ? data.image.uri?.replace('file://', '') : data.image.uri,
    });

  return rootApi(
    {
      url: path.create,
      method: 'post',
      data: form,
    },
    {isFormData: true},
  );
};

export {create, getList, getDetail};
