import React from 'react'

function PressCoverageItems ({pressItem}) { 
  return (
    <div className='card-grid-responsive m-3 text-center gap-4 flex flex-wrap justify-center pb-4 w-full'>
        {
          pressItem.map((item)=>{

              return <div className='card w-80 rounded-lg bg-zinc-200 flex flex-col items-center' style={{ height: '375px' }} key={item.id}>
              <div className='top-img w-full h-44'>
                <img className="rounded-t-lg h-44 w-full" src={ item.node.featuredImage.url } alt=""/>
              </div>
              <div className='card-content my-3 flex flex-col h-full justify-between'>
                <h4 className='h-14 flex justify-center items-center'>{item.node.title}</h4>
                <div className='m-2'>
                  <div className='card-content-info flex gap-x-4 justify-center flex-wrap'>
                    <div className='whitespace-nowrap text-sm flex items-center justify-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span> { item.node.coverageDate }</span>
                    </div>
                    <div className='flex flex-wrap justify-center items-center'>
                      <i className="far fa-newspaper inline mr-2"></i>
                      <span className='inline text-sm'> { item.node.mediaOutlet }</span>
                    </div>
                  </div>
                  <a href={item.node.linkToCoverage} target="_blank">
                    <button className='btn bg-glimpse-blue hover:bg-sky-600 text-white mt-3'>Learn More</button>
                  </a>
                </div>
              </div>
            </div>
          })
        }
    </div>
  )
}

export default PressCoverageItems;