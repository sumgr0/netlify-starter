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
          This text is not visible on the page.
          <span style={{ display: 'none' }}>Takeover By @sumgr0</span>
        </p>
      </main>
      <Footer />
    </div>
  )
}
