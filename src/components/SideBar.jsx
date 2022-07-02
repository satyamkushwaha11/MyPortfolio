import React from 'react'
import MyText from './Text'

function SideBar(props) {
  return (

    < >

      <div className='sideBar_logo_container'>
        <i className="fas fa-globe sideBar_logo"></i>
      </div>
      <div className='sideBar_text_container'>
        <div className='sideBar_text'>
          {/* <div>

           HELLOW <span>WORLD</span>
          </div> */}
          <MyText textColor={'text-red'} textSize={'1.2rem'}>HELLO WORLD</MyText>
        </div>
      </div>

    </>

  )
}

export default SideBar