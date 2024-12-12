import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import SyncIcon from '@mui/icons-material/Sync';
import NotificationsIcon from '@mui/icons-material/Notifications';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SettingsIcon from '@mui/icons-material/Settings';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useEffect, useRef, useState } from 'react';


function LoginSidebar() {
  const [active, setActive] = useState(1)
  const [openPopUp, setOpenPopup] = useState(false)
  const popupRef = useRef<HTMLDivElement | null>(null);
  const avatarRef = useRef<HTMLDivElement | null>(null);


  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node) 
      && avatarRef.current && !avatarRef.current.contains(event.target as Node)) {  
      setOpenPopup(false); 
    }
  };

  useEffect(() => {
    if (openPopUp) {
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openPopUp]);

  const icons = [
    { id: 1, Icon: CheckBoxIcon },
    { id: 2, Icon: CalendarMonthIcon },
    { id: 3, Icon: AppsIcon },
    { id: 4, Icon: SearchIcon },
  ];
  return (
    <div className="flex flex-col h-screen justify-between mb-5">
      <div className="space-y-2">
        <div className='flex flex-col gap-3'>
          <div ref={avatarRef} className="avatar online flex justify-center static" onClick={(()=>setOpenPopup(!openPopUp))}>
            <div className="w-8  my-4">
              <img src="https://profile-photo.s3.amazonaws.com/files/avatar/6292/MTI1ODU4MjIxZnc1OG50MTU=/avatar.png?v=755ac148c4e9aedb2ad71074c3bedc02" alt="Avatar" className="rounded-sm" />
            </div>
            {openPopUp && <div ref={popupRef} className='login-pop-up absolute top-12 left-0 w-44 h-200 shadow-2xl shadow-gray-500 rounded-lg'>
              <div className="cursor-pointer bg-white shadow-lg p-6 rounded-lg flex flex-col gap-2 text-gray-600">
                <div><SettingsIcon /> Settings</div>
                <div><AccessTimeIcon /> Statistics</div>
                <div><WorkspacePremiumIcon/> Premium</div>
                <div><ExitToAppIcon/> Sign Out</div>
              </div>
            </div>}
          </div>
          <div className="flex flex-col items-center space-y-4">
            {icons.map(({ id, Icon }) => (
              <Icon
                key={id}
                className={`cursor-pointer ${active === id ? "active-color" : "text-gray-400"
                  }`}
                onClick={() => setActive(id)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-5">
        <div className='flex flex-col gap-3'>
          <div className='flex justify-center'>
            <SyncIcon className="text-gray-400" />
          </div>
          <div className='flex justify-center'>
            <NotificationsIcon className="text-gray-400" />
          </div>
          <div className='flex justify-center'>
            <QuestionMarkIcon className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default LoginSidebar
