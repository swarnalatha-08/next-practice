import { useState, useEffect } from "react";
import { Box, Button, AbsoluteCenter } from "@chakra-ui/react";
import quoteBG from '../public/Images/quoteBG.jpg'
import { useRouter } from "next/router";
export default function RandomQuote() {
    const [toggle, setToggle] = useState(false)
    const [randomQuote, setRandomQuote] = useState("");
    const router = useRouter()
    useEffect(() => {
        fetch("https://api.quotable.io/random")
            .then((response) => response.json())
            .then((data) => setRandomQuote(data));
    }, [toggle]);
    const handleRandomQuote = () => {
        router.push('/login')
    };
    return (
        <Box w='100%' h='100vh'
            bgGradient='linear(to-r ,#a0f0f2,#2e8487)'
        >
            <AbsoluteCenter >
                <Box 
                    textAlign={'center'} 
                    fontStyle={'italic'} 
                    fontFamily={'cursive'} 
                    fontSize={'2xl'} 
                    minH='450px'
                    w='400px' 
                    p='16' 
                    backgroundImage="url('/Images/quoteBG.jpg')"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    boxShadow='dark-lg' 
                    _hover={{boxShadow:'revert',color:'#fff'}}
                >
                    {randomQuote.content}
                </Box>
                <Button onClick={handleRandomQuote} bgColor={'#ace4e6'}>Get into website</Button>
            </AbsoluteCenter>
        </Box>
    )
}