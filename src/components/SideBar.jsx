import React from 'react'
// import Font

function SideBar(props) {
  return (

    < >

      <div className='sideBar_logo_container'>
      {/* <FontAwesomeIcon icon="fa-light fa-globe" /> */}
      <i className="fas fa-globe sideBar_logo"></i>
         {/* <img src={props.src || "/icons/internet.png"} alt='icon' className='sideBar_logo' /> */}
      </div>
      <div className='sideBar_text_container'>
        <div className='sideBar_text'>

        aler
        </div>
      </div>

    </>

  )
}

export default SideBar