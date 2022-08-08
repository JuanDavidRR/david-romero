import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import {
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {

    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_yy8d096',
        'template_ytukewe',
        form.current,
        '7C2yltZi5QjthQre2',
      )
      .then(
        (result) => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        (error) => {
          alert(error.text)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
              idx={16}
            />
          </h1>
          <p>
            If you want to get in touch with me, start a new project or give me the oportunity to work for you please let me your message! I will text you back as soon as possible
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
                  <input placeholder="Name" type="text" name="name" required />
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                  <input type="submit" className="flat-button" value="SEND" />
            </form>
          </div>
        </div>
        <div className="map-wrap">
        
        <div className="info-map">
          <ul>
            <li><h4>Personal Info</h4></li>
            <li><a href="mailto:juandavidrom@outlook.com"><FontAwesomeIcon icon={faEnvelope}/> juandavidrom@outlook.com</a></li>
            <li><a href="tel:573208424424"><FontAwesomeIcon icon={faPhone}/> +57 320-842-4424</a></li>
            <li><a href="https://www.linkedin.com/in/david-romero-58b7621a8/"><FontAwesomeIcon icon={faLinkedin}/> Linkedin</a></li>
            <li>Bogotá, Colombia</li>
          </ul>
        </div>
        <MapContainer center={[4.6975074,-74.1122391]} zoom={16}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[4.6975074,-74.1122391]}>
              <Popup>I am here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  )
}

export default Contact
