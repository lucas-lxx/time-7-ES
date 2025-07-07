import { httpClient } from '../httpClient';
import { sleep } from '../../app/utils/sleep';

export interface SignupParams {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  accessToken: string;
}

export async function signup(params: SignupParams) {
  await sleep(1000);
  const { data } = await httpClient.post<SignupResponse>('auth/sigup', params);

  return data;
}
