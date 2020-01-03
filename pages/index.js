import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import '../styles.scss'

const Home = () => (
  <div>
    <Head className="example">
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />
  </div>
)

export default Home
