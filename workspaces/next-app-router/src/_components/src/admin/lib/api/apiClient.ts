import { API_URL } from "@/_components/apiURL";

const baseURL = API_URL
// const baseURL = 'http://localhost:8000'

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
    const urlL = (baseURL ?? '') + targetURL
    const fetched = await fetch(urlL, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // @ts-ignore
    .catch((e:any) => {
      console.log('e', e)
    })
    let data;
    try {
    data = await fetched?.json()
    //@ts-ignore
    console.log('zot確認', data.error, urlL, query )
    } catch (e) {
      // const fetch = await fetched.text()
      console.error('error', e, )
    }
    if (!data) {
      data = {}
    }
    return { data: data as any}
  },
  delete: async <T>(url: string, query?: Record<string, unknown>):Promise<{data: T}>=> {
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
    const urlL = (baseURL ?? '') + targetURL
    const fetched = await fetch(urlL, {
      headers: {
       'Content-Type': 'application/json',
        method: 'DELETE',
      }
    })
    // @ts-ignore
    .catch((e:any) => {
      console.log('e', e)
    })
    let data;
    try {
    data = await fetched?.json()
    //@ts-ignore
    console.log('zot確認', data.error, urlL, query )
    } catch (e) {
      // const fetch = await fetched.text()
      console.error('error', e, )
    }
    if (!data) {
      data = {}
    }
    return { data: data as any}
  },
  post: async <T>(url: string, postData: any, query?: Record<string, unknown>):Promise<{data: T}>=> {
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
    const urlL = (baseURL ?? '') + targetURL
    const fetched = await fetch(urlL, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(postData) 
    })
    // @ts-ignore
    .catch((e:any) => {
      console.log('e', e)
    })
    let data;
    try {
    data = await fetched?.json()
    //@ts-ignore
    console.log('zot確認', data.error, urlL, query )
    } catch (e) {
      // const fetch = await fetched.text()
      console.error('error', e, )
    }
    if (!data) {
      data = {}
    }
    return { data: data as any}
  },
  patch: async <T>(url: string, postData: any, query?: Record<string, unknown>):Promise<{data: T}>=> {
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
    const urlL = (baseURL ?? '') + targetURL
    const fetched = await fetch(urlL, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(postData) 
    })
    // @ts-ignore
    .catch((e:any) => {
      console.log('e', e)
    })
    let data;
    try {
    data = await fetched?.json()
    //@ts-ignore
    console.log('zot確認', data.error, urlL, query )
    } catch (e) {
      // const fetch = await fetched.text()
      console.error('error', e, )
    }
    if (!data) {
      data = {}
    }
    return { data: data as any}
  }
}

export const apiClient = wraperApiClient;
