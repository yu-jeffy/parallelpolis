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
      <div className={styles.subheader}>pragmatic research, towards agi and beyond</div>
      <div className={styles.divider}>
        
      </div>
      <div className={styles.content}>
        <div className={styles.itemContainer}>
          <div className={styles.date1}>
            11.10.2023
          </div>
          <div className={styles.title1}>
            <Link href="https://jyu.llc/jeffyyu.openaipreparedness.emergencyservices.pdf">OpenAI Preparedness Challenge Entry<br></br>AI/LLM Misuse, Emergency Services Attack Vectors</Link>
            <br></br>
            Jeffy Yu
          </div>
          <div className={styles.date2}>
            11.19.2023
          </div>
          <div className={styles.title2}>
            <Link href="https://github.com/yu-jeffy/gpt-btc">gpt-btc<br></br>Python and GPT-4 driven Bitcoin analysis bot</Link>
            <br></br>
            Jeffy Yu
          </div>
          <div className={styles.date3}>
            12.x.2023
          </div>
          <div className={styles.title3}>
            <Link href="https://github.com/yu-jeffy/SMILESpectra">SMILESpectra<br></br>Transformer Model for Predicting Mass Spectra from SMILES Chemical Notations</Link> 
            <br></br>
            Jeffy Yu
          </div>
          <div className={styles.date4}>
            x.x.2024
          </div>
          <div className={styles.title4}>
            Automated Uniswap Arbitrage Script
            <br></br>
            Jeffy Yu
          </div>
          <div className={styles.date5}>
            x.x.2024
          </div>
          <div className={styles.title5}>
            Study of Profit-Tuned LLMs in Morally Ambiguous Decision-Making
            <br></br>
            Jeffy Yu
          </div>
          <div className={styles.date6}>
            x.x.2024
          </div>
          <div className={styles.title6}>
            Study Assessing LLMs for Smart Contract Vulnerability Detection
            <br></br>
            Jeffy Yu
          </div>
        </div>
      </div>
    </div>
      )
}
