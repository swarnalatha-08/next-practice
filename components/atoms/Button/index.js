import { Button } from "@chakra-ui/react";

export default function ButtonAtom({buttonName,onClick,...rest}){
    return <Button onClick={onClick} {...rest}>{buttonName}</Button>
}