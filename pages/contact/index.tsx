// pages/contact.js
import Head from 'next/head'
import ContactForm from '../../components/Contact/index'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us | Eurosia Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black text-white py-16">
        <ContactForm />
      </main>
    </div>
  )
}
