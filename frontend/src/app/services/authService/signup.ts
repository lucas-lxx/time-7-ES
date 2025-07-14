import { httpClient } from '../httpClient';
import { sleep } from '../../utils/sleep';

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
  const { data } = await httpClient.post<SignupResponse>(
    // 'auth/sign-up',
    'user',
    params,
  );

  return data;
}
