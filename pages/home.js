import Authors from "@/components/organisms/Authors";
import Header from "@/components/molecules/Header";
import { useState, useEffect } from "react";
import LoginLayout from "@/Layouts/loginLayout";

export default function Home({ author }) {
  // const [author, setAuthor] = useState("");
  console.log("author details", author);

  // useEffect(() => {
  //     fetch("https://api.quotable.io/authors")
  //         .then((response) => response.json())
  //         .then((data) => setAuthor(data));
  // }, []);
  return (
    <>
      <Authors author={author} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.quotable.io/authors");
  const author = await res.json();

  return {
    props: {
      author,
    },
    // revalidate: 10,
  };
}
