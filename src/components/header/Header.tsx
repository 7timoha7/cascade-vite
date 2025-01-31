import logo from '../../assets/images/logo/logo.png';
import './header.css'

const Header = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', margin: 0}}>
      <a href="#" style={{margin: 0}}>
        <img style={{maxWidth: '200px'}} src={logo} alt="cascade"/>
      </a>
      <div>
        <ul style={{display: 'flex', gap: 25, listStyle: 'none'}}>
          <li>
            <a className={'link-header'} href="#">About</a>
          </li>
          <li>
            <a className={'link-header'} href="#">Toilets</a>
          </li>
          <li>
            <a className={'link-header'} href="#">Shells</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;