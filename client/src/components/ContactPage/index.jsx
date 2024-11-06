import React from 'react';
// import '../../styles/Contactpage.css';
import '../../styles/ContactpageB.css';
import locationImg from '../../images/location.png';
import callImg from '../../images/call.png';
import mailImg from '../../images/mail.png';
import faceb from '../../images/faceb.png';
import insta from '../../images/insta.png';
import twitt from '../../images/twitt.png';
import pinter from '../../images/pinter.png';
import linked from '../../images/linked.png';



const ContactPage = () => {
  return (
    <>
    <div className='topdiv' ></div>
    <section className='section-div'>
        <div className='container' >
            <div className='contactInfo'>
                <div>
                    <h2>Contact Info</h2>
                    <ul className='info' >
                        <li>
                            <span><img src={locationImg} alt=''/></span>
                            <span>36 Redworth Terrace 2 <br/>
                            Lekki, Lagos <br/>
                            100001</span>
                        </li>
                        <li>
                            <span><img src={mailImg} alt=''/></span>
                            <span>emglobal@gmail.com</span>
                        </li>
                        <li>
                            <span><img src={callImg} alt=''/></span>
                            <span>813-516-2344</span>
                        </li>
                    </ul>
                </div>
                <ul className='soc-links' > 
                    <li><a href='/'><img src={faceb} alt=''/></a></li>
                    <li><a href='/'><img src={twitt}  alt='' /></a></li>
                    <li><a href='/'><img src={insta}  alt='' /></a></li>
                    <li><a href='/'><img src={pinter}  alt='' /></a></li>
                    <li><a href='/'><img src={linked}  alt='' /></a></li>
                </ul>
            </div>

            <div className='contactForm' >
                <h2>Send a Message</h2>
                <div className='formBox' >
                    <div className='inputBox w50' >
                        <input type='text'  required />
                        <span>First Name</span>
                    </div>
                    <div className='inputBox w50' >
                        <input type='text'  required />
                        <span>Last Name</span>
                    </div>
                    <div className='inputBox w50' >
                        <input type='email'  required />
                        <span>Email Address</span>
                    </div>
                    <div className='inputBox w50' >
                        <input type='number'  required />
                        <span>Mobile Number</span>
                    </div>
                    <div className='inputBox w100' >
                        <textarea required ></textarea> 
                        <span>Write your message here...</span>
                    </div>
                    <div className='inputBox w100' >
                        <input type='submit' value='Send' />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContactPage;