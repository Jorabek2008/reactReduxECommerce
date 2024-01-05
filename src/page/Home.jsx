import React from 'react'
import Navbar from '../components/Navbar'
import Crafted from '../components/Crafted'
import Novel from '../components/Novel'
import Benches from '../components/Benches'
import Couch from '../components/Couch'
import Footer from '../components/Footer'
import { createContext } from 'react';
import { data } from '../dates'

function Home() {

  return (
    <>
        <Navbar />
        <Crafted />
        <Novel />
        <Benches />
        <Couch />
        <Footer />
    </>
  )
}

export default Home