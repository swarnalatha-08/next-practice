import { Box, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import HeaderAtom from "../../atoms/HeaderAtom";
import ButtonAtom from "../../atoms/Button";

export default function Header() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token_name");
    router.push("/login");
    window.location.reload();
  };
  return (
    <Box
      h="120px"
      display="flex"
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"0 30px 0 10px"}
      bgGradient="linear(to-r ,#a0f0f2,#2e8487)"
    >
      <HeaderAtom headerName={"Quotes"} />
      <ButtonAtom
        buttonName={"Logout"}
        onClick={handleLogout}
        backgroundColor={"#9cf4f7"}
        _hover={{
          boxShadow: "dark-lg",
          backgroundColor: "#4d9b9e",
          color: "#fff",
        }}
      />
    </Box>
  );
}
