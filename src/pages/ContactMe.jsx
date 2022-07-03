import React, { useContext } from 'react'
import { UserContext } from '../App';
import MyText from '../components/Text';


function ContactMe() {
  const { color, text,handelCancelPage} = useContext(UserContext)
  return (
    <div className='h-100 position-relative '>
    <div className='position-absolute cancelLogoContainer'>
      <i className={"close-button fas fa-times-circle fa-3x cancelLogo "} onClick={handelCancelPage}/>
    </div>
    <div className='mx-3  mainPageHeader' >
      <div className='mainPageHeader_heading'>
        <MyText textColor={color} className="fw-bolder">{text}</MyText>
      </div>
    </div>
    <div>
      <div className='mb-3'>
        Personal Info
      </div>
      <div className='card bg-darkBule'>
        ssd
      </div>
    </div>
  </div>
  )
}

export default ContactMe