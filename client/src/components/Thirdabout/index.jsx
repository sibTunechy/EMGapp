import React from 'react';
import '../../styles/Thirdabout.css';
// import logo from '../../images/priv.jpg';

const Thirdabout = () => {
  return (
    <>  
        <div className='about-div'>
            <h1>About Us</h1>
        </div>
        <div className='row1-container'>
            <div className='box box-down cyan'>
                <h2>Our Mission</h2>
                <p>We create personalized, customer-centric experiences, the right technology and people with our
                    solutions deployed across various channels to suit the demography of the target market and analyze
                    the data from Our two-way engagement with the market for strategic use of clients.
                </p>
                <img src='https://assets.codepen.io/2301174/icon-team-builder.svg' alt=''/>
            </div>


            <div className='box red'>
                <h2>Excellence</h2>
                <p>Consistently delivering exceptional results Every employee's heart beat with the phrase of <em>Excellence</em>.
                    To provide measureable value to ur stakholders, we go above and beyond the ordinary.
                </p>
                <img src='https://assets.codepen.io/2301174/icon-karma.svg' alt=''/>
            </div>

            <div className='box box-down blue'>
                <h2>Enterprise</h2>
                <p>Having the will and commitment to go any length to complete a task. What differentaites us in a competetitive business at
                    atmosphere is our individual and collective duty to own our goals and lead creative projects leading us to achieving them.
                </p>
                <img src='https://assets.codepen.io/2301174/icon-supervisor.svg' alt=''/>
            </div>
        </div>

        <div className='row2-container'>
            <div className='box orange'>
                <h2>Execution</h2>
                <p>A strong drive to see things through to completion as quickly, efficiently, and effectively as possible. We believe in putting time
                    to see projects through from start to finish in order to get exceptional results.
                </p>
                <img src='https://assets.codepen.io/2301174/icon-calculator.svg' alt='' />
            </div>
        
        </div> 
    </>
  )
}

export default Thirdabout;