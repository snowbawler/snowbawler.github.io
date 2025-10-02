import React from 'react';
import "./pages.css"
import banner from "../assets/cragbanner.png";
import { Link } from "react-router-dom"
import { useNotionRecordMap } from "../hooks/useNotionRecordMap";
import NotionContent from "../components/notion/NotionContent";

const NOTION_PAGE_ID = '47e7ee996c284d54a4913cdd62ffdfe3';

export default function NotionPage() {
  const { recordMap, isLoading, error } = useNotionRecordMap(NOTION_PAGE_ID);

  return (
     <div className='crag'> 
      <Link to="/" style={{position: "absolute", top: "20px", left: "20px", padding: "10px 15px", background: "#D6CEC8", color: "#000",  textDecoration: "none", borderRadius: "5px",  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", fontSize: "16px",}}>Back</Link>
      <img src={banner} alt="Crags Banner" style={{top: "-2vw", left: "-2vw", maxWidth: '102vw', width: '102vw'}}></img>
      <div className='parent' style={{ maxWidth: 768 }}>
        {isLoading && <p>Loading...</p>}
        {error && <p role="alert">Failed to load content. Please refresh.</p>}
        {recordMap && !error && <NotionContent recordMap={recordMap} />}
      </div>
    </div>
  );
}
