import imgPhone from '../../assets/images/Footer/phone.svg';
import imgWhatsApp from '../../assets/images/Footer/whatsapp.svg';
import imgInsta from '../../assets/images/Footer/instagram.svg';

const Footer = () => {
  return (
    <div id="contacts" style={{display: 'flex', justifyContent: 'center'}}>
      <footer style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '50px 20px',
      }}>
        <p style={{
          fontSize: '30px',
          fontWeight: 'bold',
          marginBottom: '30px',
        }}>
          КОНТАКТЫ
        </p>

        {/* Блок с телефоном */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '30px',
        }}>
          <img
            src={imgPhone}
            alt="Phone"
            style={{width: '40px', height: '40px'}}
          />
          <a
            href="tel:+996553100500"
            style={{
              fontSize: '20px',
              textDecoration: 'none',
              color: '#333',
              transition: 'color 0.3s ease', /* Плавный переход */
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#abafbe')} // Ховер-эффект
            onMouseLeave={(e) => (e.currentTarget.style.color = '#333')} // Восстановление исходного цвета
          >
            +996 553 100500
          </a>
        </div>

        {/* Блок с соц сетями */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px',
        }}>
          {/* WhatsApp */}
          <a
            href="https://wa.me/996553100500?text=Здравствуйте,%20я%20хочу%20связаться%20с%20вами!"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
            }}
          >
            <img
              src={imgWhatsApp}
              alt="WhatsApp"
              style={{width: '50px', height: '50px'}}
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/passage.kg?igsh=bG81MHhoMXN4ZHJ6"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
            }}
          >
            <img
              src={imgInsta}
              alt="Instagram"
              style={{width: '35px', height: '35px'}}
            />
          </a>
        </div>
      </footer>
    </div>

  );
};

export default Footer;
