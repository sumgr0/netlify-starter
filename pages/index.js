import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="STKO by sumgr0" />
        <p className="description">
        </p>
      </main>
      <Footer />
    </div>
  )
}
