import React, { useEffect, useState } from 'react';
import { NotionRenderer } from 'react-notion';
import "react-notion/src/styles.css";
import "./pages.css"
import banner from "../assets/cragbanner.png";
import { Link } from "react-router-dom"

const NOTION_PAGE_ID = '47e7ee996c284d54a4913cdd62ffdfe3';

export default function NotionPage() {
  const [blockMap, setBlockMap] = useState(null);

  useEffect(() => {
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(res => res.json())
      .then(data => setBlockMap(data))
      .catch(error => console.error('Failed to fetch Notion data:', error));
  }, []);

  if (!blockMap) {
    return <p>Loading...</p>;
  }

  return (
     <div className='crag'> 
      <Link to="/" style={{position: "absolute", top: "20px", left: "20px", padding: "10px 15px", background: "#F26E00", color: "#fff",  textDecoration: "none", borderRadius: "5px",  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", fontSize: "16px",}}>Back</Link>
      <img src={banner} alt="Crags Banner" style={{maxWidth: '100vw', width: '100vw'}}></img>
      <h1 className='notion-title notion parent'>Crags</h1>
      <div className='parent' style={{ maxWidth: 768 }}>
        <NotionRenderer blockMap={blockMap} />
      </div>
    </div>
  );
}