import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/common/navbar'
import { HomeComponent } from '../components/pages/home/Home'


export default function Home() {
  
  return (
    <>
      <Navbar />
      <HomeComponent />
    </>
  )
}

