import { bookApiClient } from '../apiClient/bookApiClient';

export async function useBookList(...[options]: Parameters<typeof bookApiClient.fetchList>) {
  return await bookApiClient.fetchList(options);
}
