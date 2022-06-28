import React, {useState} from "react";
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
  
    const bSmall = useMediaQuery('(max-width:450px)')
    const breakGrid = useMediaQuery('(max-width:600px)')
    const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
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
        //console.log('test', event.target);
        // recaptchaRef.current.execute();
        let gResponse = document.getElementById('g-recaptcha-response')
        console.log(gResponse.value)
        if (gResponse.value){
            emailjs.sendForm('service_d1x8ss7', 'template_mcf8zsn', event.target, 'ZTQJioF16AnG3aZEk')
            .then((result) => {
                console.log(result.text);
                // gaEventTracker('contact_form_submitted')
            }, (error) => {
                console.log(error.text);
            });
            setSubmitted(true)
            setEmail('')
            setFirstName('')
            setLastName('')
            setOrg('')
            setMessage('')
        } else {
            alert('RECAPTCHA required')
        }
        
      }

      function resetForm(event) {
        event.preventDefault();
        setEmail('')
        setFirstName('')
        setLastName('')
        setOrg('')
        setMessage('')
      }

    return (
        <div className="contact flex flex-col items-center my-4" id="contact">
            <div className="text__center mt-10 mb-3">
                <h2 className='font-light text-gray-600 pb-clr m-2 mt-9 text-4xl' style={{ fontFamily: 'Montserrat' }}>Contact Us</h2>
            </div>

        <Paper elevation={6} className="contact-box bg-gray-100 w-11/12 md:w-9/12 lg:w-1/2 rounded-lg">
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
                    <label htmlFor="EMAIL_ADDRESS" className='mb-0'>Email*</label>
                    <input
                      id="insightly_EMAIL_ADDRESS"
                      name="email"
                      type="text"
                      value={email} 
                      onChange={handleEmailChange}
                      className='p-2 rounded-lg'
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className='my-3 flex flex-col'>
                    <label htmlFor="FIRST_NAME" className='mb-0'>First Name*</label>
                    <input
                      id="insightly_FIRST_NAME"
                      name="firstName"
                      type="text"
                      value={firstName} 
                      onChange={handleFirstChange}
                      className='p-2 rounded-lg'
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className='my-3 flex flex-col'>
                    <label htmlFor="LAST_NAME" className='mb-0'>Last Name*</label>
                    <input
                      id="insightly_LAST_NAME"
                      name="lastName"
                      type="text"
                      value={lastName} 
                      onChange={handleLastChange}
                      autoComplete="off"
                      className='p-2 rounded-lg'
                      required
                    />
                  </div>

                  <div className='my-2 flex flex-col'>
                    <label htmlFor="ORGANISATION_NAME" className='whitespace-nowrap mb-0'>Organization Name*</label>
                    <input
                      id="insightly_ORGANISATION_NAME"
                      name="org"
                      type="text"
                      value={org} 
                      onChange={handleOrgChange}
                      autoComplete="off"
                      className='p-2 rounded-lg'
                      required
                    />
                  </div>
                </div>
                <div className={`${breakGrid ? '' : 'w-7/12'}`}>
                  <div className='my-2 mx-4 flex flex-col'>
                    <label htmlFor="Message__c" className='mb-0'>Message*</label>
                    <textarea
                      id="insightly_Message"
                      name="message"
                      type="text"
                      rows={8}
                      value={message} 
                      onChange={handleMessageChange}
                      className='p-2 rounded-lg'
                      autoComplete="off"
                      required
                    />
                  </div>
                  {/* Does this reference somewhere?  */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      top: "-9999px",
                    }}
                  >
                    <label htmlFor="insightly_additional_field">Comments</label>
                    <input
                      type="text"
                      id="insightly_additional_field"
                      name="insightly_additional_field"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              
              {/* recaptcha block 
              <div className='my-3 max-w-2xl'>
                <div className="g-recaptcha" data-sitekey={ sitekey } data-size={!bSmall ? 'normal' : 'compact' }></div>
              </div>
              */}

              <ReCAPTCHA
                sitekey={sitekey}
                onChange={handleSubmit}
                className='m-4'
                />
              
              <div className='flex-col content-center w-full'>
                <div className='flex justify-center'>
                  <button
                    className="btn m-2 bg-blue-400 hover:bg-blue-500 text-white transform duration-500 hover:ease px-2 py-1 rounded-lg w-32 "
                    type="submit"
                  >
                    Submit
                  </button>
                  <button
                    className="btn m-2 bg-blue-400 hover:bg-blue-500 text-white transform duration-500 hover:ease py-1 rounded-lg w-32"  
                    onClick={resetForm}
                  >
                    Reset
                  </button>

                </div>
                
                { !submitted ?
                  <p className='text-center mt-2 text-sm'>*required field</p>
                  :
                  <p className='text-center text-green-700 mt-2 text-lg bg-green-200 rounded-lg p-1'>Thank you. Your message as been submitted. We will get back to you very soon.</p>
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
