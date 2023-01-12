import React, { useContext, useLayoutEffect, useState } from 'react'
import MyText from '../components/Text'
import { UserContext } from '../App';
import projectsData from "../asset/projects.json";
import { useEffect } from 'react';


function MyPortfolioPage() {
  const { color, text, handelCancelPage } = useContext(UserContext)
  const [tabSelected, setTabSelected] = useState(1)
  const [projectTypes, setProjectTypes] = useState([])
  const [projectList, setProjectList] = useState()

  useEffect(() => {
    if (tabSelected === 1) {
      const data = projectsData.reduce((acc, item, index) => {
        return { projects: [...acc?.projects, ...item?.projects] };
      })
      setProjectList(data.projects)
    }
    else {
      const data = projectsData.filter((item, index) => index === ((tabSelected - 2)));
      setProjectList(data[0]?.projects)
    }
  }, [tabSelected])

  useLayoutEffect(() => {
    let a = ['All Project'];
    let data = projectsData.map((item, index) => item?.name)
    setProjectTypes([...a, ...data])
  }, [])

  // console.log(projectList,'uuuuuuuuu');


  return (
    <div className='h-100 px-3 position-relative '>
      <div className='position-absolute cancelLogoContainer'>
        <i className={"close-button fas fa-times-circle fa-3x cancelLogo "} onClick={handelCancelPage} />
      </div>
      <div className='mx-3  mainPageHeader' >
        <div className='mainPageHeader_heading'>
          <MyText textColor={color} className="fw-bolder">{text}</MyText>
        </div>
      </div>
      <div>
        <div className='mb-3' style={{ fontSize: "23px" }}>
          Projects
        </div>
        <div className={`bg-${color} mb-3`} style={{ width: "2rem", height: "5px", borderRadius: "5px" }} />
        <div className='card bg-darkBule   p-3'>
          <div className=''>
            <div className='my-3'>
              {
                projectTypes && projectTypes.length > 0 && projectTypes.map((item, index) => (
                  <button
                    key={index}
                    className={`btn border-success m-2   text-light ${index + 1 === tabSelected && "bg-text-green "}  projectTab`}
                    onClick={() => setTabSelected(index + 1)}
                  >
                    {item}
                  </button>
                ))
              }
            </div>
            <hr className='text-light' />
            <div className='d-flex-center  flex-column flex-md-row flex-wrap justify-content-between' >
              {projectList && projectList.length === 0 && <h3>Comming Soon......</h3>}
              {
                projectList && projectList.length > 0 && projectList.map((item, index) => (
                  <div key={index} className='card bg-black project-card   mb-4 '>
                    <div className='text-gree'>
                      <h5 className='fw-bolder py-1 px-3'>
                        <i className='fas fa-angle-double-right text-green mt-1 pe-2'></i>
                        {item.projectName}
                      </h5>
                      <div>
                        <img src={item?.projectImage} className=' projectImage ' alt="" />
                      </div>
                    </div>
                    <div className='d-flex '>
                      <a href={item?.projectGithubUrl ||"#"} rel="noreferrer"  target='_blank' className='projectCodebtn' >code <i className="fa-brands fa-github pt-1 text-green"></i></a>
                      <a href={item?.projectGithubUrl} rel="noreferrer" target='_blank' className='projectWebLinkBtn'>Demo</a>
                    </div>

                  </div>
                ))
              }
            </div>
            {

            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPortfolioPage