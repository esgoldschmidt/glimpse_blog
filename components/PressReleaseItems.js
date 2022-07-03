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
                  <div className='card-content-date'>
                    <i className="far fa-calendar-alt mr-2 text-glimpse-blue"></i>
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