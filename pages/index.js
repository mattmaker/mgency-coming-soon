import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>MGENCY - A Webflow & No-Code Agency</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          background-color: #131313;
          color: #ffffff;
        </style>
      </Head>

      <main>
        <Header title="We are currently re-building our website in Webflow!" />
        <p className="description">
          MGENCY is a no-code agency specialising in Brand Strategy, Webflow sites, and SEO!
        </p>
        <p className="description>
          We work with B2C tech startups, local businesses, food & beverage, and e-commerce.
        </p>
        <p className="description>
          For inquiries, please contact info@mgency.com
        </p>
      </main>
    </div>
  )
}
