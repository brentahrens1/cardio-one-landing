import Head from 'next/head'
import Form from '../components/Form'

import { useState } from 'react'

export default function Home() {
  const [ formOpen, setFormOpen ] = useState(false)
  return (
    <div className={`home ${formOpen ? 'home-open' : ''}`}>
      <Head>
        <title>CardioOne | Landing Page</title>
        <meta name="description" content="Website coming soon." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='home__logo'>
        <img className='heart' src="/imgs/heart.png" alt="CardioOne Logo" />
        <img className='cardio-logo' src="/imgs/cardio-black.png" alt="CardioOne Logo" />
      </div>
      <div className='home__content'>
        <h1>A new kind of</h1>
        <h1>physician-centric</h1>
        <h1>partnership</h1>
        <p><span>We invest</span> capital, staff, technology, expertise, and best practices <span>alongside independent cardiologists to protect their clinical independence</span> in a rapidly consolidating and increasingly competitive environment.</p>
        {
          formOpen && <Form />
        }
        <button className={`${formOpen ? 'hide-btn' : ''}`} onClick={() => setFormOpen(!formOpen)}>Contact Us</button>
      </div>
    </div>
  )
}
