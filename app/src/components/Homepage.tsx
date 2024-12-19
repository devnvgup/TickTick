import React from 'react'
import LoginSidebar from './LoginSidebar'
import SideBar from './SideBar'
import Task from './Task'
import TaskDetail from './TaskDetail'

function Homepage() {
  return (
    <>
       <div className="grid grid-cols-[0.22fr,1fr,1.5fr,2fr]">
        <div className='border-r-2 border-gray-200 h-screen'><LoginSidebar/></div>
        <div className='border-r-2 border-gray-200 h-screen'><SideBar/></div>
        <div className='border-r-2 border-gray-200 h-screen'><Task/></div>
        <div className='border-r-2 border-gray-200 h-screen'><TaskDetail/></div>
     </div>
    </>
  )
}

export default Homepage
