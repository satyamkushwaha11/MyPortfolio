import React, { useContext, useState } from 'react'
import MyText from '../components/Text'
import { UserContext } from '../App';



function MyPortfolioPage() {
  const { color, text, handelCancelPage } = useContext(UserContext)
  const [tabSelected, setTabSelected] = useState(1)

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
          Projects
        </div>
        <div className={`bg-${color} mb-3`} style={{ width: "2rem", height: "5px", borderRadius: "5px" }} />
        <div className='card bg-darkBule   p-3'>
          <div className=''>
            <div className='my-3'>
              <button className='btn border-success m-2 bg-text-green text-light'>
                All Project
              </button>
              <button className='btn border-success m-2 text-light'>
                Web Project
              </button>
              <button className='btn border-success m-2 text-light'>
                Mobile Project
              </button>
              <button className='btn border-success m-2 text-light'>
                Blockchain
              </button>
            </div>
            <hr className='text-light' />
            <div>
              <h3>Comming Soon......</h3>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPortfolioPage