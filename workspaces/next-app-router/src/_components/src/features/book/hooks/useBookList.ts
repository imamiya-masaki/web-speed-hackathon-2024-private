import { bookApiClient } from '../apiClient/bookApiClient';

export async function useBookList(...[options]: Parameters<typeof bookApiClient.fetchList>) {
  console.log('useBookList', options)
  return await bookApiClient.fetchList(options);
}
