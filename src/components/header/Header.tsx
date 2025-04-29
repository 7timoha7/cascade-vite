import logo from '../../assets/images/logo/logo.svg';
import './header.css'
import {useEffect, useState} from "react";

const Header = () => {

  const [fontSizeNav, setFontSizeNav] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setFontSizeNav(false);
      } else {
        setFontSizeNav(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 0,
    }}>

      <div>
        <ul style={{
          display: 'flex',
          gap: 16,
          listStyle: 'none',
          borderBottom: '1px solid #6F7682',
          paddingRight: '5px',
          paddingLeft: '20px',
          fontSize: fontSizeNav ? '12px' : '9px',
        }}>
          <li>
            <a className={'link-header'} href="#about-us">О НАС</a>
          </li>
          <li>
            <a className={'link-header'} href="#products">ПРОДУКЦИЯ</a>
          </li>
          <li>
            <a className={'link-header'} href="#contacts">КОНТАКТЫ</a>
          </li>
        </ul>
      </div>
      <a href="#" style={{margin: 0}}>
        <img style={{maxWidth: fontSizeNav ? '179px' : '120px'}} src={logo} alt="cascade.kg"/>
      </a>
    </div>
  );
};

export default Header;