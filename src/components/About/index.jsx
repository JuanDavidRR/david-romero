import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import SkillsCards from './Skills'
import { Link } from 'react-router-dom'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    window.scrollTo(0, 0)

    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <section className="container about-page">
        <main className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
              idx={16}
            />
          </h1>
          <h2>Who i am?</h2>
          <p>
            I'm very ambitious front-end developer looking for a role in IT
            company with the opportunity to work with the latest technologies on
            challenging and diverse projects.
          </p>
          <h2>My Experience</h2>
          <p>
            I have been in the web industry for 3 years working as web
            developer, web master and SEO strategist in Colombian and American
            Companies, helping my clients creating websites and web apps to
            helping thousands of clients.
          </p>
          <p>
            Many people think that young people are lazy and ware underated. I
            want to prove that i will be a great resource in your projects. I am
            not the most skilled person but i love learn new things in this
            wonderful world
          </p>
        </main>
        <section>
          <SkillsCards />
          <div className="btn__container">
            <a href="https://platzi.com/p/davidromerorodas/" target="_blank" rel="noreferrer" className="flat-button projects">
              CHECK MY CERTIFICATIONS
            </a>
          </div>
        </section>
      </section>
    </>
  )
}

export default About
