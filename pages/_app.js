import '../styles/globals.css';
import Head from 'next/head';


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Parallel Polis</title>
        <meta name="description" content="Parallel Polis Research Collective - towards agi and beyond" key="desc"/>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
