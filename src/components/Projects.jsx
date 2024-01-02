import './Projects.css'
import CardHelper from './helper/CardHelper'
import imageA from '../assets/duck.svg'
import imageB from '../assets/duck.svg'

export default function Projects() {
  const descriptionA = 'A carpooling app for UT\'s rock climbing team'
  const titleA = 'Crags'
  const descriptionB = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, deleniti?'
  const titleB = 'Lorem Ipsum'

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
          link={'PlaceHolder'}
        />
      </div>
      <div className='links'>
        <img src="" alt="" />
      </div>
    </div>
  )
}
