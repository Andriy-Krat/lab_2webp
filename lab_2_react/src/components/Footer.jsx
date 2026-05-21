import { useEffect, useState } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState({ os: '', browser: '' });

  useEffect(() => {
    const platform = navigator.platform;
    const userAgent = navigator.userAgent;
    
    localStorage.setItem('user_os', platform);
    localStorage.setItem('user_browser', userAgent);

    setSysInfo({
      os: localStorage.getItem('user_os'),
      browser: localStorage.getItem('user_browser')
    });
  }, []);

  return (
    <footer className="mt-12 pt-6 border-t border-dashed border-[#7dd3fc]/40 text-sm text-white/70 text-center">
      <p>Системна інформація (з localStorage):</p>
      <p>ОС: <span className="text-[#7dd3fc]">{sysInfo.os}</span></p>
      <p className="break-words">Браузер: <span className="text-[#7dd3fc]">{sysInfo.browser}</span></p>
    </footer>
  );
}

export default Footer;