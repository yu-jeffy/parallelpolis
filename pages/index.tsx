import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Parallel Polis</title>
      </Head>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/parallelpolis-logo-transparent.png"
            width={20}
            height={20}
            alt="logo"
          />
        </div>
        <div className={styles.bold}>Parallel Polis</div>
      </div>
      <div className={styles.divider}>
        
      </div>
      <div className={styles.content}>
        <div className={styles.itemContainer}>
          <div className={styles.date1}>
            x.x.2024
          </div>
          <div className={styles.title1}>
            AI Ethics Framework, Principles for LLM Integration (draft in progress)
          </div>
          <div className={styles.date2}>
            x.x.2024
          </div>
          <div className={styles.title2}>
            SMILESpectra, Transformer ML Model for Predicting Mass Spectra from SMILES Chemical Notations (under development)
          </div>
        </div>
      </div>
    </div>
      )
}