import { bookApiClient } from '../apiClient/bookApiClient';

export async function useBook(...[options]: Parameters<typeof bookApiClient.fetch>) {
  return {data: await bookApiClient.fetch(options)};
}
