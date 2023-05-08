import rootApi from '../rootApi';

export interface ILoginBody {
  userName: string;
  password: string;
  deviceToken?: string | null;
}

export interface IRegisterBody {
  name: string;
  userName: string;
  password: string;
}

export interface ILoginRes {
  token: string;
  name: string;
  role: string;
  id: number;
}

const path = {
  login: '/auth/login',
  register: '/auth/register',
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

const register = (data: IRegisterBody): Promise<unknown> => {
  return rootApi(
    {
      url: path.register,
      method: 'post',
      data: data,
    },
    {displaySuccess: true},
  );
};

export {login, register};
