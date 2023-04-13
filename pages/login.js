import { Box, Button, Center, AbsoluteCenter } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import InputAtom from "@/components/atoms/InputAtom";
import ButtonAtom from "@/components/atoms/Button";
import LogoutLayout from "@/Layouts/logoutLayout";

export default function Login() {
  const [name, setName] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();
  const handleChange = (e) => {
    return setName(e.target.value);
  };

  useEffect(() => {
    const auth = localStorage.getItem("token_name");
    setIsAuth(auth);
    console.log("is auth", auth);
  }, []);
  const handleSubmit = () => {
    if (name.length > 0) {
      localStorage.setItem("token_name", name);
      router.push("/home");
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  };
  return (
    <Box w="100%" h="100vh" bgGradient="linear(to-r ,#a0f0f2,#2e8487)">
      <AbsoluteCenter display={"flex"} flexDirection={"column"}>
        <Box as="h3" fontSize="3xl" alignContent={"center"} mb="5">
          Login
        </Box>
        <InputAtom mb={6} onChange={handleChange} />
        <ButtonAtom
          buttonName={"submit"}
          onClick={handleSubmit}
          className="btn"
        />
      </AbsoluteCenter>
    </Box>
  );
}
