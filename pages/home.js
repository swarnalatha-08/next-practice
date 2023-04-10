import Authors from "@/components/Authors";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
export default function Home() {
    const [author, setAuthor] = useState("");
    console.log("author details", author);

    useEffect(() => {
        fetch("https://api.quotable.io/authors")
            .then((response) => response.json())
            .then((data) => setAuthor(data));
    }, []);
    return (
        < >
            <Header />
            <Authors author={author} />
        </ >
    )
}