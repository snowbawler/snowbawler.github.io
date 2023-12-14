import './Projects.css'
import CardHelper from './helper/CardHelper'
import imageA from '/public/duck.svg'
import imageB from '/public/duck.svg'

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
          link={'#'}
        />
        <CardHelper
          description={descriptionB}
          title={titleB}
          image={imageB}
          link={'#'}
        />
      </div>
      <div className='links'>links</div>
    </div>
  )
}
