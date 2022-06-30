import React from 'react'

function PressCoverageItems ({pressItem}) {
  return (
    <div className='card-grid-responsive m-3 text-center gap-4 flex flex-wrap justify-center pb-4 w-full'>
        {
          pressItem.map((item)=>{

              return <div className='card w-80 h-88 rounded-lg bg-zinc-200 flex flex-col items-center' key={item.id}>
              <div className='top-img w-full h-44'>
                <img className="rounded-t-lg h-44 w-full" src={ item.image.src } alt=""/>
              </div>
              <div className='card-content m-3 flex flex-col h-full justify-between'>
                <h4 className='h-14 flex justify-center items-center'>{item.title}</h4>
                <div className='m-2'>
                  <div className='card-content-info flex gap-x-4 justify-center flex-wrap'>
                    <div className='whitespace-nowrap'>
                      <i className="far fa-calendar-alt"></i>
                      <span> { item.date }</span>
                    </div>
                    <div className='whitespace-nowrap'>
                      <i className="far fa-newspaper"></i>
                      <span > { item.coverageby }</span>
                    </div>
                  </div>
                  <a href={item.link}>
                    <button className='btn btn-primary mt-3'>Learn More</button>
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