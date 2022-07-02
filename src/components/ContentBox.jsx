import React from 'react'
import MyText from '../components/Text'

function ContentBox(props) {
  console.log(props, 'oooooooooooooo');

  const text = props.text
  return (
    <div className=' contentBox col-12 col-md-6 p-3'>

      <div className='card contentBox_card  w-100 h-100'>
        <div className={`contentBox_card_img my-3 ${props.textColor}`}>
          {/* {props.children} */}
          {props.image()}
        </div>
        <div className='contentBox_card_heading'>
          <MyText textColor={props.textColor} textSize={'1.5rem'} className="fw-bolder">{text}</MyText>
          {/* {text} */}
        </div>
      </div>
    </div>
  )
}

export default ContentBox