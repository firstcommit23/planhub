import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '@/components/Layout/DefaultLayout';
import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>PalnHub</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
};

export default App;
