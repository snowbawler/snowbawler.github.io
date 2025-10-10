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
      <Link
        to="/"
        style={{
          position: "fixed",   // or "absolute" if you want it relative to a container
          top: 20,
          right: 20,           // <-- use right instead of left
          padding: "10px 15px",
          background: "#D6CEC8",
          color: "#000",
          textDecoration: "none",
          borderRadius: 5,
          boxShadow: "0 2px 4px rgba(0,0,0,.1)",
          fontSize: 16,
          zIndex: 1000
        }}
      >
        Back
      </Link>
 
      <img src={banner} alt="Crags Banner" style={{top: "-2vw", left: "-2vw", maxWidth: '102vw', width: '102vw'}}></img>
      <div className='parent' style={{ maxWidth: 768 }}>
        {error && <p role="alert">Failed to load content. Please refresh.</p>}
        {recordMap && !error && <NotionContent recordMap={recordMap} />}
      </div>
    </div>
  );
}
