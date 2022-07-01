import React from 'react';
// import '../../styles/Contactpage.css';
import '../../styles/ContactpageB.css';

const ContactPage = () => {
  return (
    <>
    <div className='topdiv'>

    </div>
    <div className='wrapper-body'>
        <div className='wrapper'>
            <div className='contact-form'>
                <div className='input-fields'>
                    <input type='text' class='input' placeholder='Name' />
                    <input type='text' class='input' placeholder='Email Address' />
                    <input type='text' class='input' placeholder='Phone' />
                    <input type='text' class='input' placeholder='Subject' />
                </div>
                <div className='message'>
                    <textarea placeholder='Message' ></textarea>
                    <div className='btn'>Send</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ContactPage;