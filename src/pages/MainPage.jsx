import React, { useContext } from 'react'
import ContentBox from '../components/ContentBox'
import DynamicText from '../components/DynamicText'
import {
  AboutMeIcon,
  MyResumeIcon,
  MyPortfolioIcon,
  ContactMeIcon
} from "../components/Icons"
import MyText from '../components/Text'
import { UserContext } from '../App';

import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import MyPortfolioPage from './MyPortfolioPage'
import Resume from './Resume'

const cardList = [
  {
    image: AboutMeIcon,
    text: "About Me",
    color: "text-orange",
    pageNo: 1
  },
  {
    image: MyResumeIcon,
    text: "My Resume",
    color: "text-purpul",
    pageNo: 2
  },
  {
    image: MyPortfolioIcon,
    text: "My Portfolio",
    color: "text-green",
    pageNo: 3
  },
  // {
  //   image: ContactMeIcon,
  //   text: "Contact Me",
  //   color: "text-dark-yellow",
  //   pageNo: 4
  // },
  {
    image: ContactMeIcon,
    text: "Contact Me",
    color: "text-dark-yellow",
    pageNo: 4
  },
  
]

function MainPage() {
  const { color, page,} = useContext(UserContext)
  console.log(page, 'ljljjjjjjjjjjjjjjjj');

  const HomeContent = () => {
    return (
      <>
        <div className=' mainPageHeader' >
          <div className='mainPageHeader_heading'>
            <MyText textColor={color} className="fw-bolder">I'M SATYAM KUSHWAHA</MyText>
          </div>
          <DynamicText />
        </div>
        <div className='  mainPage_containt'>
          <div className='d-flex flex-wrap'>
            {
              cardList.map((item, index) => (
                <ContentBox key={index} image={() => <item.image className=' ' />} text={item.text} textColor={item.color} pageNo={item.pageNo} />
              ))
            }
          </div>
        </div>
      </>)
  }



  return (
    <div className='mainPage_contianer w-100 h-100 '>
      {(() => {
        switch (page) {
          case 0:
            return <HomeContent />
          case 1:
            return <AboutMe />
          case 2:
            return <Resume />
          case 3:
            return <MyPortfolioPage />
          case 4:
            return <ContactMe />
          default:
            break;
        }
      })()}

    </div>
  )
}

export default MainPage

