import { Box, Button, Center, Input, AbsoluteCenter } from "@chakra-ui/react";
import { Router, useRouter } from "next/router";
import { useState, useEffect } from "react";
import RandomQuote from "./random_quote";

export default function Login() {
  const [name, setName] = useState("");
  const [showQuote, setShowQuote] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();
  const handleChange = (e) => {
    return setName(e.target.value);
  };
  const handleSubmit = () => {
    if (name.length > 0) {
      localStorage.setItem("token_name", name);
      router.push("/home");
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("token_name");
    setIsAuth(auth);
  }, []);

  if (isAuth) {
    router.replace("/home");
  }

  return (
    <Box w="100%" h="100vh" bgGradient="linear(to-r ,#a0f0f2,#2e8487)">
      <AbsoluteCenter display={"flex"} flexDirection={"column"}>
        <Box as="h3" fontSize="3xl" alignContent={"center"} mb="5">
          Login
        </Box>
        <Input mb={6} onChange={handleChange} />
        <Button onClick={handleSubmit} className="btn">
          submit
        </Button>
      </AbsoluteCenter>
    </Box>
  );
}
