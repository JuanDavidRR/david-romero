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
            I am a highly ambitious front-end developer seeking a role in an IT
            company that offers the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <h2>My Experience</h2>
          <p>
            I have over 5 years of experience in the web industry, working as a{' '}
            <b>
              Web Developer, Digital Analytics Specialist, and Technical SEO
              Strategist
            </b>{' '}
            for Colombian and American companies. I have helped my clients
            create websites and web apps, reaching and benefiting{' '}
            <b>thousands of users</b>.
          </p>
          <p>
            Many people think young professionals are lazy or underestimated. I
            aim to prove that I can be a valuable asset to your projects. While
            I may not be the most skilled person, I am passionate about learning
            new things in this amazing field.
          </p>
        </main>
        <section>
          <SkillsCards />
          <div className="btn__container">
            <a
              href="https://platzi.com/p/davidromerorodas/"
              target="_blank"
              rel="noreferrer"
              className="flat-button projects"
            >
              CHECK MY CERTIFICATIONS
            </a>
          </div>
        </section>
      </section>
    </>
  )
}

export default About
