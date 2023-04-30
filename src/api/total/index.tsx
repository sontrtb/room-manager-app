import rootApi from '../rootApi';

export interface IGetTotalRes {
  total: number;
  updatedAt: Date;
}

const path = {
  get_total: '/total',
};

const getTotal = (): Promise<IGetTotalRes> => {
  return rootApi({
    url: path.get_total,
    method: 'get',
  });
};

export {getTotal};
