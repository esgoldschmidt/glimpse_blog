import React, { useState } from "react";
import useAnalyticsEventTracker from './useAnalyticsEventTracker';
import emailjs from 'emailjs-com';
import { Grid, Paper, useMediaQuery, Button } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
    const [email, setEmail] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [org, setOrg] = useState();
    const [message, setMessage] = useState();
    const [submitted, setSubmitted] = useState(false);
    const gaEventTracker = useAnalyticsEventTracker('Contact us');
    const [detailsToSend, setDetailsToSend] = useState()
    const bSmall = useMediaQuery('(max-width:450px)')
    const breakGrid = useMediaQuery('(max-width:600px)')
    const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY_INVISIBLE
    const recaptchaRef = React.createRef();

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
    
      function handleMessageChange(event){
        setMessage(event.target.value)
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        setDetailsToSend(event.target)
        recaptchaRef.current.execute();
      }

      function resetForm(event) {
        event.preventDefault();
        setEmail('')
        setFirstName('')
        setLastName('')
        setOrg('')
        setMessage('')
      }

      const onReCAPTCHAChange = (captchaCode) => {
        // If the reCAPTCHA code is null or undefined indicating that
        // the reCAPTCHA was expired then return early
        if(!captchaCode) {
          return;
        }
        // Else reCAPTCHA was executed successfully so proceed sending message
        emailjs.sendForm('service_d1x8ss7', 'template_sls03f4', detailsToSend, 'ZTQJioF16AnG3aZEk')
          .then((result) => {
              console.log(result.text);
              gaEventTracker('contact_form_submitted')
          }, (error) => {
              console.log(error.text); 
          });
          setSubmitted(true)
          setEmail('')
          setPhone('')
          setFirstName('')
          setLastName('')
          setOrg('')
          setSelectedInterest(<p dir='rtl'>מתעניין ב:</p>)
          setMessage('')
        // Reset the reCAPTCHA so that it can be executed again if user 
        // submits another email.
        recaptchaRef.current.reset();
      }

    return (
        <div className="contact flex flex-col items-center my-4" id="contact">
            <div className="text__center mt-10 mb-3">
                <h2 className='font-light text-gray-600 pb-clr m-2 mt-9 text-4xl' style={{ fontFamily: 'Montserrat' }}>Contact Us</h2>
            </div>

        <Paper elevation={6} className="contact-box bg-gray-100 w-full md:w-9/12 lg:w-1/2 rounded-lg" style={{ backgroundColor: '#f2f2f2' }}>
            <div className="contact-form">
            <form
                name="insightly_form"
                data-form-id="8602"
                id="contact-form"
                encType="text/plain"
                onSubmit={ handleSubmit }
            >
            <div className='flex flex-col items-center content-center my-4'>
              <div className={`flex justify-around w-full ${breakGrid ? 'flex-col' : ''}`}>
                <div className={`mx-4 ${breakGrid ? '' : 'w-1/3'} `} id='userInfoBlock'>
                  <div className='my-3 flex flex-col'>
                    <input
                      id="insightly_EMAIL_ADDRESS"
                      name="email"
                      type="text"
                      value={email} 
                      placeholder='Email*'
                      onChange={handleEmailChange}
                      className='p-2 rounded-lg'
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className='my-3 flex flex-col'>
                    <input
                      id="insightly_FIRST_NAME"
                      name="firstName"
                      type="text"
                      value={firstName} 
                      placeholder='First Name*'
                      onChange={handleFirstChange}
                      className='p-2 rounded-lg'
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className='my-3 flex flex-col'>
                    <input
                      id="insightly_LAST_NAME"
                      name="lastName"
                      type="text"
                      value={lastName} 
                      placeholder='Last Name*'
                      onChange={handleLastChange}
                      autoComplete="off"
                      className='p-2 rounded-lg'
                      required
                    />
                  </div>

                  <div className='my-2 flex flex-col'>
                    <input
                      id="insightly_ORGANISATION_NAME"
                      name="org"
                      type="text"
                      value={org} 
                      placeholder='Organization*'
                      onChange={handleOrgChange}
                      autoComplete="off"
                      className='p-2 rounded-lg'
                      required
                    />
                  </div>
                </div>
                <div className={`${breakGrid ? '' : 'w-7/12'}`}>
                  <div className='my-3 mx-4 flex flex-col'>
                    <textarea
                      id="insightly_Message"
                      name="message"
                      type="text"
                      rows={8}
                      value={message} 
                      placeholder='Message*'
                      onChange={handleMessageChange}
                      className='p-2 rounded-lg'
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={sitekey}
                onChange={onReCAPTCHAChange}
                className='z-50'
              />
              
              <div className='flex-col content-center w-full'>
                <div className='flex justify-center gap-6'>
                  <button
                    className="btn m-2 bg-zinc-400 hover:bg-zinc-500 text-white transform duration-500 hover:ease py-1 rounded-lg w-32"  
                    onClick={resetForm}
                  >
                    Reset
                  </button>
                  <button
                    className="btn m-2 bg-glimpse-blue hover:bg-sky-600 text-white transform duration-500 hover:ease px-2 py-1 rounded-lg w-32 "
                    type="submit"
                  >
                    Submit
                  </button>
                  

                </div>
                
                { !submitted ?
                  <p className='text-center mt-2 text-sm'>*required field</p>
                  :
                  <p className='text-center text-green-700 mt-2 text-lg bg-green-200 rounded-lg p-1'>Thank you. Your message has been submitted. We will get back to you very soon.</p>
                }
                
              </div>
              
            </div>
          </form>
        </div>
      </Paper>

      {/* <br/>
      <div style='position:absolute; left:-9999px; top: -9999px;'>
        <label for='insightly_additional_field'>Comments</label>
        <input type='text' id='insightly_additional_field' name='insightly_additional_field'></div>
        <button class='g-recaptcha' data-sitekey='6LciOVEfAAAAAOlGAcZpavQTSBrW0j0mpeiqno_A' data-callback='onSubmit' data-action='submit'>Submit</button></form> */}
    </div>
    )
}

export default ContactForm
