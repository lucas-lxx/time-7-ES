import { httpClient } from '../httpClient';

export async function deleteGroup(groupId: string) {
  const { data } = await httpClient.delete(`/group/${groupId}`);

  return data;
}
