import rootApi from '../rootApi';

export interface ICreateFluctuationBody {
  type: 0 | 1;
  amountMoney: number | string;
  categoryId: number;
  content?: string;
}

export interface IFluctuationRes {
  id: number;
  type: 0 | 1;
  amountMoney: number;
  content?: string;
  createdAt: Date;
  categoryData: {
    name: string;
  };
}

const path = {
  create: '/fluctuation/create',
  getList: '/fluctuation',
};

const getList = (): Promise<IFluctuationRes[]> => {
  return rootApi({
    url: path.getList,
    method: 'get',
  });
};

const create = (data: ICreateFluctuationBody): Promise<unknown> => {
  return rootApi(
    {
      url: path.create,
      method: 'post',
      data: data,
    },
    {displaySuccess: true},
  );
};

export {create, getList};
