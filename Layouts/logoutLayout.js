import { useEffect } from "react";
import { useRouter } from "next/router";
export default function LogoutLayout({ children }) {
  const router = useRouter();
  useEffect(()=>{
    if(router.pathname != '/login'){
      router.push('/login')
    }
  })
  return (
    <>
      {/* <div>Logout Layout</div> */}
      {children}
    </>
  );
}
