import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@/components/Layout/DefaultLayout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>PalnHub</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
