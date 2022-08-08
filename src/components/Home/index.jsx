import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['D', 'A', 'V', 'I', 'D']
  const lastNameArray = ['R', 'O', 'M', 'E', 'R', 'O']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
          <span className={`${letterClass} _11 hi-span`}> H</span>
            <span className={`${letterClass} _12 hi-span`}>I, </span>
            <span className={`${letterClass} _12 hi-span`}> </span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m... </span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />
            <br/>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={lastNameArray}
              idx={20}
            />
          </h1>
          <br />

          <h2>
          <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={28}
            /></h2>
            <h3> Front End Developer | SEO Strategist</h3>
            <p>Welcome to my portfolio! I have a bunch of my work here so enjoy what i have for you!</p>
          <div className="button-group">
          <Link to="/about" className="flat-button">
            ABOUT ME
          </Link>
          <Link to="/portfolio" className="flat-button projects">
            MY PROJECTS
          </Link>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          </div>
        </div>
        {/* Imagen */}
      </div>
    </>
  )
}

export default Home
