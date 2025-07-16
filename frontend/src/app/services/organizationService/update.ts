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

export async function update(id: string, params: Partial<organizationParams>) {
  const { data } = await httpClient.patch(`/group/${id}`, params);
  return data;
}
