import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from './login'
import RandomQuote from './random_quote'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <RandomQuote />
    </>

  )
}
