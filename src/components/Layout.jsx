import React from 'react'
import MyImage from './MyImage'
import SideBar from './SideBar'


function Layout(props) {
    return (
        <div className='d-flex  no-gutters wrapper '>
            <div className='col-12 col-lg-8 d-flex left-wrapper'>
                <div className='sideBar col-1 '>

                    <SideBar />
                </div>
                <div className='col col-md-11'>
                    {props.children}
                </div>

            </div>

            <div className='right-wrapper col-lg-4 d-sm-none d-md-block'>

                <MyImage />
            </div>

        </div>
    )
}

export default Layout