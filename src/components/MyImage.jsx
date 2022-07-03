import React from 'react'

function MyImage(props) {

  return (
    <div id='profile-image-container' style={{...props.style}}>
      <img src="/images/satyam.png" alt="" />
    </div>
  )
}

export default MyImage