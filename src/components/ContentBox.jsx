import React, { useContext } from 'react'
import MyText from '../components/Text'
import { UserContext } from '../App';


function ContentBox(props) {
  const {setColor,setText,setIcon,setPage}=useContext(UserContext)

  const handleChange=()=>{
    setColor(props.textColor)
    setText(props.text)
    setIcon(props.image)
    setPage(props.pageNo)
  }

  // const text = props.text
  return (
    <div className=' contentBox col-12 col-md-6 p-3 btn border-0 ' onClick={handleChange} >

      <div className={`card contentBox_card  w-100 h-100 ${'menu_'+props.textColor}`}>
        <div className={`contentBox_card_img my-3 fa-3x ${props.textColor}`}>
          {/* {props.children} */}
          {props.image()}
        </div>
        <div className='contentBox_card_heading'>
          <MyText textColor={props.textColor} textSize={'1.5rem'} className="fw-bolder">{props.text}</MyText>
          {/* {text} */}
        </div>
      </div>
    </div>
  )
}

export default ContentBox