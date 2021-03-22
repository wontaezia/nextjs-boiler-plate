import Layout from '@layout/Layout';
import Head from 'next/head'

function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        Hello!
      </Layout>
    </div>
  )
}

export default Home;