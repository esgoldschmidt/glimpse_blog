import React, { useState, useEffect, useRef } from 'react';
import allreleases from '../../../components/data/Releases/allreleases'
import { useRouter } from 'next/router'
import { Helmet } from "react-helmet";
import dynamic from "next/dynamic";
import PDF from "../../../components/pdfViewer"

const PDFViewer = dynamic(() => import("../../../components/pdfViewer"), {
  ssr: false
});


function SingleRelease () {
  const viewer = useRef(null);
  const [numPages, setNumPages] = useState(null);
  const [isLoading, setIsLoading]=useState(true)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
        alert(router.query.slug)
        // Code using query
        setIsLoading(false)
    }
    }, [router.isReady]);

  if (isLoading) return <div>loading</div>
  return (
    <div className="SingleRelease">
      <Helmet>
        <title>Press Release | The Glimpse Group</title>
        <meta
          name="description"
          content="The Glimpse Group is a Virtual Reality & Augmented Reality Platform Company Comprised of Multiple Software & Services Subsidiaries Creating VR/AR Solutions"
        />
      </Helmet>
      
      {allreleases.filter(item => item.slug === router.query.slug).map((item, index) => (
        <center key={`${item.id}${index}`}>
          <p>{item.pdfPage}</p>
          <div >
            <PDFViewer pdf={item.pdfPage} />
          </div>
        </center>
     ))}
    </div>
  )
}

export default SingleRelease;