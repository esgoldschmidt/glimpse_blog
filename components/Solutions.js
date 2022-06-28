import { React } from "react"
import allindustries from '../Components/data/allindustries'
import Link from 'next/link';

function Solutions () {

    return ( 
      <div className="solution-boxes flex justify-center">
        <div className="my-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {allindustries.map((item, index) => {
              return (
                <Link href={`/industry-solutions/${item.link}`} key={`${index}${item.id}`}>
                  <div className="motion-card flex bg-zinc-200 p-3 m-2 rounded-lg transform duration-500 hover:ease hover:bg-zinc-200 hover:scale-105" style={{ width: '300px', height: '60px', }} >
                    <div className="title-content flex justify-between items-center w-full">
                      <h3 className='flex items-center'>
                        {item.btnTitle}
                        <span className='ml-2' style={{fontSize: "13px"}}> 
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path></svg>
                        </span>
                      </h3>
                      <img src={item.hIcon.src} alt={item.name} style={{ height: '30px', width: '30px'}} />
                    </div>
                  </div>
                </Link>
              )
            })} 
        </div>
      </div>
        
      
     
    )
  
  }
  
  export default Solutions;