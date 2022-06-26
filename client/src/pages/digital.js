import React from 'react';
// import Digital from '../components/DigitalPage';
// import { digital } from '../components/DigitalPage/Data';
import Discover from '../components/Discover';
import { homeObjThree } from '../components/Discover/Data';

const Pagedigital = () => {
    return (
        <>
            {/* <Digital {...digital}/> */}
            <Discover {...homeObjThree}/>
        </>
    )
}

export default Pagedigital;