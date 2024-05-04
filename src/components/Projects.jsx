import './Projects.css'
import CardHelper from './helper/CardHelper'
import gitHubIcon from '../assets/github-mark.png'
import resume from '../assets/resume.svg'
import linkedin from '../assets/LI-In-Bug.png'
import imageA from '../assets/CragHero.svg'
import imageB from '../assets/muckcardimg.png'
import resumePDF from '../assets/resume.pdf'

import React, { useEffect, useState } from 'react';


const NOTION_BLOG_ID = 'e75ae1c09cb347af9a12219825125a12';

const getAllPosts = async () => {
    const response = await fetch(`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`);
    return await response.json();
};

export default function Projects() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then(data => {
      setPosts(data);
      console.log(data);
    });
  }, []);

  const descriptionA = 'Texas Rock Climbing Member App'
  const titleA = 'Crags'
  const descriptionB = '2D Platformer'
  const titleB = 'Muck'
  const descriptionC = 'Medical Billing Error Detection'
  const titleC = 'BridgeBill'

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
        {posts.map((post) => (
          <CardHelper
            description = {post.description}
            title = {post.description}
            image = {post.image}
            link = {post.slug}
          />
        ))}
      </div>
      <div className='links'>
        <a href="https://github.com/snowbawler?tab=repositories" target='_blank'>
          <img className='link' src={gitHubIcon} alt="GitHub" />
        </a>
        <a href={resumePDF} target='_blank'>
          <img className='link' src={resume} alt="Resume" />
        </a>
        <a href="https://linkedin.com/in/donne-su" target='_blank'>
          <img className='link' src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    </div>
  )
}
