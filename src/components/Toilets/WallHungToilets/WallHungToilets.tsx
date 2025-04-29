import imgMain from '../../../assets/images/WallHungToilets/main.jpg'
import img1 from '../../../assets/images/WallHungToilets/1.svg'
import img2 from '../../../assets/images/WallHungToilets/2.svg'
import img3 from '../../../assets/images/WallHungToilets/3.svg'
import img4 from '../../../assets/images/WallHungToilets/4.svg'
import img5 from '../../../assets/images/WallHungToilets/5.svg'
import img6 from '../../../assets/images/WallHungToilets/6.svg'
import {useEffect, useState} from "react";

const WallHungToilets = () => {

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    handleResize(); // вызвать сразу при загрузке

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      <div className='container-1290' style={{
        width: '100%',
        boxSizing: 'border-box',
      }}>

        {/* Заголовок */}
        <div style={{textAlign: 'center', marginBottom: '30px'}}>
          <p style={{
            fontSize: !isMobile ? '18px' : '36px',
            padding: '15px 50px',
            borderBottom: '1px solid #727376',
            display: 'inline-block'
          }}>
            ПОДВЕСНЫЕ УНИТАЗЫ
          </p>
        </div>

        {/* Контент */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
        }}>

          {/* Main картинка */}
          <div style={{
            flex: '0 0 400px',
            maxWidth: '400px',
            width: '100%',
          }}>
            <img
              src={imgMain}
              alt="toilet"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Маленькие карточки */}
          <div style={{
            flex: '1 1 500px',
            display: 'grid',
            gridTemplateColumns: !isMobile ? 'repeat(auto-fit, minmax(170px, 1fr))' : 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: !isMobile ? '12px' : '20px',
          }}>
            {[
              {src: img1, name: 'GX-15003'},
              {src: img2, name: 'GX-15027'},
              {src: img3, name: 'GX-15001'},
              {src: img4, name: 'GX-15004'},
              {src: img5, name: 'GX-10008'},
              {src: img6, name: 'GX-10001'}
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
                <img
                  src={item.src}
                  alt={item.name}
                  style={{
                    width: '100%',
                    maxWidth: '150px',
                    height: '150px',
                    objectFit: 'contain',
                  }}
                />
                <p style={{
                  marginTop: '10px',
                  fontSize: '16px',
                  textAlign: 'center',
                }}>{item.name}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default WallHungToilets;
