import { authorApiClient } from '../apiClient/authorApiClient';

export async function useAuthor(...[options]: Parameters<typeof authorApiClient.fetch>) {
  console.log('useAuthor', options)
  return {data: await authorApiClient.fetch(options)};
}