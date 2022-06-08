import Head from 'next/head'
import Form from '../components/Form'

import { useState } from 'react'

export default function Home() {
  const [ formOpen, setFormOpen ] = useState(false)
  return (
    <div className={`home ${formOpen ? 'home-open' : ''}`}>
      <Head>
        <title>CardioOne</title>
        <meta name="description" content="Website coming soon." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='home__logo'>
        <img className='heart' src="/imgs/heart.png" alt="CardioOne Logo" />
        <img className='cardio-logo' src="/imgs/cardio-black.png" alt="CardioOne Logo" />
      </div>
      <div className='home__content'>
        <h1>A new kind of</h1>
        <h1>partner for independent</h1>
        <h1>cardiologists</h1>
        <p>We invest alongside our partners, providing the capital, staff, technology, and expertise needed to excel in a rapidly changing and increasingly competitive environment.</p>
        {
          formOpen && <Form />
        }
        <button className={`${formOpen ? 'hide-btn' : ''}`} onClick={() => setFormOpen(!formOpen)}>Contact Us</button>
      </div>
    </div>
  )
}
