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
      <div className={styles.subheader}>Research Collective - <i>towards agi and beyond</i></div>
      <div className={styles.divider}>
        
      </div>
      <div className={styles.content}>
        <div className={styles.itemContainer}>
          <div className={styles.date1}>
            11.10.2023
          </div>
          <div className={styles.title1}>
            OpenAI Preparedness Challenge Entry<br></br>AI/LLM Misuse, Emergency Services Attack Vectors
            <br></br>
            Jeffy Yu, <Link href="https://jyu.llc/jeffyyu.openaipreparedness.emergencyservices.pdf">[doc]</Link>
          </div>
          <div className={styles.date2}>
            11.19.2023
          </div>
          <div className={styles.title2}>
            gpt-btc<br></br>Python and GPT-4 driven Bitcoin analysis bot
            <br></br>
            Jeffy Yu, <Link href="https://github.com/yu-jeffy/gpt-btc">[repo]</Link>
          </div>
          <div className={styles.date3}>
            12.4.2023
          </div>
          <div className={styles.title3}>
            SMILESpectra<br></br>Transformer Model for Predicting Mass Spectra from SMILES Chemical Notations
            <br></br>
            Jeffy Yu, <Link href="https://github.com/yu-jeffy/SMILESpectra">[notebook]</Link>
          </div>
          <div className={styles.date4}>
            x.x.2024
          </div>
          <div className={styles.title4}>
            Study of Profit-Tuned LLMs in Morally Ambiguous Decision-Making
            <br></br>
            Max Huber, Jeffy Yu
          </div>
          <div className={styles.date5}>
            x.x.2024
          </div>
          <div className={styles.title5}>
            Automated Uniswap Arbitrage Script
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
          <div className={styles.date7}>
            x.x.2024
          </div>
          <div className={styles.title7}>
            Study of Optimal Lightning Node Network Architecture for Payment Systems
            <br></br>
            Jeffy Yu
          </div>
        </div>
      </div>
    </div>
      )
}
