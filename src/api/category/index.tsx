import rootApi from '../rootApi';

export interface ICategoryRes {
  id: number;
  name: string;
  price: number;
}

export interface ICreateCategoryBody {
  name: string;
  price: number;
}

const path = {
  getListCategory: '/category',
  createCategory: '/category/create',
};

const getListCategory = (): Promise<ICategoryRes[]> => {
  return rootApi({
    url: path.getListCategory,
    method: 'get',
  });
};

const createCategory = (body: ICreateCategoryBody): Promise<unknown> => {
  return rootApi(
    {
      url: path.createCategory,
      method: 'post',
      data: body,
    },
    {displaySuccess: true},
  );
};

export {getListCategory, createCategory};
