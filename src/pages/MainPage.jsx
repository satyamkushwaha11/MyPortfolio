import React from 'react'
import ContentBox from '../components/ContentBox'
import {
  AboutMeIcon,
  MyResumeIcon,
  MyPortfolioIcon,
  ContactMeIcon
} from "../components/Icons"

const cardList = [
  {
    image: AboutMeIcon,
    text: "About Me",
    color:"text-orange"
  },
  {
    image: MyResumeIcon,
    text: "My Resume",
    color:"text-purpul"
  },
  {
    image: MyPortfolioIcon,
    text: "My Portfolio",
    color:"text-green"
  },
  {
    image: ContactMeIcon,
    text: "Contact Me",
    color:"text-dark-yellow"
  },
]

function MainPage() {
  return (
    <div className='mainPage_contianer w-100 h-100'>
      <div className='mx-3  mainPageHeader' >
        <div className='mainPageHeader_heading'>
          <div>
            I'M
            <span className='text-red'> SATYAM KUSHWAHA</span>
          </div>
        </div>
        <div className='bottom-heading-wrapper'>  
          <div className='static-text  mx-2'>As a </div>
          <ul class="dynamic-texts">
            <li><span>Web Developer</span></li>
            <li><span>MERN Stack</span></li>
          </ul>
        </div>

      </div>
      <div className='mx-3  mainPage_containt'>
        <div className='d-flex flex-wrap'>
          {
            cardList.map((item, index) => (
              <ContentBox key={index} image={() => <item.image />} text={item.text} textColor={item.color} />

            ))
          }
        </div>


      </div>
    </div>
  )
}

export default MainPage