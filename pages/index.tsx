import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState } from "react";
import Navbar from '@/Components/Navbar';
import Header from '@/Components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header/>
      <Navbar/>
    </main>

  )
}
