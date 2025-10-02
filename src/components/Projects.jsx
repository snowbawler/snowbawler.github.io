import './Projects.css'
import CardHelper from './helper/CardHelper'
import gitHubIcon from '../assets/github-mark.png'
import resume from '../assets/resume.svg'
import linkedin from '../assets/LI-In-Bug.png'
import imageA from '../assets/craghero.png'
import imageB from '../assets/muckcardimg.png'
import imageC from '../assets/bridgecover.png'
import resumePDF from '../assets/Su_Donne_Resume_F2026.pdf'

import React from 'react';
import { useNotionCollection } from '../hooks/useNotionCollection';


const NOTION_BLOG_ID = 'e75ae1c09cb347af9a12219825125a12';

const imageMap = {
  "imageA": imageA,
  "imageB": imageB,
  "imageC": imageC
};

export default function Projects() {
  const { rows: posts, isLoading, error } = useNotionCollection(NOTION_BLOG_ID);

  return (
    <div className='container'>
      <div className='title'>...and I make projects</div>
      <div className="card_container">
        {isLoading && <p className='card_loading'>Loading projects...</p>}
        {error && (
          <p className='card_error' role='alert'>
            Failed to load projects. Please try again later.
          </p>
        )}
        {!isLoading && !error && posts.map((post) => (
          <CardHelper
            key={post.slug}
            description = {post.description}
            title = {post.title}
            image = {imageMap[post.image]}
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
