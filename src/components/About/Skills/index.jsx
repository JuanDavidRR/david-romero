import React from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SkillsCards = () => {
  return (
    <>
      <div className="icons-container">
        <div className="card-skill">
          <FontAwesomeIcon icon={faWordpress} color="#28A4D9" />
          <span className="skill-title">WordPress</span>
        </div>
        <div className="card-skill">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          <span className="skill-title">HTML</span>
        </div>
        <div className="card-skill">
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          <span className="skill-title">CSS</span>
        </div>
        <div className="card-skill">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          <span className="skill-title">React JS</span>
        </div>
        <div className="card-skill">
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          <span className="skill-title">JavaScript</span>
        </div>
        <div className="card-skill">
          <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          <span className="skill-title">GIT</span>
        </div>
        <div className="card-skill">
          <img
            src="https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
            alt="NextJS"
          />
          <span className="skill-title">Next JS</span>
        </div>
        <div className="card-skill">
          <img
            src="https://oviondwebsite.s3.amazonaws.com/Untitled_design_45_235c8b1b7f.png"
            alt="NextJS"
          />
          <span className="skill-title">Google Search Console</span>
        </div>
        <div className="card-skill">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/google-analytics-2038769-1721667.png"
            alt="NextJS"
          />
          <span className="skill-title">Google Analytics</span>
        </div>
      </div>
    </>
  )
}

export default SkillsCards
