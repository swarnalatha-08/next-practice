import { Heading } from "@chakra-ui/react"
export default function HeaderAtom({headerName,...rest}){
    return  <Heading {...rest}>{headerName}</Heading>
}