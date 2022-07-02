
// import React, { useContext } from 'react'
import MyImage from './MyImage'
import SideBar from './SideBar'
// import { UserContext } from '../App';


function Layout(props) {
    // const data = useContext(UserContext);
    
    return (
        <div className='d-flex  no-gutters wrapper '>
            <div className='col-12 col-lg-8 d-flex left-wrapper'>
                <div className='sideBar  '>
                    <SideBar sideBarlogo={props?.sideBarlogo} sideBarText={props?.sideBarText}/>
                </div>
                <div className='col left-wrapper-containt'>
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