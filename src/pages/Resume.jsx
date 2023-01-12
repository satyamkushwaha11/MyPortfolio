import React, { useContext } from 'react'
import { UserContext } from '../App';
import MyText from '../components/Text';


function Resume() {
  const { color, text, handelCancelPage } = useContext(UserContext)

  return (
    <div className='h-100 px-3 position-relative '>
      <div className='position-absolute cancelLogoContainer'>
        <i className={"close-button fas fa-times-circle fa-3x cancelLogo "} onClick={handelCancelPage} />
      </div>
      <div className='mx-3  mainPageHeader' >
        <div className='mainPageHeader_heading'>
          <MyText textColor={color} className="fw-bolder">{text}</MyText>
        </div>
      </div>
      <div>
        <div className='mb-3' style={{ fontSize: "23px" }}>
          Skills
        </div>
        <div className={`bg-${color} mb-3`} style={{ width: "2rem", height: "5px", borderRadius: "5px" }} />
        <div className='card bg-darkBule'>
          ssd
        </div>
      </div>
      
    </div>
  )
}

export default Resume