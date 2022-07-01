import React from "react";
import { ExternalLink } from "react-external-link/dist/index.cjs";

function Companies({ companyItem }) {
    return (
      <React.Fragment>
        <div className="Companies">
          <div className="honeycomb m-4"> 
            {companyItem.map(item => {
              return (
                <div className="hexagon" key={item.id}>
                  <div className={item.class}>
                    { item.id === 15 ? 
                      <div className="hex__front__soon clip-path">
                        <img className="hex-img relative" src={item.image.src} alt={item.alt} />
                        <p className='text-center absolute bottom-12 left-12 text-white'>coming soon</p>
                      </div>
                    : 
                      <div className="hex__front clip-path">
                        <img className="hex-img" src={item.image.src} alt={item.alt} />
                      </div>
                    }
                    
                    <div className="hex__back clip-path">
                      <div className="hex__body">
                        <p className='text-sm'>{item.description}</p>
                        <a href={item.link} className="cta" target="_blank">
                          <span>
                            Visit Site <i className="fas fa-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="honey-m">
            {companyItem.map(item => {
              return (
                <div className="hexagon" key={item.id}>
                  <div className="hexagon__content_noflip">
                    <ExternalLink href={item.link}>
                      { item.id === 15 ? 
                        <div className="hex__front__soon clip ">
                          <img className="hex-img relative" src={item.image.src} alt={item.alt} />
                          <p className='text-center text-sm absolute bottom-6 left-4 smallMobile:bottom-7 smallMobile:left-6 md:left-3 md:bottom-6  text-white'>coming soon</p>
                        </div>
                      : 
                        <div className="hex__front clip">
                          <img className="hex-img" src={item.image.src} alt={item.alt} />
                        </div>
                      }
                    </ExternalLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
  
  export default Companies;