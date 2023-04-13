import Header from "@/components/molecules/Header";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function LoginLayout({ children }) {
  const router = useRouter();
  useEffect(()=>{
    if(router.pathname === '/login'){
      router.push('/home')
    }
  },[])
  return (
    <>
      <Header />
      {children}
      <div>footer</div>
    </>
  );
}
