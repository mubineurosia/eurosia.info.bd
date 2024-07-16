import Head from 'next/head'
import ContactForm from '../../components/Contact'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us | Eurosia Group</title>
        <meta name="description" content="Get in touch with Eurosia Group for more information about our services and offerings." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black text-white py-16">
        <ContactForm />
      </main>
    </div>
  )
}
