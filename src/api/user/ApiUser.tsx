import rootApi from '../rootApi';

const pathUser = {
  get_list_user: 'user',
};

const listUser = () => {
  return rootApi(
    {
      url: pathUser.get_list_user,
      method: 'get',
    },
    {withToken: false},
  );
};

export {listUser};
