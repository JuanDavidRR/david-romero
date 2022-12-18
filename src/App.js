import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
import Layout from './components/Layout'
// import Portfolio from './components/Portfolio/index'
import './App.scss'
import { lazy, Suspense } from 'react'
import Loading from './components/Loading/Loading'

const About = lazy(()=> import("./components/About/"))
const Contact = lazy(()=> import("./components/Contact/"))
const Portfolio = lazy(()=> import("./components/Portfolio/"))

function App() {
  return (
    <>
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />          <Route path="/about" element={<About />}/>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      </Suspense>
    </>
  )
}

export default App
