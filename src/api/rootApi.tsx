import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import CONFIG from 'src/config';
import {store} from 'src/redux/store';
import {errorToast} from 'app/src/ultis/toast';

interface IRootApiOptions {
  withToken?: boolean;
  displayError?: boolean;
}

function rootApi(
  config: AxiosRequestConfig,
  options: IRootApiOptions = {},
): Promise<any> {
  const defaultOptions = {
    withToken: CONFIG.network.with_token,
    displayError: CONFIG.network.display_error,
    ...options,
  };

  const apiClient = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
    baseURL: CONFIG.network.base_url,
    timeout: CONFIG.network.timeout,
  });

  // auth token
  const state = store.getState();
  if (defaultOptions.withToken) {
    apiClient.defaults.headers.common.Authorization = `Bearer ${state.user.token}`;
  }

  return new Promise((resolve, rejects) => {
    apiClient
      .request(config)
      .then(res => {
        if (res.data) {
          resolve(res.data.data);
          return;
        }
        if (defaultOptions.displayError) {
          errorToast('api no data');
          console.log('error no data', res);
        }
        resolve(res);
      })
      .catch((err: AxiosError) => {
        if (defaultOptions.displayError) {
          errorToast(JSON.parse(err.request._response).mess ?? 'Error');
        }
        rejects(err);
      });
  });
}

export default rootApi;
