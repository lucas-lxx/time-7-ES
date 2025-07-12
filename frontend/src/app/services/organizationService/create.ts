import { httpClient } from '../httpClient';
import { sleep } from '../../utils/sleep';

type objectMember = {
  userEmail: string;
  permission: 'EDIT' | 'VIEW';
};

export interface organizationParams {
  name: string;
  description?: string | undefined;
  members?: Array<objectMember> | undefined;
}

export async function create(params: organizationParams) {
  await sleep(1000);
  const { data } = await httpClient.post('/group', params);

  return data;
}
