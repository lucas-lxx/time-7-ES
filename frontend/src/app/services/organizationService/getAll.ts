import { httpClient } from '../httpClient';
import { type permissionMember } from './create';

export type groupUserType = {
  permission: permissionMember;
  User: {
    email: string;
    name: string;
  };
};

export interface organizationResponse {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  //createdAt: '2025-07-13T17:15:08.252Z'
  ownerId: string;
  groupUser: Array<groupUserType>;
}

export async function getAll() {
  const { data } = await httpClient.get<organizationResponse[]>('/group');

  return data;
}
