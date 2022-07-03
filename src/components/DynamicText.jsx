import React from 'react'

function DynamicText() {
  return (
    <div className='bottom-heading-wrapper'>  
          <div className='static-text  mx-2'>As a </div>
          <ul class="dynamic-texts">
            <li><span>Web Developer</span></li>
            <li><span>MERN Stack</span></li>
          </ul>
        </div>
  )
}

export default DynamicText