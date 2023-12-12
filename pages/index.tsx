import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/index.module.css'
import React from 'react';

const items = [
  {
    date: 'x.x.2024',
    title: 'Study of Profit-Tuned LLMs in Morally Ambiguous Decision-Making',
    author: 'Max Huber, Jeffy Yu'
  },
  {
    date: 'x.x.2024',
    title: 'Study Assessing LLMs for Smart Contract Vulnerability Detection',
    author: 'Jeffy Yu'
  },
  {
    date: '12.12.2023',
    title: 'Uniswap V3 Arbitrage Scanner',
    author: 'Jeffy Yu',
    link: 'https://github.com/yu-jeffy/PyArb',
    linkText: '[repo]'
  },
  {
    date: '12.6.2023',
    title: 'Optimizing Closed Payment Networks on the Lightning Network: A Dual-Node Approach',
    author: 'Jeffy Yu',
    link: 'https://arxiv.org/abs/2312.03920',
    linkText: '[arxiv]'
  },
  {
    date: '12.4.2023',
    title: 'SMILESpectra',
    description: 'Transformer Model for Predicting Mass Spectra from SMILES Chemical Notations',
    author: 'Jeffy Yu',
    link: 'https://github.com/yu-jeffy/SMILESpectra',
    linkText: '[repo]'
  },
  {
    date: '11.19.2023',
    title: 'gpt-btc',
    description: 'Python and GPT-4 driven Bitcoin analysis bot',
    author: 'Jeffy Yu',
    link: 'https://github.com/yu-jeffy/gpt-btc',
    linkText: '[repo]'
  },
  {
    date: '11.10.2023',
    title: 'OpenAI Preparedness Challenge Entry',
    description: 'AI/LLM Misuse, Emergency Services Attack Vectors',
    author: 'Jeffy Yu',
    link: 'https://jyu.llc/jeffyyu.openaipreparedness.emergencyservices.pdf',
    linkText: '[doc]'
  }
  // ... Add more items as needed
];

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
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className={`${styles.date} ${styles[`date${index + 1}`]}`}>
            {item.date}
          </div>
          <div className={`${styles.title} ${styles[`title${index + 1}`]}`}>
            {item.title}
            <div>{item.description}</div>
            {item.author} &nbsp;
            {item.link && (
              <Link href={item.link}>
                {item.linkText}
              </Link>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
      </div>
    </div>
  )
}
