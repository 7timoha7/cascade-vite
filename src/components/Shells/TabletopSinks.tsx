import imgMain1_1 from '../../assets/images/Sgells/TabletopSinks/main1-1.jpg'
import img1_1 from '../../assets/images/Sgells/TabletopSinks/1-1.svg'
import img1_2 from '../../assets/images/Sgells/TabletopSinks/1-2.svg'
import img1_3 from '../../assets/images/Sgells/TabletopSinks/1-3.svg'
import img1_4 from '../../assets/images/Sgells/TabletopSinks/1-4.svg'
import img1_5 from '../../assets/images/Sgells/TabletopSinks/1-5.svg'
import img1_6 from '../../assets/images/Sgells/TabletopSinks/1-6.svg'

import imgMain2_1 from '../../assets/images/Sgells/TabletopSinks/main2-1.jpg'
import img2_1 from '../../assets/images/Sgells/TabletopSinks/2-1.svg'
import img2_2 from '../../assets/images/Sgells/TabletopSinks/2-2.svg'
import img2_3 from '../../assets/images/Sgells/TabletopSinks/2-3.svg'
import img2_4 from '../../assets/images/Sgells/TabletopSinks/2-4.svg'
import img2_5 from '../../assets/images/Sgells/TabletopSinks/2-5.svg'
import img2_6 from '../../assets/images/Sgells/TabletopSinks/2-6.svg'

import imgMain3_1 from '../../assets/images/Sgells/TabletopSinks/main3-1.jpg'
import img3_1 from '../../assets/images/Sgells/TabletopSinks/3-1.svg'
import img3_2 from '../../assets/images/Sgells/TabletopSinks/3-2.svg'
import img3_3 from '../../assets/images/Sgells/TabletopSinks/3-3.svg'
import img3_4 from '../../assets/images/Sgells/TabletopSinks/3-4.svg'
import img3_5 from '../../assets/images/Sgells/TabletopSinks/3-5.svg'
import img3_6 from '../../assets/images/Sgells/TabletopSinks/3-6.svg'

import imgMain4_1 from '../../assets/images/Sgells/TabletopSinks/main4-1.jpg'
import img4_1 from '../../assets/images/Sgells/TabletopSinks/4-1.svg'
import img4_2 from '../../assets/images/Sgells/TabletopSinks/4-2.svg'
import img4_3 from '../../assets/images/Sgells/TabletopSinks/4-3.svg'
import img4_4 from '../../assets/images/Sgells/TabletopSinks/4-4.jpg'
import img4_5 from '../../assets/images/Sgells/TabletopSinks/4-5.svg'
import img4_6 from '../../assets/images/Sgells/TabletopSinks/4-6.svg'

import imgMain5_1 from '../../assets/images/Sgells/TabletopSinks/main5-1.jpg'
import img5_1 from '../../assets/images/Sgells/TabletopSinks/5-1.svg'
import img5_2 from '../../assets/images/Sgells/TabletopSinks/5-2.svg'
import img5_3 from '../../assets/images/Sgells/TabletopSinks/5-3.svg'
import img5_4 from '../../assets/images/Sgells/TabletopSinks/5-4.svg'
import img5_5 from '../../assets/images/Sgells/TabletopSinks/5-5.svg'
import img5_6 from '../../assets/images/Sgells/TabletopSinks/5-6.svg'
import {useEffect, useState} from "react";


const TabletopSinks = () => {

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
            НАСТОЛЬНЫЕ РАКОВИНЫ
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
            // flex: '0 0 400px',
            maxWidth: '400px',
            width: '100%',
          }}>
            <img
              src={imgMain1_1}
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
            gridTemplateColumns: !isMobile ? 'repeat(auto-fit, minmax(170px, 1fr))' : 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: !isMobile ? '12px' : '20px',
          }}>
            {[
              {src: img1_1, name: 'Grey'},
              {src: img1_2, name: 'Blue'},
              {src: img1_3, name: 'Cyan'},
              {src: img1_4, name: 'Black'},
              {src: img1_5, name: 'White'},
              {src: img1_6, name: 'Pink'}
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

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
          marginTop: '100px'
        }}>
          {/* Main картинка */}
          <div style={{
            // flex: '0 0 400px',
            maxWidth: '400px',
            width: '100%',
          }}>
            <img
              src={imgMain2_1}
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
            gridTemplateColumns: !isMobile ? 'repeat(auto-fit, minmax(170px, 1fr))' : 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: !isMobile ? '12px' : '20px',
          }}>
            {[
              {src: img2_1, name: 'Grey'},
              {src: img2_2, name: 'Black'},
              {src: img2_3, name: 'Pink'},
              {src: img2_4, name: 'White'},
              {src: img2_5, name: 'Green'},
              {src: img2_6, name: 'Blue'}
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

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
          marginTop: '100px'
        }}>
          {/* Main картинка */}
          <div style={{
            // flex: '0 0 400px',
            maxWidth: '400px',
            width: '100%',
          }}>
            <img
              src={imgMain3_1}
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
            gridTemplateColumns: !isMobile ? 'repeat(auto-fit, minmax(170px, 1fr))' : 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: !isMobile ? '12px' : '20px',
          }}>
            {[
              {src: img3_1, name: 'Pink'},
              {src: img3_2, name: 'Green'},
              {src: img3_3, name: 'Khaki'},
              {src: img3_4, name: 'Black'},
              {src: img3_5, name: 'White'},
              {src: img3_6, name: 'Blue'}
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


        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
          marginTop: '100px'
        }}>
          {/* Main картинка */}
          <div style={{
            // flex: '0 0 400px',
            maxWidth: '400px',
            width: '100%',
          }}>
            <img
              src={imgMain4_1}
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
            gridTemplateColumns: !isMobile ? 'repeat(auto-fit, minmax(170px, 1fr))' : 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: !isMobile ? '12px' : '20px',
          }}>
            {[
              {src: img4_1, name: 'GX-21009'},
              {src: img4_2, name: 'GX-21011'},
              {src: img4_3, name: 'GX-21025'},
              {src: img4_4, name: 'GX-21129'},
              {src: img4_5, name: 'GX-21012'},
              {src: img4_6, name: 'GX-21036'}
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

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
          marginTop: '100px'
        }}>
          {/* Main картинка */}
          <div style={{
            // flex: '0 0 400px',
            maxWidth: '400px',
            width: '100%',
          }}>
            <img
              src={imgMain5_1}
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
            gridTemplateColumns: !isMobile ? 'repeat(auto-fit, minmax(170px, 1fr))' : 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: !isMobile ? '12px' : '20px',
          }}>
            {[
              {src: img5_1, name: 'GX-21126'},
              {src: img5_2, name: 'GX-21125'},
              {src: img5_3, name: 'GX-21033'},
              {src: img5_4, name: 'GX-21049'},
              {src: img5_5, name: 'GX-21050'},
              {src: img5_6, name: 'GX-21138'}
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

export default TabletopSinks;