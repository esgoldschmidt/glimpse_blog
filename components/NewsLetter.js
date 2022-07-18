import React, { useState, useEffect } from 'react'
import { useMediaQuery } from "@mui/material";
import { useCookies } from "react-cookie"
import Modal from 'react-bootstrap/Modal';
import { addUser } from '../lib/add-user';
import { updateUser } from '../lib/update-user';
import { useForm } from "react-hook-form";

<<<<<<< HEAD
function NewsLetter( { users } ) {
=======
function NewsLetter() {
>>>>>>> development

    const [email, setEmail] = useState();
    const [firstName, setFirstName] = useState();
    const [submitted, setSubmitted] = useState(false);
    const breakGrid = useMediaQuery('(max-width:600px)')
    const [show, setShow] = useState(false);
    const [cookie, setCookie] = useCookies()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleEmailChange(event){
        setEmail(event.target.value.toLowerCase())
    }
    
      function handleFirstChange(event){
        setFirstName(event.target.value)
    }
<<<<<<< HEAD

    {/*
    const userResult = users.filter(e => e.EMAIL_ADDRESS === email);

    if (userResult.length > 0){
        console.log(userResult[0].CONTACT_ID)
        //updateUser(userResult[0].CONTACT_ID, firstName, lastName, email)
    } else {
        console.log('not in')
    }
    */}

    async function onSubmit() {
        // event.preventDefault();
=======

    async function onSubmit() {
>>>>>>> development
        
        await fetch(`/api/userEmail/${ watch('emailRHF')}`,{
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => typeof response !== 'undefined'
            ? fetch(`/api/user/${response.userID}`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                //make sure to serialize your JSON body
                body: JSON.stringify({
                    id: response.userID,
                    first: watch('firstRHF'),
                    email: watch('emailRHF')
                })
            })
            .then( (response) => { 
                setSubmitted(true)
                setEmail("")
                setFirstName("")
<<<<<<< HEAD
            })
            : fetch("/api/user", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                //make sure to serialize your JSON body
                body: JSON.stringify({
                    first: watch('firstRHF'),
                    email: watch('emailRHF')
                })
            })
            .then( (response) => { 
                setSubmitted(true)
                setEmail("")
                setFirstName("")
            })
        )
        {/*
        .then(userId => {
            if (userId.userID){
                // console.log(userResult[0].CONTACT_ID)
                setUserExists(true)
                fetch(`/api/user/${userId.userID}`, {
                    method: "PUT",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },

                    //make sure to serialize your JSON body
                    body: JSON.stringify({
                        id: userId.userID,
                        first: firstName,
                        last: lastName,
                        email: email
                    })
                })
                .then( (response) => { 
                    setSubmitted(true)
                    setEmail("")
                    setFirstName("")
                });
            }
            if (!userExists) {
                fetch("/api/user", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },

                    //make sure to serialize your JSON body
                    body: JSON.stringify({
                        first: firstName,
                        last: lastName,
                        email: email
                    })
                })
                .then( (response) => { 
                    setSubmitted(true)
                    setEmail("")
                    setFirstName("")
                });
            }
                
        })
        */}

        {/*
        if (userResult.length > 0){
            // console.log(userResult[0].CONTACT_ID)
            await fetch(`/api/user/${userResult[0].CONTACT_ID}`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                //make sure to serialize your JSON body
                body: JSON.stringify({
                    id: userResult[0].CONTACT_ID,
                    first: firstName,
                    last: lastName,
                    email: email
                })
            })
            .then( (response) => { 
                console.log('status', response)
            //do something awesome that makes the world a better place
            });
            //updateUser(userResult[0].CONTACT_ID, firstName, lastName, email)
        } else {
            await fetch("/api/user", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                //make sure to serialize your JSON body
                body: JSON.stringify({
                    first: firstName,
                    last: lastName,
                    email: email
                })
            })
            .then( (response) => { 
                console.log('status', response)
            //do something awesome that makes the world a better place
            });
            // addUser(firstName, lastName, email)
        }
        */}
=======
            })
            : fetch("/api/user", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                //make sure to serialize your JSON body
                body: JSON.stringify({
                    first: watch('firstRHF'),
                    email: watch('emailRHF')
                })
            })
            .then( (response) => { 
                setSubmitted(true)
                setEmail("")
                setFirstName("")
            })
        )
>>>>>>> development
        
      }
    
      useEffect(() => {
        if (!cookie.recentCookie) {
            setTimeout(function() {
                // check if within 30 days in session 
                setCookie("recentCookie", "recentlyVisited", {
                    path: "/",
                    maxAge: 2678400, // Expires after 30days
                    sameSite: true,
                })
                handleShow()
            }, 30000)
        }
    }, [])

    return (
        <div>
            
<<<<<<< HEAD
            <Modal show={show} onHide={handleClose} backdrop={false} size='sm' className='left-2 flex flex-col container-end justify-end' style={{ width: '330px', height: '300px', position:'fixed' }}>
                <Modal.Header className='px-0 pb-0'>
                    <Modal.Title className='text-center w-full text-xl z-10 text-glimpse-blue font-medium'>Glimpse Insider Newsletter</Modal.Title>
                    <button type="button" onClick={ handleClose } className="border border-gray-500 -m-2 text-gray-400 bg-zinc-100 hover:text-red-300 hover:bg-red-100 px-1.5 transform duration-700 ease-in-out text-sm top-0 rounded-full absolute right-0" data-bs-dismiss="modal" aria-label="Close">X</button>
=======
            <Modal show={show} onHide={handleClose} backdrop={false} size='sm' className='left-2 flex flex-col container-end justify-end pr-5' style={{ width: '300px', height: '300px', position:'fixed' }}>
                <Modal.Header className='px-0 pb-0'>
                    <Modal.Title className='text-center w-full text-xl z-10 text-glimpse-blue font-medium'>Newsletter Sign-up</Modal.Title>
                    <button type="button" onClick={ handleClose } className="border border-gray-500 sm:-m-2 text-gray-400 bg-zinc-100 hover:text-red-300 hover:bg-red-100 px-1.5 transform duration-700 ease-in-out text-sm top-0 rounded-md sm:rounded-full absolute right-0" data-bs-dismiss="modal" aria-label="Close">X</button>
>>>>>>> development
                </Modal.Header>
                <Modal.Body className='p-0'>
                    <div className='flex justify-center'>
                        <p className='mt-1 text-center text-gray-600 text-sm'>Cut through the noise with our monthly Glimpse Insider newsletter.</p>
                    </div>
                    <div className="contact-form ">
                        
                            <form
                                name="insightly_form"
                                data-form-id="8602"
                                id="news-form"
                                encType="text/plain"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className='flex flex-col items-center content-center my-1'>
                                { !submitted &&
                                    <div className={`flex justify-around w-full ${breakGrid ? 'flex-col' : ''}`}>
                                        <div className={`mx-4`} id='userInfoBlock'>
                                        <div className='my-1 flex flex justify-end items-center'>
                                            <input
                                            id="insightly_EMAIL_ADDRESS"
                                            name="email"
                                            type="text"
                                            value={ email } 
                                            placeholder='Email*'
                                            onChange={ handleEmailChange }
                                            className='p-2 rounded-lg w-64 bg-zinc-100 text-sm text-gray-500'
                                            autoComplete="off"
                                            {...register("emailRHF", { 
                                                required: true,
                                                pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]+$/,
                                                    message: "Invalid email address"
                                                }
                                            })}
<<<<<<< HEAD
                                            //required
=======
>>>>>>> development
                                            />
                                        </div>
                                        <p className='w-full text-center text-xs text-red-400'>{errors.emailRHF?.type === 'required' && "Email is required"}</p>
                                        {errors.emailRHF?.message && <p className='w-full text-center text-xs text-red-400'> {errors.emailRHF?.message} </p>}
                                        <div className='my-1 flex justify-end items-center'>
                                            <input
                                            id="insightly_FIRST_NAME"
                                            name="firstName"
                                            type="text"
                                            value={ firstName } 
                                            onChange={ handleFirstChange }
                                            placeholder='First Name*'
                                            className='p-2 text-sm rounded-lg w-64 bg-zinc-100 text-gray-500'  
                                            autoComplete="off"
                                            {...register("firstRHF", { 
                                                required: true,
                                                maxLength: {
                                                    value: 30,
                                                    message: 'First name has a maximum of 30 characters',
                                                }, 
                                                pattern: {
                                                    value: /^[a-z ,.'-]+$/i,
                                                    message: "Invalid first name"
                                                }
                                            })}
<<<<<<< HEAD
                                            //required
                                            />
                                        </div>
                                        <p className='w-full text-center text-xs text-red-400'>{errors.firstRHF?.type === 'required' && "Email is required"}</p>
=======
                                            />
                                        </div>
                                        <p className='w-full text-center text-xs text-red-400'>{errors.firstRHF?.type === 'required' && "First name is required"}</p>
>>>>>>> development
                                        {errors.firstRHF?.message && <p className='w-full text-center text-xs text-red-400'> {errors.firstRHF?.message} </p>}
                                        {/*
                                        <div className='my-1 flex justify-end items-center'>
                                            <input
                                            id="insightly_LAST_NAME"
                                            name="lastName"
                                            type="text"
                                            value={ lastName } 
                                            placeholder='Last Name*'
                                            onChange={ handleLastChange }
                                            autoComplete="off"
                                            className='p-1 rounded-lg w-64 bg-zinc-100'
                                            //required
                                            />
                                        </div>
                                        
                                        <div className='my-1 flex justify-end items-center'>
                                            <input
                                            id="insightly_ORGANISATION_NAME"
                                            name="org"
                                            type="text"
                                            value={ org } 
                                            placeholder='Organization*'
                                            onChange={ handleOrgChange }
                                            autoComplete="off"
                                            className='p-1 rounded-lg w-64 bg-zinc-100'
                                            //required
                                            />
                                        </div>
                                        */}
                                    </div>
                                    
                                </div>
                            }
                                <div className='flex-col content-center w-full'>
                                    { !submitted ?
                                    <p className='text-center text-xs text-gray-500'>*required field</p>
                                    :
                                    <p className='text-center text-green-700 text-lg bg-green-200 p-2 font-light text-base'>Thank you. You are signed up to receive Glimpse News.</p>
                                    }
                                    
                                </div>
                                
                                </div>
                            </form>
                       
                    </div>
                </Modal.Body>
                <Modal.Footer className='flex justify-center gap-1'>
                <button onClick={handleClose} className='rounded-md py-1 transition duration-700 ease-in-out bg-zinc-400 hover:bg-zinc-500 text-white w-28'>
                    Close
                </button>
                { !submitted &&
                    <button type="submit" form='news-form' className="rounded-md py-1 transition duration-700 ease-in-out bg-glimpse-blue hover:bg-sky-600 w-28 text-white">Sign Up!</button>
                }
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NewsLetter
