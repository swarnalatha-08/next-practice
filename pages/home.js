import Authors from "@/components/Authors";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
export default function Home() {
    const [author, setAuthor] = useState("");
    console.log("author details", author);
    // const [isAuth,setIsAuth] = useState(false)
    // const router = useRouter()
    useEffect(() => {
        fetch("https://api.quotable.io/authors")
            .then((response) => response.json())
            .then((data) => setAuthor(data));
    }, []);
    // useEffect(()=>{
    //     const auth = localStorage.getItem('token_name')
    //     setIsAuth(auth)
    // },[])
    // if(isAuth){
    //     router.push('/home')
    // }
    return (
        < >
            <Header />
            <Authors author={author} />
        </ >
    )
}