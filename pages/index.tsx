import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/index.module.css'
import React from 'react';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {

  return (
    <div className={styles.container}>
        <Head>
        <title>
          Parallel Polis
        </title>
        <meta
          name="description"
          content="Research Collective - Towards AGI and Beyond..."
          key="desc"
        />
      </Head>
      <NavBar></NavBar>
      <div className={styles.main}>
        <div className={styles.caption1}>Towards AGI and Beyond...</div>
        <div className={styles.caption2}>Parallel Polis - Research Collective</div>
      </div>
      <Footer></Footer>
    </div>
  )
}
