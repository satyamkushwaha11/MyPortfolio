
import React, { useState } from 'react'
import { useEffect } from 'react'
import data from '../asset/myServices.json';

const MyServices = () => {
    const [myServicesList, setMyServicesList] = useState()
    useEffect(() => {
        setMyServicesList(data)
    }, [])

    return (
        <div className='d-flex justify-content-between flex-wrap w-100'>
            {
                myServicesList && myServicesList.length > 0 && myServicesList.map((item, index) => (

                    <div className="serviceBox">
                        <div className='service_title'>
                            {item?.serviceName||"Frontend Developer"}
                        </div>
                        <div className=''>
                            <div className="service_image_box p-1">
                                <img src={`/images/${item?.servicePoster ||'front-end_development.webp'}`} alt="" className='service_image' />
                            </div>
                            <div className='service_description'>
                                {item?.serviceDescription || ''}
                            </div>
                        </div>
                    </div>
                ))
            }
         

        </div>
    )
}


export default MyServices;