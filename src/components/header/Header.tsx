import logo from '../../assets/images/logo/logo.svg';
import './header.css'

const Header = () => {
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
          gap: 20,
          listStyle: 'none',
          borderBottom: '1px solid #6F7682',
          paddingRight: '5px',
          paddingLeft: '20px',
          fontSize: '12px',
        }}>
          <li>
            <a className={'link-header'} href="#">О НАС</a>
          </li>
          <li>
            <a className={'link-header'} href="#">ПРОДУКЦИЯ</a>
          </li>
          <li>
            <a className={'link-header'} href="#">КОНТАКТЫ</a>
          </li>
        </ul>
      </div>
      <a href="#" style={{margin: 0}}>
        <img style={{maxWidth: '179px'}} src={logo} alt="cascade.kg"/>
      </a>
    </div>
  );
};

export default Header;