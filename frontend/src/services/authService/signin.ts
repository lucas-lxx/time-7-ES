import { httpClient } from '../httpClient';
import { sleep } from '../../app/utils/sleep';

export interface SigninParams {
  email: string;
  password: string;
}

interface SigninResponse {
  accessToken: string;
}

export async function signin(params: SigninParams) {
  await sleep(1000);
  const { data } = await httpClient.post<SigninResponse>('auth/signin', params);

  return data;
}
