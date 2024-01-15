import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<main class="container">
  <p>Hello 👋 I'm</p>
  <section class="animation">
    <div class="first"><div>DIVYANSH SONI</div></div>
    <div class="second"><div>Web Developer</div></div>
    <div class="third"><div>Systems Engineer</div></div>
  </section>
</main>
  )
}
