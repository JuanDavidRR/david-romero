import React, { lazy, Suspense, useEffect, useState } from 'react'
import { portfolio } from '../../data/portfolio'
import AnimatedLetters from '../AnimatedLetters/index'
import LoadingPortfolio from '../Loading/LoadingProjects'
import './index.scss'
const Card = lazy(()=>import('./Card'))

const Porfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const title = ['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']

  useEffect(() => {
    window.scrollTo(0, 0)
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
    {/* <LoadingPortfolio/> */}
    <section id="portafolio" className="container portfolio-page">
      <h1>
        <AnimatedLetters letterClass={letterClass} strArray={title} idx={16} />
      </h1>
      <p className="product-list-description">
        Welcome to my projects, here can you find my porfolio projects made with
        React JS, Html, CSS, JS and WordPress technologies
      </p>
      <p>(Hover the cards to get more info)</p>
      <div className="product-list">
        <ul>
          {portfolio.map((product) => (
            <Suspense fallback={<LoadingPortfolio />}>
              <Card
                key={product.id}
                i={product.id}
                title={product.title}
                img={product.img}
                description={product.description}
                link={product.link}
              />
            </Suspense>
          ))}
        </ul>
      </div>
    </section>
    </>
  )
}

export default Porfolio
