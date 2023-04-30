import rootApi from '../rootApi';

export interface ICategoryRes {
  id: number;
  name: string;
  price: number;
}

const path = {
  getListCategory: '/category',
};

const getListCategory = (): Promise<ICategoryRes[]> => {
  return rootApi({
    url: path.getListCategory,
    method: 'get',
  });
};

export {getListCategory};
