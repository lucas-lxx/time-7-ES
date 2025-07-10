//OLHAR VIDEO 28:44
import { httpClient } from '../httpClient';

export interface MeResponse {
  name: string;
  email: string;
}

export async function me() {
  const { data } = await httpClient.get<MeResponse>('/user/me');

  return data;
}
