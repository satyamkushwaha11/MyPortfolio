import React, { useContext } from 'react'
import MyText from '../components/Text'
import { UserContext } from '../App';
import MyImage from '../components/MyImage';

const myDetails = [
  {
    key: "First Name",
    value: "Satyam"
  },
  {
    key: "Last Name",
    value: "kushwaha"
  },
  {
    key: "Phone",
    value: "+91-9625110686"
  },
  {
    key: "Email",
    value: "satyamkushwaha1101@gmail.com"
  },
  {
    key: "Date of Birth",
    value: "11 August 2001"
  },
  {
    key: "Address",
    value: "Noida sec-31 ,G.B Nagar UP"
  },
  {
    key: "Nationality",
    value: "India"
  },
  {
    key: "Language",
    value: "English,Hindi"
  },

]

function AboutMe() {
  const { color, text, handelCancelPage } = useContext(UserContext)

  return (
    <div className='h-100  mx-4'>

      <div className='position-absolute cancelLogoContainer'>
        <i className={"close-button fas fa-times-circle fa-3x cancelLogo "} onClick={handelCancelPage} />
      </div>
      <div className='mx-3  mainPageHeader' >

        <div className='mainPageHeader_heading'>
          <MyText textColor={color} className="fw-bolder">{text}</MyText>
        </div>
      </div>
      <div>
        <div className='mb-2'>
          <span style={{ fontSize: "1.2rem" }}>
            Personal Info
          </span>
        </div>
        {/* <div className='text-red'>
          <i className="fas fa-horizontal-rule"></i>
        </div> */}
        <div className={`bg-${color} `} style={{ width: "2rem", height: "5px", borderRadius: "5px" }} />
        <br />
        <div className='card bg-darkBule px-3 py-4'>
          <div className='w-100 h-100 d-md-none ' style={{ border: `10px solid ${color}`, borderRadius: "8px" }}>

            <MyImage style={{
              outline: `4px solid ${color}`,
              borderRadius: "8px"
            }} />
          </div>
          <br />
          <div className='col-12 col-md-10'>
            I am a MERN Stack Web Developer from Noida-UP,India. I am very passionate and dedicated to my work. I have 5 years more work experience. And enjoy working in a team or individual.          </div>
          <div className='col-10 d-flex flex-md-row flex-wrap flex-column mt-3'>
            {
              myDetails.map((item, index) => (
                <>
                  <div className='col-md-6 col-12 d-flex align-items-center my-2'>
                    <i className='fas fa-angle-double-right text-red'></i>
                    <div className='ps-3'>
                      <span className=''>
                        <span className='me-2'>{item.key}</span>
                        <span className=''>-</span>
                        <span className='ms-2 text-dull'>{item.value}</span>
                      </span>
                    </div>
                  </div>
                </>
              ))
            }
          </div>
          <div>
            {[1, 2, 4, 2].map((item, index) => (
              <></>
            ))}
          </div>
        </div>
      </div>
      <br />

      <div>
        <div className='mb-2'>
          <span style={{ fontSize: "1.2rem" }}>
            Personal Info
          </span>
        </div>

        <div className={`bg-${color} `} style={{ width: "2rem", height: "5px", borderRadius: "5px" }} />
        <br />
        <div className='card bg-darkBule px-3 py-4'>
          <div className='w-100 h-100 d-md-none ' style={{ border: `10px solid ${color}`, borderRadius: "8px" }}>

            <MyImage style={{
              outline: `4px solid ${color}`,
              borderRadius: "8px"
            }} />
          </div>
          <br />
          <div className='col-12 col-md-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit pariatur saepe architecto, tempora placeat est illo perspiciatis culpa nihil. Repudiandae suscipit quis atque maiores ex dolor hic illum nemo voluptates!
          </div>
          <div className='col-10 d-flex flex-md-row flex-column mt-3'>
            <div className='col-md-6 col-12'>
              sssssss
            </div>
            <div className='col-md-6 col-12'>
              lllllll
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe