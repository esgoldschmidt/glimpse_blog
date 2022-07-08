import React, { useState, useEffect, useRef } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    useEffect(() => {
        nameEl.current.value = window.localStorage.getItem('name')
        emailEl.current.value = window.localStorage.getItem('email')
    }, [])

    const handleCommentSubmission = () => {
        setError(false);

        // desctructure value of provided inputs
        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current
        const { checked: storeData } = storeDataEl.current;

        if(!comment || !name || !email ){
            setError(true);
            return
        }
        
        // same as name:name, email:email etc.
        const commentObj = {
            name, email, comment, slug
        }

        if(storeData){
            window.localStorage.setItem('name', name)
            window.localStorage.setItem('email', email)
        } else {
            window.localStorage.removeItem('name', name)
            window.localStorage.removeItem('email', email)
        }

        submitComment(commentObj)
            .then((res) => {
                setShowSuccessMessage(true);
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 3000);
            })
    }

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-3 text-gray-500'>Leave A Comment</h3>
            <div className='grid grid-cols-1 gap-4 mb-4'>
                <textarea 
                    ref={commentEl} 
                    className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-78'
                    placeholder='Comment'
                    autocomplete="off"
                    name='comment'
                />
            </div>
            <div className='grid grid-cols-1 gap-4 mb-4 lg: grid-cols-2'>
                <input
                    type='text' ref={nameEl}
                    className='p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-78'
                    placeholder='Name'
                    autocomplete="off"
                    name='name'
                />
                <input
                    type='text' ref={emailEl}
                    className='p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-78'
                    placeholder='Email'
                    autocomplete="off"
                    name='email'
                />
            </div>
            <div className='grid grid-cols-1 gap-4 mb-4'>
               <div className='flex'>
                   <input 
                    ref={storeDataEl} 
                    type='checkbox' 
                    id='storeData' 
                    name='storeData' 
                    value='true'
                   />
                   <label className='text-gray-500 cursor-pointer ml-3' htmlFor='storeData'>Save my e-mail and name for future comments</label>
               </div> 
            </div>
            {error && <p className='text-xs text-red-500'>All fields required</p>}
            <div className='mt-8 flex justify-center'>
                <button 
                    type='button' 
                    onClick={handleCommentSubmission}
                    className='transition duration-500 ease hover:bg-sky-600 inline-block bg-glimpse-blue text-lg rounded-lg text-white px-6 py-2 cursor-pointer'
                    >
                    Post Comment
                </button>
                {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment submitted for review</span>}
            </div>
        </div>
    )
}

export default CommentsForm
