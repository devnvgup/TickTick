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
import HomeIcon from '@mui/icons-material/Home';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import FeedbackIcon from '@mui/icons-material/Feedback';
import NotificationsPopup from './NotificationsPopup';
import { useEffect, useRef, useState } from 'react';


function LoginSidebar() {
  const [active, setActive] = useState(1)
  const [openLoginPopUp, setopenLoginPopUp] = useState(false)
  const [openQuestionMarkPopup, setOpenQuestionMarkPopup] = useState(false)
  const [openNotiPopup, setOpenNotiPopup] = useState(false)
  const loginPopupRef = useRef<HTMLDivElement | null>(null);
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const qsMarkPopupRef = useRef<HTMLDivElement | null>(null);
  const qsIconRef = useRef<HTMLDivElement | null>(null);
  const notiIconRef = useRef<HTMLDivElement | null>(null);
  const notiPopUpRef = useRef<HTMLDivElement | null>(null);




  const handleClickOutside = (event: MouseEvent) => {
    if (avatarRef.current && !avatarRef.current.contains(event.target as Node)) {
      setopenLoginPopUp(false);
    }
    if (qsIconRef.current && !qsIconRef.current.contains(event.target as Node)) {
      setOpenQuestionMarkPopup(false);
    }
    if (notiIconRef.current && !notiIconRef.current.contains(event.target as Node)
      && notiPopUpRef.current && !notiPopUpRef.current.contains(event.target as Node)) {
       setOpenNotiPopup(false)
    }
  };

  useEffect(() => {
    if (openLoginPopUp || openQuestionMarkPopup || openNotiPopup) {
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openLoginPopUp, openQuestionMarkPopup, openNotiPopup]);

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
          <div ref={avatarRef} className="avatar online flex justify-center static" onClick={(() => setopenLoginPopUp(!openLoginPopUp))}>
            <div className="w-8  my-4">
              <img src="https://profile-photo.s3.amazonaws.com/files/avatar/6292/MTI1ODU4MjIxZnc1OG50MTU=/avatar.png?v=755ac148c4e9aedb2ad71074c3bedc02" alt="Avatar" className="rounded-sm" />
            </div>
            {openLoginPopUp && <div ref={loginPopupRef} className='login-pop-up absolute top-12 left-0 w-44 h-200 shadow-2xl shadow-gray-500 rounded-lg'>
              <div className="cursor-pointer bg-white shadow-lg p-6 rounded-lg flex flex-col gap-2 text-gray-600">
                <div><SettingsIcon /> Settings</div>
                <div><AccessTimeIcon /> Statistics</div>
                <div><WorkspacePremiumIcon /> Premium</div>
                <div><ExitToAppIcon /> Sign Out</div>
              </div>
            </div>}
          </div>
          <div className="flex flex-col items-center space-y-4">
            {icons.map(({ id, Icon }) => (
              <Icon
                key={id}
                className={`cursor-pointer ${active === id ? "active-color" : "text-gray-400 hover:text-gray-700"
                  }`}
                onClick={() => setActive(id)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-5">
        <div className='flex flex-col gap-3'>
          <div className='flex justify-center '>
            <SyncIcon className="text-gray-400 hover:text-gray-700" />
          </div>
          <div ref={notiIconRef} className='flex justify-center static' onClick={() => setOpenNotiPopup(!openNotiPopup)}>
            <NotificationsIcon className="text-gray-400 hover:text-gray-700" />
          </div>
          {openNotiPopup && <div ref={notiPopUpRef} className='absolute left-10 bottom-12'>
            <NotificationsPopup />
          </div>}
          <div ref={qsIconRef} className='flex justify-center static' onClick={() => setOpenQuestionMarkPopup(!openQuestionMarkPopup)}>
            <QuestionMarkIcon className="text-gray-400 hover:text-gray-700" />
            {openQuestionMarkPopup && <div ref={qsMarkPopupRef} className='login-pop-up absolute bottom-5 left-10 w-44 h-200 shadow-2xl shadow-gray-500 rounded-lg'>
              <div className="cursor-pointer bg-white shadow-lg p-6 rounded-lg flex flex-col gap-2 text-gray-600">
                <div><HomeIcon /> Home</div>
                <div><KeyboardIcon /> Shortcuts</div>
                <div><HelpCenterIcon /> Help Center</div>
                <div><FeedbackIcon /> Feedback</div>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>

  )
}

export default LoginSidebar
