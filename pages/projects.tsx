import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/projects.module.css'
import React from 'react';
import { useState } from 'react';

const items = [
  {
    type: "project",
    date: 'x.x.2024',
    description: 'ink!jet: Retrieval Augmented Generation Large Language Model Platform for ink! Smart Contract Development, Web3 Foundation Grant',
    author: 'Max Huber, Kevin Tang, Jeffy Yu',
    link: ['https://github.com/yu-jeffy/ink-jet'],
    linkText: ['[repo]']
  },
  {
    type: "project",
    date: 'x.x.2024',
    title: 'Performance of Retrieval Augmented Generation Integrated Large Language Models in Smart Contract Vulnerability Detection',
    author: 'Jeffy Yu',
    link: ['https://github.com/yu-jeffy/audit.me'],
    linkText: ['[repo]']
  },
  {
    type: "paper",
    date: '4.4.2024',
    title: 'GreedLlama: Profit-Tuned Single Value LLMs in Moral Reasoning Decision-Making',
    author: 'Max Huber, Jeffy Yu',
    link: ['https://arxiv.org/abs/2404.02934'],
    linkText: ['[arxiv]']
  },
  {
    type: "project",
    date: '12.26.2023',
    title: 'Seshat: CLI Tool for Creating Bitcoin Inscriptions',
    author: 'Jeffy Yu',
    link: ['https://github.com/yu-jeffy/seshat'],
    linkText: ['[repo]']
  },
  {
    type: "project",
    date: '12.12.2023',
    title: 'Arbitrage Opportunity Monitor for Uniswap V3 Pools',
    author: 'Jeffy Yu',
    link: ['https://github.com/yu-jeffy/PyArb'],
    linkText: ['[repo]']
  },
  {
    type: "paper",
    date: '12.6.2023',
    title: 'Optimizing Closed Payment Networks on the Lightning Network: A Dual-Node Approach',
    author: 'Jeffy Yu',
    link: ['https://arxiv.org/abs/2312.03920'],
    linkText: ['[arxiv]']
  },
  {
    type: "project",
    date: '12.4.2023',
    description: 'SMILESpectra: Transformer Model for Predicting Mass Spectra from SMILES Chemical Notations',
    author: 'Jeffy Yu',
    link: ['https://github.com/yu-jeffy/SMILESpectra'],
    linkText: ['[repo]']
  },
  {
    type: "project",
    date: '11.19.2023',
    description: 'gpt-btc: Automated Bitcoin Market Research with GPT-4',
    author: 'Jeffy Yu',
    link: ['https://github.com/yu-jeffy/gpt-btc'],
    linkText: ['[repo]']
  },
  {
    type: "project",
    date: '11.10.2023',
    title: 'Multimodal AI/LLM Attack Vectors on Emergency Services,',
    description: 'OpenAI Preparedness Challenge',
    author: 'Jeffy Yu',
    link: ['https://jyu.llc/jeffyyu.openaipreparedness.emergencyservices.pdf'],
    linkText: ['[doc]']
  }
  // ... Add more items as needed
];

export default function Projects() {
  const [activeType, setActiveType] = useState('all');

  const filteredItems = items.filter((item) => activeType === 'all' || item.type === activeType);

  return (
    <div className={styles.container}>
      <Head>
        <title>Parallel Polis</title>
        <meta
          name="description"
          content="Active and previous research projects."
          key="desc"
        />
      </Head>
      <Link href={"/"}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image
              src="/parallel-polis-logo-invert.png"
              width={20}
              height={20}
              alt="logo"
            />
          </div>
          <div className={styles.bold}>Parallel Polis</div>
        </div>
        <div className={styles.subheader}>Research Collective - <i>towards agi and beyond</i></div>
      </Link>
      <div className={styles.divider}>
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeType === 'all' ? styles.activeTab : ''}`}
          onClick={() => setActiveType('all')}
        >
          ALL
        </button>
        <button
          className={`${styles.tabButton} ${activeType === 'project' ? styles.activeTab : ''}`}
          onClick={() => setActiveType('project')}
        >
          PROJECTS
        </button>
        <button
          className={`${styles.tabButton} ${activeType === 'paper' ? styles.activeTab : ''}`}
          onClick={() => setActiveType('paper')}
        >
          PAPERS
        </button>
      </div>


      <div className={styles.content}>
        <div className={styles.itemContainer}>
          {filteredItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className={`${styles.date} ${styles[`date${index + 1}`]}`}>
                {item.date}
              </div>
              <div className={`${styles.title} ${styles[`title${index + 1}`]}`}>
                {item.title}
                <div>{item.description}</div>
                {item.author} &nbsp;
                {item.link && item.link.map((link, linkIndex) => (
                  <React.Fragment key={linkIndex}>
                    <Link href={link}>
                      {item.linkText[linkIndex]}
                    </Link>
                    {linkIndex < item.link.length - 1 ? ', ' : ''}
                  </React.Fragment>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <footer className={styles.footer}>
        © 2023 Parallel Polis - All Rights Reserved
      </footer>
    </div>
  )
}
