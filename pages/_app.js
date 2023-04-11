import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import { useEffect, useState } from 'react';
import Login from './login';
export default function App({ Component, pageProps }) {
  const [isAuth,setIsAuth] = useState(false)
  useEffect(()=>{
    const auth = localStorage.getItem('token_name')
    setIsAuth(auth)
    console.log('check',auth);
  },[])
  return (
    <RecoilRoot>
      <ChakraProvider>
        {/* {isAuth ? <Component {...pageProps} /> : <Login />} */}
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>


  )

}
