import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { useEffect, useState } from "react";
import Login from "./login";
import { useRouter } from "next/router";
import LoginLayout from "@/Layouts/loginLayout";
import { publicRoutes } from "@/utils/routes";
import LogoutLayout from "@/Layouts/logoutLayout";
import Home from "./home";

export default function App({ Component, pageProps }) {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("token_name");
    setIsAuth(auth);
    console.log("check", auth);
  }, []);

  // const publicComp = () => {
  //   if (publicRoutes.includes(router.pathname)) {
  //     return (
  //       <LogoutLayout>
  //         <Login />
  //       </LogoutLayout>
  //     );
  //   } else {
  //     return <Login />;
  //   }
  // };

  return (
    <RecoilRoot>
      <ChakraProvider>
        {isAuth ? (
          <LoginLayout>
            <Component {...pageProps} />
          </LoginLayout>
        ) : (
          // publicComp()
          <LogoutLayout>
          <Login />
          </LogoutLayout>
        )}
      </ChakraProvider>
    </RecoilRoot>
  );
}
