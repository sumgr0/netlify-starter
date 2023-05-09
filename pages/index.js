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
        <Header title="STKO" />
        <p className="description">
        </p>
      </main>
<!--Takeover By @sumgr0--!>
<!--Taken to ensure safe return to owners--!>
<!--FIX DNS RECORDS TO RESOLVE--!>
      <Footer />
    </div>
  )
}
