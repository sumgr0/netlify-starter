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
        <Header title="We will be right back." />
        <p className="description">
          <span style={{ display: 'none' }}>Takeover By @sumgr0</span>
        </p>
      </main>
      <Footer />
    </div>
  )
}
