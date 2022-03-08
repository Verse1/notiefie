import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const data = [
  {
    link: 'https://nextjs.org/docs',
    title: 'Documentation',
    description: 'Find in-depth information about Next.js features and API.',
  },
  {
    link: 'https://nextjs.org/learn',
    title: 'Learn',
    description: 'Learn about Next.js in an interactive course with quizzes!',
  },
  {
    link: 'https://github.com/vercel/next.js/tree/canary/examples',
    title: 'Examples',
    description: 'Discover and deploy boilerplate example Next.js projects.',
  },
  {
    link: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Deploy',
    description:
      'Instantly deploy your Next.js site to a public URL with Vercel.',
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {data.map(({ link, title, description }) => (
            <a href={link} className={styles.card} key={title}>
              <h2>{title} &rarr;</h2>
              <p>{description}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
