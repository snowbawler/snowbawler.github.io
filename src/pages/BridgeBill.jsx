import React from 'react';
import "./pages.css"
import banner from "../assets/bridgebillbanner.png";
import { Link } from "react-router-dom"
import { useNotionRecordMap } from "../hooks/useNotionRecordMap";
import NotionContent from "../components/notion/NotionContent";

const NOTION_PAGE_ID = 'eae685212778405d9b264bb36ed92801';

export default function NotionPage() {
  const { recordMap, isLoading, error } = useNotionRecordMap(NOTION_PAGE_ID);

  return (
     <> 
      <Link to="/" style={{position: "absolute", top: "20px", left: "20px", padding: "10px 15px", background: "#8BB7BA", color: "#fff",  textDecoration: "none", borderRadius: "5px",  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", fontSize: "16px",}}>Back</Link>

      <img src={banner} alt="BridgeBill Banner" style={{maxWidth: '100vw', width: '100vw'}}></img>
      <div className='parent' style={{ maxWidth: 768 }}>
        {isLoading && <p>Loading...</p>}
        {error && <p role="alert">Failed to load content. Please refresh.</p>}
        {recordMap && !error && <NotionContent recordMap={recordMap} />}
      </div>
    </>
  );
}
