import React, { useEffect, useState } from 'react';
import { NotionRenderer } from 'react-notion';
import "react-notion/src/styles.css";
import "./pages.css"
import banner from "../assets/bridgebillbanner.png";

const NOTION_PAGE_ID = 'eae685212778405d9b264bb36ed92801';

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
     <> 
      <img src={banner} alt="BridgeBill Banner" style={{maxWidth: '100vw', width: '100vw'}}></img>
      <h1 className='notion-title notion parent'>BridgeBill</h1>
      <div className='parent' style={{ maxWidth: 768 }}>
        <NotionRenderer blockMap={blockMap} />
      </div>
    </>
  );
}

