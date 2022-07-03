import React from 'react'
import { Link } from 'next/link'

// {console.log('items', releaseItems[0].node.featuredImage.url)}

function ReleaseItems ({ releaseItem }) {
  return (
    <div className='card-grid-responsive mt-3 text-center gap-4 flex flex-wrap justify-center pb-4 w-full'>
      {console.log(releaseItem)}
        {
          releaseItem.map((item, index)=>{

              return <div className='card w-80 h-96 rounded-lg bg-zinc-200 flex flex-col items-center' key={`${item.node.slug}`}>
              <div className='top-img w-full h-44'>
                <img className='rounded-t-lg h-44 w-full bg-white' src={ item.node.featuredImage.url } alt=""/>
              </div> 
              <div className='card-content m-3 flex flex-col h-full justify-between'>
                  <h5 className='text-sm h-20 flex items-center'>{item.node.title}</h5>
                  <div className='card-content-date flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span> { item.node.releaseDate }</span> 
                  </div>
              </div>
              <a href={`/news/press-releases/${item.node.slug}`}>
                <button className='btn bg-glimpse-blue hover:bg-sky-600 text-white mb-3'>Learn More</button>
              </a>
            </div>
          })
        }
    </div>
  )
}

export default ReleaseItems;