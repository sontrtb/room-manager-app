import rootApi from '../rootApi';

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

const create = (data: INotificationRes): Promise<unknown> => {
  return rootApi(
    {
      url: path.create,
      method: 'post',
      data: data,
    },
    {displaySuccess: true},
  );
};

export {create, getList, getDetail};
