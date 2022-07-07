import React from "react" 
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import allclients from "./data/allclientsHome";
import Carousel from 'react-multi-carousel';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default function Clients() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <React.Fragment>
      <div className='bg-white p-4 mb-8'>
        <div className="flex w-full justify-center mt-10 mb-6">
            <h2 className="text-4xl text-gray-600 font-light" style={{ fontFamily: 'Montserrat' }}>Our Clients & Partners</h2>
        </div>
        <Carousel
          swipeable={true}
          draggable={true}
          arrows={true} 
          renderButtonGroupOutside={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={!isMobile ? true : false}
          autoPlaySpeed={6000}
          keyBoardControl={true}
          //customTransition="all 1.5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          //deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px w-32"
        >
          {allclients.map((item, idx) => (
            <div className='h-72 w-full flex flex-col justify-between items-center bg-white' key={item.id}>
              <div className="slide h-32 w-32">
                  <a href={item.link} target="_blank">
                    <img src={item.image.src} alt={item.alt} className='h-32 w-32' />
                  </a>
              </div>  
              <div className="slide h-32 w-32">
                  <a href={item.link2} target="_blank">
                    <img src={item.image2.src} alt={item.alt2} className='h-32 w-32' />
                  </a>
              </div>           
            </div>
          ))}
        </Carousel>
      </div>
      
      {/* 
      <Slider {...settings}>
        {allclients.map((item, idx) => (
          <div key={item.id}>
            <div className="slide">
                <a href={item.link} target="_blank">
                  <img src={item.image} alt={item.alt} />
                </a>
            </div>        
            <div className="slide">
                <a href={item.link2} target="_blank">
                  <img src={item.image2} alt={item.alt2} />
                </a>
            </div>   
          </div>
        ))}
      </Slider>
      */}
    </React.Fragment>
  );
}
