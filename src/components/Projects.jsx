import './Projects.css'
import CardHelper from './helper/CardHelper'
import gitHubIcon from '../assets/github-mark.png'
import resume from '../assets/resume.svg'
import linkedin from '../assets/LI-In-Bug.png'
import imageA from '../assets/CragHero.svg'
import imageB from '../assets/muckcardimg.png'
import resumePDF from '../assets/resume.pdf'

export default function Projects() {
  const descriptionA = 'A carpooling app for UT\'s rock climbing team'
  const titleA = 'Crags'
  const descriptionB = '2D Platformer'
  const titleB = 'Muck'

  return (
    <div className='container'>
      <div className='title'>...and i make projects</div>
      <div className="card_container">
        <CardHelper 
          description={descriptionA}
          title={titleA}
          image={imageA}
          link={'Crags'}
        />
        <CardHelper
          description={descriptionB}
          title={titleB}
          image={imageB}
          link={'Muck'}
        />
      </div>
      <div className='links'>
        <a href="https://github.com/snowbawler" target='_blank'>
          <img className='link' src={gitHubIcon} alt="GitHub" />
        </a>

        <a href="https://linkedin.com/in/donne-su" target='_blank'>
          <img className='link' src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    </div>
  )
}
