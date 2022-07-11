import React, { useState, useEffect } from 'react'
import { useMediaQuery } from "@mui/material";
import { useCookies } from "react-cookie"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import axios from 'axios';
//import { getInsightlyUser } from '../services'

function NewsLetter() {
    const [email, setEmail] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [org, setOrg] = useState();
    const [submitted, setSubmitted] = useState(false);
    const breakGrid = useMediaQuery('(max-width:600px)')
    const [show, setShow] = useState(false);
    const [cookie, setCookie] = useCookies()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleEmailChange(event){
        setEmail(event.target.value)
    }
    
      function handleFirstChange(event){
        setFirstName(event.target.value)
    }
    
      function handleLastChange(event){
        setLastName(event.target.value)
    }
    
      function handleOrgChange(event){
        setOrg(event.target.value)
    }

    const test = {
        "EMAIL_ADDRESS" : "jeff.meisner@sector5digital.com"
    }

    {/*
    useEffect(() => {
        getInsightlyUser(test)
            .then((result) => {
                // setComments(result)
                console.log('get test', result)
            })
    },[])
    */}

    function handleSubmit(event) {
        event.preventDefault();
        //console.log('test', event.target);
        //axios.get('https://api.na1.insightly.com/v3.1/Contacts/Search?EMAIL_ADDRESS="jeff.meisner@sector5digital.com"', {
        //    headers: {
        //    'Authorization': 'Basic NjZmNzkxZWQtZjVkYS00YzE5LTgxODctNzExNTAzYTdjNjFkOg=='
        //  }}).then(response => {
        //    console.log(response);
        //    });

        
    
        // getInsightlyUser(test)

        {/*
        axios({
            method: "GET",
            url:"https://api.na1.insightly.com/v3.1/Contacts/Search?EMAIL_ADDRESS=jeff.meisner@sector5digital.com",
            //withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': true,
                'Authorization': "Basic NjZmNzkxZWQtZjVkYS00YzE5LTgxODctNzExNTAzYTdjNjFkOg==",
              },
            })
            .then((response) => {
                console.log('working', response)
            }).catch((error) => {
                if (error.response) {
                    console.log('error', error.response)
                }
            })
        */}
        
        setSubmitted(true)
        setEmail()
        setFirstName()
        setLastName()
        setOrg()
      }
    
      useEffect(() => {
        console.log('cookie', cookie.recentCookie)
        if (!cookie.recentCookie) {
            setTimeout(function() {
                // check if within 30 days in session 
                {/*
                setCookie("recentCookie", "recentlyVisited", {
                    path: "/",
                    maxAge: 2678400, // Expires after 30days
                    sameSite: true,
                })
                */}
                handleShow()
            }, 3000)
        }
    }, [])
      
    return (
        <div>
            
            <Modal show={show} onHide={handleClose} backdrop={false} size='sm' className='bottom-5 left-5 flex flex-col container-end justify-end' style={{ width: '300px', position:'fixed', height:'100vh', overflow:'hidden' }}>
                <Modal.Header>
                    <Modal.Title className='text-center w-full text-lg md:text-xl z-10'>Glimpse Insider Newsletter</Modal.Title>
                    <button type="button" onClick={ handleClose } className=" text-zinc-500  py-1 rounded-lg absolute right-3" data-bs-dismiss="modal" aria-label="Close">X</button>
                </Modal.Header>
                <Modal.Body className='p-0'>
                    <div className='flex justify-center'>
                        <p className='mt-3 text-center'>Keep up with the Glimpse Group! <br /> Sign up to receive our newsletter.</p>
                    </div>
                    
                <div className="contact-form ">
                    <form
                        name="insightly_form"
                        data-form-id="8602"
                        id="news-form"
                        encType="text/plain"
                        onSubmit={ handleSubmit }
                    >
                        <div className='flex flex-col items-center content-center my-2'>
                        <div className={`flex justify-around w-full ${breakGrid ? 'flex-col' : ''}`}>
                            <div className={`mx-4`} id='userInfoBlock'>
                            <div className='my-3 flex flex justify-end items-center'>
                                <input
                                id="insightly_EMAIL_ADDRESS"
                                name="email"
                                type="text"
                                value={ email } 
                                placeholder='Email*'
                                onChange={ handleEmailChange }
                                className='p-2 rounded-lg w-64 bg-zinc-100'
                                autoComplete="off"
                                //required
                                />
                            </div>

                            <div className='my-3 flex justify-end items-center'>
                                <input
                                id="insightly_FIRST_NAME"
                                name="firstName"
                                type="text"
                                value={ firstName } 
                                onChange={ handleFirstChange }
                                placeholder='First Name*'
                                className='p-2 rounded-lg w-64 bg-zinc-100' 
                                autoComplete="off"
                                //required
                                />
                            </div>

                            <div className='my-3 flex justify-end items-center'>
                                <input
                                id="insightly_LAST_NAME"
                                name="lastName"
                                type="text"
                                value={ lastName } 
                                placeholder='Last Name*'
                                onChange={ handleLastChange }
                                autoComplete="off"
                                className='p-2 rounded-lg w-64 bg-zinc-100'
                                //required
                                />
                            </div>

                            <div className='my-2 flex justify-end items-center'>
                                <input
                                id="insightly_ORGANISATION_NAME"
                                name="org"
                                type="text"
                                value={ org } 
                                placeholder='Organization*'
                                onChange={ handleOrgChange }
                                autoComplete="off"
                                className='p-2 rounded-lg w-64 bg-zinc-100'
                                //required
                                />
                            </div>
                            </div>
                            
                        </div>
                        
                        <div className='flex-col content-center w-full'>
                            { !submitted ?
                            <p className='text-center mt-2 text-sm'>*required field</p>
                            :
                            <p className='text-center text-green-700 mt-2 text-lg bg-green-200 p-2 font-light text-base'>Thank you. You are signed up to receive Glimpse News.</p>
                            }
                            
                        </div>
                        
                        </div>
                    </form>
                </div>
                </Modal.Body>
                <Modal.Footer className='flex justify-center gap-1 md:gap-4'>
                <button onClick={handleClose} className='btn bg-zinc-400 hover:bg-zinc-500 text-white w-28'>
                    Close
                </button>
                { !submitted &&
                    <button type="submit" form='news-form' className="btn bg-glimpse-blue hover:bg-sky-600 w-28 text-white">Sign Up!</button>
                }
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NewsLetter
