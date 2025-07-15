import { httpClient } from '../httpClient';

export type permissionMember = 'EDIT' | 'VIEW';

export type objectMember = {
  userEmail: string;
  permission: permissionMember;
};

export interface organizationParams {
  name: string;
  description?: string | undefined;
  members?: Array<objectMember> | undefined;
}

export async function create(params: organizationParams) {
  //await sleep(1000);
  const { data } = await httpClient.post('/group', params);

  return data;
}
