import rootApi from '../rootApi';

export interface ICreateFluctuationBody {
  type: 0 | 1;
  amountMoney: number;
  categoryId: number;
  content?: string;
}

export interface IFluctuationRes {}

const path = {
  create: '/fluctuation/create',
};

const create = (data: ICreateFluctuationBody): Promise<unknown> => {
  console.log('sdsd', data);
  return rootApi({
    url: path.create,
    method: 'post',
    data: data,
  });
};

export {create};
