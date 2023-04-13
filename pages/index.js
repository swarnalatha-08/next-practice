import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "./login";
import RandomQuote from "../components/molecules/random_quote";
import Home from "./home";
const inter = Inter({ subsets: ["latin"] });

export default function RandomQuoteBlock() {
  return (
    <>
      {/* <RandomQuote /> */}
      <Home />
    </>
  );
}
