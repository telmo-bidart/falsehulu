import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results />
    </div>
  )
}
