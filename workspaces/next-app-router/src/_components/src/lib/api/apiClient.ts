// import { apiClient } from './../../admin/lib/api/apiClient';
// import axios from 'axios';

// const createAxiosInstance = () => {
//   const instance = axios.create({
//     baseURL: process.env['API_URL'] || '/',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   return instance;
// };


const baseURL = 'http://localhost:8000'

const wraperApiClient = {
  get: async <T>(url: string, query?: Record<string, unknown>):Promise<{data: T}>=> {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query ?? {})) {
      if (value) {
        searchParams.set(key, `${value}`)
      }
    }
    let targetURL:string = url
    if (searchParams.toString()) {
      targetURL = targetURL + '?' + searchParams.toString()
    }
    const fetched = await fetch((baseURL ?? '') + targetURL, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let data;
    console.log('url', targetURL)
    try {
    data = await fetched.json()
    console.log('data', data)
    } catch (e) {
      // const fetch = await fetched.text()
      console.error(fetch)
    }
    if (!data) {
      data = {}
    }
    return { data: data as any}
  }
}

// export const apiClient = createAxiosInstance();
export const apiClient = wraperApiClient;
