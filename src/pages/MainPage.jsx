import React from 'react'
import ContentBox from '../components/ContentBox'

function MainPage() {
  return (
    <div className='mainPage_contianer w-100 h-100'>
      <div className='mx-3  mainPageHeader' >
        <div className='mainPageHeader_heading'>
          <h1>
            I'M 
            <span> SATYAM KUSHWAHA</span>
          </h1>
        </div>
        <div class="heading_intro">
          <div class="static-txt">I'm a</div>
          <ul class="dynamic-txts">
            <li><span>YouTuber</span></li>
            <li><span>Designer</span></li>
          </ul>
        </div>
      </div>
      <div className='mx-3  mainPage_containt'>
        containf
      </div>
    </div>
  )
}

export default MainPage