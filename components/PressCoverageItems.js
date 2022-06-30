import React from 'react'

function PressCoverageItems ({pressItem}) {
  return (
    <div className='card-grid-responsive m-3 text-center gap-4 flex flex-wrap justify-center pb-4 w-full'>
        {
          pressItem.map((item)=>{

              return <div className='card w-80 rounded-lg bg-zinc-200 flex flex-col items-center' style={{ height: '375px' }} key={item.id}>
              <div className='top-img w-full h-44'>
                <img className="rounded-t-lg h-44 w-full" src={ item.image.src } alt=""/>
              </div>
              <div className='card-content my-3 flex flex-col h-full justify-between'>
                <h4 className='h-14 flex justify-center items-center'>{item.title}</h4>
                <div className='m-2'>
                  <div className='card-content-info flex gap-x-4 justify-center flex-wrap'>
                    <div className='whitespace-nowrap text-sm'>
                      <i className="far fa-calendar-alt text-glimpse-blue mr-2"></i>
                      <span> { item.date }</span>
                    </div>
                    <div className='flex flex-wrap'>
                      <span className='inline text-sm'> <i className="far fa-newspaper inline mr-2 text-glimpse-blue"></i> { item.coverageby }</span>
                    </div>
                  </div>
                  <a href={item.link}>
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