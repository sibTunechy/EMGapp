import React, {useEffect} from 'react';
import  '../../styles/Welcome.css';
import { useNavigate } from 'react-router-dom';

// class TopDiv extends React.Component {
//   render() {
//     const topstyle = {
//       backgroundColor: 
//     }
//   }
// }


const Welcome = () => {
  let navigate = useNavigate()
  
  
  const userTest = localStorage.getItem("profile")
 const data =JSON.parse (userTest)
//  console.log(userTest.result);
 const nname = data.result.name
 
  useEffect(()=>{
    if(!userTest){
    navigate('/auth')
    };

  })

  const topstyle = {
    backgroundColor: 'black',
    height: '150px',
    width: '100%'
  }

  const container = {
    backgroundColor: 'green',
    height: '90vh'
  }
  
  return (
    <>  
        <div style={topstyle} ></div>
        <div className='welcome-container' style={container} >
            <h1>Welcome {nname}</h1>
        </div>
    </>
  )
}

export default Welcome;