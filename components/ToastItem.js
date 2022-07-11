import React from 'react'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ToastItem() {
    return (
        <div className='position-absolute fixed bottom-10 right-20 w-full z-50'>
            <div
                aria-live="polite"
                aria-atomic="true"
                className="position-relative h-full"
                style={{ minHeight: '240px', zIndex:'10' }}
            >
                <ToastContainer className="p-3" position="bottom-start">
                <Toast>
                    <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                </Toast>
                </ToastContainer>
            </div>
        </div>
    )
}

export default ToastItem
