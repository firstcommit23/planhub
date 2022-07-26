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
        <style jsx global>{`
          body {
            margin: 0;
          }
        `}</style>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
