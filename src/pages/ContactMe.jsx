import React, { useContext } from 'react'
import { UserContext } from '../App';
import MyText from '../components/Text';

const personalInfo = {
  Address: ["Noida,UP", <i class="fa-solid fa-location-dot "></i>],
  Phone: ["9625110686", <i class="fa-solid fa-mobile-screen-button"></i>],
  Email: ["satyamkushwaha1101@gmail.com", <i class="fas fa-envelope " />],
  Website: ["http://www.satyamkushwaha.netlify.com", <i className={"fas fa-globe  "}></i>
  ],

}

function ContactMe() {
  const { color, text, handelCancelPage } = useContext(UserContext)
  return (
    <div className='h-100 mx-auto' style={{ width: "90%" }}>
      <div className={'position-absolute cancelLogoContainer'}>
        <i className={"close-button fas fa-times-circle fa-3x cancelLogo "} onClick={handelCancelPage} />
      </div>
      <div className=' mainPageHeader' >
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
        <div className={`bg-${color} mb-3`} style={{ width: "2rem", height: "5px", borderRadius: "5px" }} />

        <div className='card bg-darkBule  py-1 '>
          <div className='col-12 d-flex flex-md-row flex-wrap flex-column  mx-3'>
            {
              Object.keys(personalInfo)?.map((item, index) => (
                <div className=" col-md-6 col-12 my-3">
                  <div className="mb-2 text-red">{item}</div>
                  <div className="d-flex align-items-center">
                    <span className="text-light">
                      {personalInfo[item][1]}
                    </span>
                    <span className={`ms-3 text-secondary wrapTheLine wrapTheLineInfo`}>{personalInfo[item][0]}</span>
                  </div>
                </div>
              ))
            }
            <div className=" col-md-6 col-12 my-3">
              <div className="mb-2 text-red">Social Media</div>
              <div className="d-flex  align-items-center ">
                <div className='socialIcon'>
                  <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div className='socialIcon'>
                  <i class="fa-brands fa-twitter"></i>
                </div>
                <div className='socialIcon'>
                  <i class="fa-brands fa-linkedin-in"></i>
                </div>
                <div className='socialIcon'>
                  <i class="fa-brands fa-github"></i>
                </div>
                <div className='socialIcon'>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div>
        <div className='mb-2'>
          <span style={{ fontSize: "1.2rem" }}>
            Contact Form
          </span>
        </div>
        <div className={`bg-${color} mb-3`} style={{ width: "2rem", height: "5px", borderRadius: "5px" }} />

        <div className='card bg-darkBule  p-3  '>
          <div>
            <p>Want to chat?Send me a message!</p>
          </div>
          <div className='col-12'>
            <div className='d-md-flex  my-2'>
              <div className="col-md-6 col-12 mb-2">
                <input type="text" className="col-12 borderRouded12 p-3" placeholder=' Name' />
              </div>
              <div className="col-md-6 col-12">
                <input type="text" className="col-12 borderRouded12 p-3" placeholder=' Email' />
              </div>
            </div>
            <div className=" mb-md-3 mb-2">
              <input type="text" className='col-12 borderRouded12 p-3' placeholder=' Subject' />
            </div>
            <div>
              <textarea placeholder=' Massage' type="text" className='col-12 borderRouded12 p-3' style={{ height: "120px" }} />
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <button  className='btn border-light col-md-4 col-12'>
              <span className="mx-2 text-light"><i class="fa-solid fa-paper-plane"></i></span>
              <span className='text-light'>Send</span>
              <span className='text-red'>Message</span>
            </button>
          </div>
          <br />
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default ContactMe