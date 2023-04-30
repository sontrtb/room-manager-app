import rootApi from '../rootApi';

export interface ILoginBody {
  userName: string;
  password: string;
  deviceToken: string;
}

export interface ILoginRes {
  token: string;
  name: string;
  role: string;
  id: number;
}

const path = {
  login: '/auth/login',
};

const login = (data: ILoginBody): Promise<ILoginRes> => {
  return rootApi(
    {
      url: path.login,
      method: 'post',
      data: data,
    },
    {withToken: false},
  );
};

export {login};
