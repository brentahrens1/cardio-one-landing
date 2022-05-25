import Head from 'next/head'

export default function Home() {
  return (
    <div className='home'>
      <div className='home__logo'>
        <img className='heart' src="/imgs/heart.png" alt="CardioOne Logo" />
        <img className='cardio-logo' src="/imgs/cardio-black.png" alt="CardioOne Logo" />
      </div>
      <div className='home__content'>
        <h1>A new kind of</h1>
        <h1>physician-centric</h1>
        <h1>partnership</h1>
        <p>We <span>partner</span> with independent cardiology groups <span>to invest</span> in their long-term success with capital, staff, technology, expertise, and best practices <span>to excel</span> in a rapidly changing environment and deliver superior clinical outcomes.</p>
        <button><a href="mailto:info@cardioone.com" target="_blank">Contact Us</a></button>
      </div>
    </div>
  )
}
