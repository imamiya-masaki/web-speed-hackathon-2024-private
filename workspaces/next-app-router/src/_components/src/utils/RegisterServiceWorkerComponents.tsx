'use client'

import { useEffect } from "react"
import { registerServiceWorker } from "./registerServiceWorker"


export const RegisterServiceWorker:React.FC = function () {
    useEffect(() => 
    {
      (async() => {
      // console.log('RegisterServiceWorker', navigator), 'serviceWorker' in navigator;
      try {
       await registerServiceWorker()
      } catch(e) {
        // console.error(e)
      }
      return
    })()
    }
    ,[])

    return (<></>)
}