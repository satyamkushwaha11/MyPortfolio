import React, { useContext } from 'react'
import MyText from './Text'
import { UserContext } from '../App';
function SideBar(props) {
  const { color, text, icon } = useContext(UserContext)
  console.log(icon, 'dsadf');
  return (

    < >

      <div className='sideBar_logo_container'>
        {
          !icon ?
            <i className={"fas fa-globe sideBar_logo "+color}></i>
            :
           <span className={" sideBar_logo "+color}>{icon}</span> 
          
            // <></>
        }
      </div>
      <div className='sideBar_text_container'>
        <div className='sideBar_text'>
          <MyText textColor={color} textSize={'1.2rem'}>{text}</MyText>
        </div>
      </div>

    </>

  )
}

export default SideBar