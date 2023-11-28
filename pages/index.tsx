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
            12.x.2023<br></br>alpha
          </div>
          <div className={styles.title1}>
            <Link href="https://github.com/yu-jeffy/SMILESpectra">SMILESpectra<br></br>Transformer Model for Predicting Mass Spectra from SMILES Chemical Notations </Link> 
          </div>
          <div className={styles.date2}>
            x.x.2024
          </div>
          <div className={styles.title2}>
            VirtueVersusValue<br></br>Comparative Study of Ethically and Financially Tuned LLMs in Decision-Making
          </div>
          <div className={styles.date3}>
            x.x.2024
          </div>
          <div className={styles.title3}>
            SoliditySleuth<br></br>Study Assessing LLMs for Smart Contract Vulnerability Detection
          </div>
          <div className={styles.date4}>
            x.x.2024
          </div>
          <div className={styles.title4}>
            AI Ethics Framework, Principles for LLM Integration
          </div>
        </div>
      </div>
    </div>
      )
}