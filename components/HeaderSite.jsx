import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, AccordionSummary, IconButton, Toolbar, MenuItem, MenuList, Divider, ClickAwayListener, Grow, Paper, Popper, useMediaQuery, SwipeableDrawer, List, ListItem, ListItemButton, ListItemText, Grid, Accordion, AccordionDetails, useScrollTrigger, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { Toolbar } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { Link as SmoothLink } from 'react-scroll';
import { ExternalLink } from 'react-external-link';
import logo from "../assets/images/glimpseblue.svg";
import { useRouter } from 'next/router'
import { BiLinkExternal } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';


function HeaderSite() {
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery('(max-width:1213px)')
    const [openDrawer, setOpenDrawer] = useState(false);
    const [value, setValue] = useState(0);
    const [onHoverIndex, setOnHoverIndex] = React.useState(1);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const router = useRouter()
    const location = router //.pathname
    //const [scrollY, setScrollY] = useState(0);
    const [clientWindowHeight, setClientWindowHeight] = useState("");
    const [isShrunk, setShrunk] = useState(false);
    const [logoHeight, setLogoHeight] = useState("7rem");
    const [logoWidth, setLogoWidth] = useState("11.66rem");
    const [animateHeader, setAnimateHeader] = useState(false);
    // const gaEventTracker = useAnalyticsEventTracker('Header');
    const [inProp, setInProp] = useState(false);

    useEffect(() => {
      const listener = () => {
        if (window.scrollY > 50) {
          <CSSTransition
            // in={showMessage}
            timeout={300}
            //classNames="alert"
            unmountOnExit
            // onEnter={() => setShowButton(false)}
            //onExited={() => setShowButton(true)}
          >

          </CSSTransition>
          setAnimateHeader(true);
        } else setAnimateHeader(false);
      };
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("scroll", listener);
      };
    }, []);

    const handleClick = (e, index) => {
      setAnchorEl(e.currentTarget);
      setOnHoverIndex(index);
      setOpenMenu(true);
    };

    const menuOptions = React.useMemo(
      () => [
        {
          name: "Glimpse Blog",
          typeLink: Link,
          link: "/news/glimpse-blog",
          activeIndex: 3,
          selectedIndex: 0,
        },
  
        {
          name: "Glimpse Insider",
          typeLink: Link,
          link: "/news/glimpse-insider",
          activeIndex: 3,
          selectedIndex: 1,
        },
  
        {
          name: "Press Coverage",
          typeLink: Link,
          link: "/news/press-coverage",
          activeIndex: 3,
          selectedIndex: 2,
        },
  
        {
          name: "Press Releases",
          typeLink: Link,
          link: "/news/press-releases",
          activeIndex: 3,
          selectedIndex: 3,
        },
      ],
      []
    );
  
    const routes = React.useMemo(
      () => [
        {
          name: "Home",
          typeLink: Link,
          link: "/",
          activeIndex: 0,
          //class: classes.tab,
          disable: false,
          target: "_self",
          ariaOwns: anchorEl ? "simple-menu-ind" : undefined,
          ariaPopup: anchorEl ? "true" : undefined,
          mouseOver: handleClick,
          subRoute: null,
        },
        {
          name: "About Glimpse",
          typeLink: Link,
          link: "/about-glimpse",
          activeIndex: 1,
          //class: classes.tab,
          disable: false,
          target: "_self",
          ariaOwns: anchorEl ? "simple-menu-ind" : undefined,
          ariaPopup: anchorEl ? "true" : undefined,
          mouseOver: handleClick,
          subRoute: null,
        },
        {
          name: "Industry Solutions",
          typeLink: Link,
          link: "/industry-solutions/",
          activeIndex: 2,
          disable: true,
          // class: classes.tab,
          selectedIndex: 0,
          ariaOwns: anchorEl ? "simple-menu-ind" : undefined,
          ariaPopup: anchorEl ? "true" : undefined,
          mouseOver: handleClick,
          subRoute: [
            {
              name: "AEC",
              typeLink: Link,
              link: "/industry-solutions/architecture-engineering-construction",
              target: "_self",
              disable: false,
              activeIndex: 2,
              selectedIndex: 0,
            },
  
            {
              name: "K-12 Education",
              typeLink: Link,
              link: "/industry-solutions/k12-education",
              target: "_self",
              activeIndex: 2,
              disable: false,
              selectedIndex: 1,
            },
  
            {
              name: "Higher Education",
              typeLink: Link,
              link: "/industry-solutions/higher-education",
              target: "_self",
              activeIndex: 2,
              disable: false,
              selectedIndex: 2,
            },
  
            {
              name: "Food & Hospitality",
              typeLink: Link,
              link: "/industry-solutions/food-hospitality",
              target: "_self",
              activeIndex: 2,
              disable: false,
              selectedIndex: 3,
            },
  
            {
              name: "Professional Training",
              typeLink: Link,
              link: "/industry-solutions/professional-training",
              target: "_self",
              activeIndex: 2,
              disable: false,
              selectedIndex: 4,
            },
  
            {
              name: "Data Visualization",
              typeLink: Link,
              link: "/industry-solutions/finance-data-visualization",
              target: "_self",
              activeIndex: 2,
              disable: false,
              selectedIndex: 5,
            },
  
            {
              name: "Healthcare",
              typeLink: Link,
              link: "/industry-solutions/healthcare",
              target: "_self",
              activeIndex: 2,
              disable: false,
              selectedIndex: 6,
            },
  
            {
              name: "Marketing",
              typeLink: Link,
              link: "/industry-solutions/marketing",
              target: "_self",
              activeIndex: 2,
              disable: false,
              selectedIndex: 7,
            },
  
            {
              name: "Events & Meetings",
              typeLink: Link,
              link: "/industry-solutions/events-and-meetings",
              target: "_self",
              activeIndex: 2,
              disable: false,
              selectedIndex: 8,
            },
          ],
        },
        {
          name: "News",
          typeLink: Link,
          link: "/news/press-releases",
          activeIndex: 3,
          //class: classes.tab,
          target: "_self",
          disable: true,
          ariaOwns: anchorEl ? "simple-menu-ind" : undefined,
          ariaPopup: anchorEl ? "true" : undefined,
          mouseOver: handleClick,
          subRoute: [
            {
              name: "Press Releases",
              typeLink: Link,
              link: "/news/press-releases",
              target: "_self",
              activeIndex: 3,
              disable: false,
              selectedIndex: 0,
            },
            {
              name: "Glimpse Blog",
              typeLink: Link,
              link: "/news/glimpse-blog",
              target: "_self",
              activeIndex: 3,
              selectedIndex: 1,
              disable: false,
            },
            //{
            //  name: "Glimpse Insider",
            //  typeLink: Link,
            //  link: "/news/glimpse-insider",
            //  activeIndex: 3,
            //  selectedIndex: 2,
            //},
            {
              name: "Press Coverage",
              typeLink: Link,
              link: "/news/press-coverage",
              target: "_self",
              activeIndex: 3,
              selectedIndex: 2,
              disable: false,
            },
          ],
        },
        {
          name: "Our Work",
          typeLink: Link,
          link: "/our-work",
          target: "_self",
          activeIndex: 4,
          disable: false,
          //class: classes.tab,
          ariaOwns: anchorEl ? "simple-menu-ind" : undefined,
          ariaPopup: anchorEl ? "true" : undefined,
          mouseOver: handleClick,
          subRoute: null,
        },
        {
          name: "Our Companies",
          typeLink: Link,
          link: "/our-companies",
          target: "_self",
          activeIndex: 5,
          disable: false,
          //class: classes.tab,
          ariaOwns: anchorEl ? "simple-menu-ind" : undefined,
          ariaPopup: anchorEl ? "true" : undefined,
          mouseOver: handleClick,
          subRoute: null,
        },
        {
          name: (
            <div className='flex'>
              Investor Relations
              <div class='whitespace-nowrap flex items-center'>
                
              </div>
            </div>
          ),
          target: "_blank",
          typeLink: ExternalLink,
          link: "https://ir.theglimpsegroup.com/",
          activeIndex: 6,
          //class: classes.tab,
          disable: false,
          ariaOwns: anchorEl ? "simple-menu-ind" : undefined,
          ariaPopup: anchorEl ? "true" : undefined,
          mouseOver: handleClick,
          subRoute: null,
        },
      ],
      [anchorEl]
    );
  
    useEffect(() => {
      [...menuOptions, ...routes].forEach(route => {
        switch (location.pathname) {
          case `${route.link}`:
            if (value !== route.activeIndex) {
              setValue(route.activeIndex);
              if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
                setSelectedIndex(route.selectedIndex);
              }
            }
            break;
          default:
            break;
        }
      });
    }, [value, menuOptions, selectedIndex, routes]);

    //<BiLinkExternal className='ml-1' />

    {/*
    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        // just trigger this so that the initial state 
        // is updated as soon as the component is mounted
        // related: https://stackoverflow.com/a/63408216
        handleScroll();

        
      
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
     
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
    */}

    function ElevationScroll(props) {
        const { children } = props;
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
        });

        return React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }

    const topBar = (
        <div className='w-10/12 flex justify-center bg-transparent'>
          <nav className="navbar navbar-expand-lg bg-transparent p-0 w-full" style={{ padding: '0px'}}>
            <div className="collapse navbar-collapse w-full" id="navbarSupportedContent">
              <ul className="flex w-full justify-center p-0 text-gray-700">
                <li className={`nav-item ${location.pathname === "/" || location.pathname === "/home" ? "active" : ""} transition duration-500 transform hover:-translate-y-1 font-light`} style={{ fontFamily: 'Montserrat' }}>
                  <a className="nav-link py-2.5 pr-2.5 text-gray-700" href="/">Home</a>
                </li>
                <li className={`nav-item ${location.pathname === "/about-glimpse" ? "active" : ""} transition duration-500 transform hover:-translate-y-1 font-light`} style={{ fontFamily: 'Montserrat' }}>
                  <a className="nav-link p-2.5 text-gray-700" href="/about-glimpse">About Glimpse</a>
                </li>
                <li className={`nav-item dropdown ${location.pathname === "/industry-solutions/architecture-engineering-construction" || 
                location.pathname === "/industry-solutions/k12-education" || 
                location.pathname === "/industry-solutions/higher-education" || 
                location.pathname === "/industry-solutions/food-hospitality" || 
                location.pathname === "/industry-solutions/professional-training" ||
                location.pathname === "/industry-solutions/finance-data-visualization" ||
                location.pathname === "/industry-solutions/healthcare" ||
                location.pathname === "/industry-solutions/marketing" ||
                location.pathname === "/industry-solutions/events-and-meetings" ? "active" : ""} transition duration-500 transform hover:-translate-y-1 font-light`} style={{ fontFamily: 'Montserrat' }}>
                  <a className="nav-link p-2.5 dropdown-toggle text-gray-700" id="solutions" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Industry Solutions
                  </a>
                  <div className="dropdown-menu" aria-labelledby="solutions" style={{ width: '200px' }}>
                    {/* <div className="dropdown-divider"></div> */}
                    <a className={`dropdown-item hover:bg-blue-300 text-sm ${location.pathname === "/industry-solutions/architecture-engineering-construction" ? "active" : ""}`} href="/industry-solutions/architecture-engineering-construction">AEC</a>
                    <a className={`dropdown-item hover:bg-blue-300 text-sm ${location.pathname === "/industry-solutions/k12-education" ? "active" : ""}`} href="/industry-solutions/k12-education">K-12 Education</a>
                    <a className={`dropdown-item hover:bg-blue-300 text-sm ${location.pathname === "/industry-solutions/higher-education" ? "active" : ""}`} href="/industry-solutions/higher-education">Higher Education</a>
                    <a className={`dropdown-item hover:bg-blue-300 text-sm ${location.pathname === "/industry-solutions/food-hospitality" ? "active" : ""}`} href="/industry-solutions/food-hospitality">Food & Hospitality</a>
                    <a className={`dropdown-item hover:bg-blue-300 text-sm ${location.pathname === "/industry-solutions/professional-training" ? "active" : ""}`} href="/industry-solutions/professional-training">Professional Training</a>
                    <a className={`dropdown-item hover:bg-blue-300 text-sm ${location.pathname === "/industry-solutions/finance-data-visualization" ? "active" : ""}`} href="/industry-solutions/finance-data-visualization">Data Visualization</a>
                    <a className={`dropdown-item hover:bg-blue-300 text-sm ${location.pathname === "/industry-solutions/healthcare" ? "active" : ""}`} href="/industry-solutions/healthcare">Healthcare</a>
                    <a className={`dropdown-item hover:bg-blue-300 text-sm ${location.pathname === "/industry-solutions/marketing" ? "active" : ""}`} href="/industry-solutions/marketing">Marketing</a>
                    <a className={`dropdown-item hover:bg-blue-300 text-sm ${location.pathname === "/industry-solutions/events-and-meetings" ? "active" : ""}`} href="/industry-solutions/events-and-meetings">Events & Meetings</a>
                  </div>
                </li>
                <li className={`nav-item dropdown ${location.pathname === "/news/press-releases" || location.pathname === "/news/glimpse-blog" || location.pathname === "/news/press-coverage" ? "active" : ""} transition duration-500 transform hover:-translate-y-1 font-light`} style={{ fontFamily: 'Montserrat' }}>
                  <a className="nav-link p-2.5 dropdown-toggle text-gray-700" href="#" id="news" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    News
                  </a>
                  <div className="dropdown-menu" aria-labelledby="news">
                    <a className={`dropdown-item hover:bg-blue-300 text-sm ${location.pathname === "/news/press-releases" ? "active" : ""}`} href="/news/press-releases">Press Releases</a>
                    <a className={`dropdown-item hover:bg-blue-300 text-sm ${location.pathname === "/news/glimpse-blog" ? "active" : ""}`} href="/news/glimpse-blog">Glimpse Blog</a>
                    <a className={`dropdown-item hover:bg-blue-300 text-sm ${location.pathname === "/news/press-coverage" ? "active" : ""}`} href="/news/press-coverage">Press Coverage</a>
                  </div>
                </li>
                <li className={`nav-item ${location.pathname === "/our-work" ? "active" : ""} transition duration-500 transform hover:-translate-y-1 font-light`} style={{ fontFamily: 'Montserrat' }}>
                  <a className="nav-link p-2.5 text-gray-700" href="/our-work">Our Work</a>
                </li>
                <li className={`nav-item ${location.pathname === "/our-companies" ? "active" : ""} transition duration-500 transform hover:-translate-y-1 font-light`} style={{ fontFamily: 'Montserrat' }}>
                  <a className="nav-link p-2.5 text-gray-700" href="/our-companies">Our Companies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pl-2.5 py-2.5 transition duration-500 transform hover:-translate-y-1 font-light text-gray-700" style={{ fontFamily: 'Montserrat' }} href="https://ir.theglimpsegroup.com/" target='_blank'>
                  <div className='flex'>
                    Investor Relations
                    <div className='whitespace-nowrap flex items-center'>
                      
                    </div>
                  </div>
                  </a>
                </li>
                
              </ul>
            </div>
          </nav>
        </div>
      )

    //const drawer = (
    //  <div>test</div>
    //)

      const drawer = (
          
       
        <React.Fragment>
          <SwipeableDrawer
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            onOpen={() => setOpenDrawer(true)}
            // className={{paper: classes.drawer}}
          >
            <div 
            //className={classes.toolbarMargin}    
            />
            <List
              disablePadding
              //className={[classes.listWidth, classes.hideBorder]}
            >
            
              {routes.map((route, index) =>
                route.subRoute !== null ? (
                  <div>
                  <Divider />
                  <Accordion
                    elevation={0}
                    //divider
                    //className={classes.hideBorder}
                    key={index}
                  >
                    <AccordionSummary 
                      expandIcon={<ExpandMoreIcon
                      divider
                       />}>
                      {route.name}
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container direction="column">
                        {route.subRoute.map((route, index) => (
                          <Grid item key={index}>
                            <ListItemButton
                              //divider
                              //button
                              //component={route.typeLink}
                              //to={route.link}
                              href={route.link}
                              target={route.target}
                              selected={value === route.activeIndex}
                              //classes={{ selected: classes.drawerItemSelected }}
                              onClick={() => {
                                setOpenDrawer(false);
                                setSelectedIndex(route.selectedIndex);
                              }}
                            >
                              <ListItemText
                                //className={classes.drawerItem}
                                disableTypography
                              >
                                {route.name}
                              </ListItemText>
                            </ListItemButton>
                          </Grid>
                        ))}
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                  </div>
                ) : (
                  <div>
                  <Divider />
                  <ListItemButton
                    //divider
                    key={index}
                    //button
                    //component={route.typeLink}
                    //to={route.link}
                    href={route.link}
                    target={route.target}
                    selected={value === route.activeIndex}
                    //classes={{ selected: classes.drawerItemSelected }}
                    onClick={() => {
                      setOpenDrawer(false);
                      setSelectedIndex(route.selectedIndex);
                    }}
                  >
                    <ListItemText 
                        //className={classes.drawerItem} 
                        disableTypography>
                      {route.name}
                    </ListItemText>
                  </ListItemButton>
                  </div>
                )
              )}
              <Divider />
              <ListItemButton
                onClick={() => {
                  setOpenDrawer(false);
                  setValue(5);
                }}
                divider
                //button
                smooth="true"
                //durantion={900}
                //component={SmoothLink}
                //classes={{
                //  root: classes.drawerItemContact,
                //  selected: classes.drawerItemSelected,
                //}}
                href="#contact"
                // selected={value === 5}
              >
                <ListItemText
                  //className={classes.mContact}
                  //component={SmoothLink}
                  href="#contact"
                  // onClick={()=>gaEventTracker('contact_drawer')}
                  disableTypography
                >
                  Contact Us
                </ListItemText>
              </ListItemButton>
            </List>
          </SwipeableDrawer>
          <IconButton
            //className={classes.drawerIconContainer, "focus:outline-none focus:ring-2 focus:ring-blue-100 focus:ring-opacity-10"}
            onClick={() => setOpenDrawer(!openDrawer)}
            disableRipple
          >
            <MenuIcon 
              style={{ height: '56px', width: '56px' }}
            />
          </IconButton>
        </React.Fragment>
      );  

    return (
        <div>
          {/*
            <header
              className={`w-full backdrop-filter backdrop-blur-lg bg-white/50 fixed z-10 trasition ease-in-out duration-500 mx-0 ${
                animateHeader && "shadow-xl"
              }`}
            >
              <div className="w-screen ">
                <div
                  className={`flex w-screen py-3 ${
                    animateHeader && "py-3"
                  } mx-auto items-center justify-between trasition ease-in-out duration-500`}
                >
                  <Link href="/">
                    <div className={`h-28 transition ease-in-out duration-500 cursor-pointer ${animateHeader && "h-16" }` } style={{ backgroundImage: `url(${logo.src})` }}>
                      
                    </div>
                      
                  </Link>
                    
                    {matches ? drawer : topBar }
                    
                    {!matches && 
                        <Button
                        variant="contained"
                        className="whitespace-nowrap bg-blue-500 pt-2 pb-2 pl-3 pr-3 text-white transition duration-500 transform hover:-translate-y-1 "
                        style={{ fontFamily: 'Montserrat', backgroundColor: 'rgb(35 130 218)'}}
                        href="#contact"
                        // onClick={()=>gaEventTracker('contact_head')}
                        >
                        Contact Us
                        </Button>
                    }

                    <Popper
                        open={openMenu}
                        anchorEl={anchorEl}
                        role={undefined}
                        transition
                        disablePortal
                    >
                        {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                            transformOrigin:
                                placement === "bottom" ? "center top" : "center bottom",
                            borderRadius: "5px",
                            }}
                        >
                            <Paper className={{ root: classes.menu }} elevation={0}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                onMouseOver={() => setOpenMenu(true)}
                                onMouseLeave={handleClose}
                                autoFocusItem={false}
                                id="simple-menu"
                                disablePadding
                                onKeyDown={handleListKeyDown}
                                >
                                {routes[onHoverIndex].subRoute?.map((option, index) => (
                                    <MenuItem
                                    key={`${index}${option}`}
                                    component={option.typeLink}
                                    smooth="true"
                                    to={option.link}
                                    href={option.eLink}
                                    target="_self"
                                    classes={{ root: classes.menuItem }}
                                    onClick={event => {
                                        handleMenuItemClick(event, index);
                                        setValue(option.activeIndex);
                                        handleClose();
                                    }}
                                    selected={
                                        index === selectedIndex && value === option.activeIndex
                                    }
                                    >
                                    {option.name}
                                    </MenuItem>
                                ))}
                                </MenuList>
                            </ClickAwayListener>
                            </Paper>
                        </Grow>
                        )}
                    </Popper>
                </div>
              </div>
            </header>
            */}
            <ElevationScroll className='p-0 m-2'>
                <AppBar position="fixed" color="default"  id='header'>
                <div className={`w-full backdrop-filter backdrop-blur-lg bg-white/70 fixed z-999 `} style={{ padding: "0 1em 0 0" }}>
                  <div
                    className={`flex w-screen py-0 mx-auto items-center justify-between`}
                  >
                    <div className='w-52'>
                      <a href="/">
                        <div className={`transition transform duration-1000 ease-in-out ${animateHeader ? "h-16" : "h-28"}`}>
                          <img alt="company logo" id='logo' className={`h-full`} src={logo.src} />
                        </div>
                      </a>
                    </div>
                    
                    
                    
                    {matches ? drawer : topBar }
                    
                    {!matches && 
                        <Button
                        variant="contained"
                        className={`whitespace-nowrap bg-blue-500 pt-2 pb-2 pl-3 pr-3 text-white transition duration-700 transform hover:-translate-y-1 mr-4`}
                        style={{ fontFamily: 'Montserrat', 
                                  backgroundColor: 'rgb(35 130 218)',
                                  margin: '0 1.5em 0 0' 
                                  }}
                        href="#contact"
                        // onClick={()=>gaEventTracker('contact_head')}
                        >
                        Contact Us
                        </Button>
                    }

                    <Popper
                        open={openMenu}
                        anchorEl={anchorEl}
                        role={undefined}
                        transition
                        disablePortal
                    >
                        {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                            transformOrigin:
                                placement === "bottom" ? "center top" : "center bottom",
                            borderRadius: "5px",
                            }}
                        >
                            <Paper className={{ root: classes.menu }} elevation={0}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                onMouseOver={() => setOpenMenu(true)}
                                onMouseLeave={handleClose}
                                autoFocusItem={false}
                                id="simple-menu"
                                disablePadding
                                onKeyDown={handleListKeyDown}
                                >
                                {routes[onHoverIndex].subRoute?.map((option, index) => (
                                    <MenuItem
                                    key={`${index}${option}`}
                                    component={option.typeLink}
                                    smooth="true"
                                    to={option.link}
                                    href={option.eLink}
                                    target="_self"
                                    classes={{ root: classes.menuItem }}
                                    onClick={event => {
                                        handleMenuItemClick(event, index);
                                        setValue(option.activeIndex);
                                        handleClose();
                                    }}
                                    selected={
                                        index === selectedIndex && value === option.activeIndex
                                    }
                                    >
                                    {option.name}
                                    </MenuItem>
                                ))}
                                </MenuList>
                            </ClickAwayListener>
                            </Paper>
                        </Grow>
                        )}
                    </Popper>
                    </div>
                </div>
                </AppBar>
            </ElevationScroll>
      
            <div 
                //className={classes.toolbarMargin}
            />
          </div>
    )
}

export default HeaderSite
