import React from 'react'

function NotificationsPopup() {
  return (
    <div className='login-pop-up w-80 h-[500px] shadow-2xl shadow-gray-500 rounded-lg'>
    <div className="cursor-pointer bg-white  p-6 w-[100%] h-[100%] flex flex-col gap-2 text-gray-600">
        <div className='flex gap-4 justify-center'>
            <div className='bg-gray-100 p-2 rounded-full text-xs text-gray-400 hover:text-gray-700'>Notifications</div>
            <div className='bg-gray-100 p-2 rounded-full text-xs text-gray-400 hover:text-gray-700'>Activities</div>
        </div>
    </div>
  </div>
  )
}

export default NotificationsPopup
