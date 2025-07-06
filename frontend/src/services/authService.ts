import { httpClient } from './httpClient';

interface SignupData {
  name: string;
  email: string;
  password: string;
}
async function signup(params: SignupData) {
  const { data } = await httpClient.post<{ accessToken: string }>(
    'auth/sigup',
    params,
  );

  return data;
}

export const authService = {
  signup,
};
