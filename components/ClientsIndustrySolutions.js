import React from 'react'
import Link from 'next/link'

function ClientsIndustrySolutions(props) {
    return (
        <div>
            <div className="inner__container bg-white text-gray-600 w-full p-3">
                <div className="container flex flex-col items-center ">
                  <div className="title-box text-center my-0 mx-auto leading-5">
                    <h2 className="text-gray-600 font-light text-3xl lg:text-4xl m-3" style={{ fontFamily: 'Montserrat' }}>
                      Our Clients & Partners
                    </h2>
                  </div>
                  <div className="partners my-0 mx-auto w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className='w-full flex justify-center'>
                        <div className='w-32 lg:w-44'>
                            <a href={props.linky1}>
                            <img src={props.image1.src} alt={props.alt1} target="_blank" />
                            </a>
                        </div>
                      </div>
                      <div className='w-full flex justify-center'>
                        <div className='w-32 lg:w-44'>
                            <a href={props.linky2}>
                            <img src={props.image2.src} alt={props.alt2} target="_blank" />
                            </a>
                        </div>
                      </div>
                      <div className='w-full flex justify-center'>
                        <div className='w-32 lg:w-44'>
                            <a href={props.linky3}>
                            <img src={props.image3.src} alt={props.alt3} target="_blank" />
                            </a>
                        </div>
                      </div>
                      <div className='w-full flex justify-center'>
                        <div className='w-32 lg:w-44'>
                            <a href={props.linky4}>
                            <img src={props.image4.src} alt={props.alt4} target="_blank" />
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    )
}

export default ClientsIndustrySolutions
