import Layout from 'components/Layout';
import Head from 'next/head';
import 'styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>{Component.title}</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
