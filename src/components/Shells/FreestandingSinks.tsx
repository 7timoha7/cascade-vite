import imgMain from '../../assets/images/Sgells/FreestandingSinks/main.jpg'
import img1 from '../../assets/images/Sgells/FreestandingSinks/1.svg'
import img2 from '../../assets/images/Sgells/FreestandingSinks/2.svg'
import img3 from '../../assets/images/Sgells/FreestandingSinks/3.svg'
import img4 from '../../assets/images/Sgells/FreestandingSinks/4.svg'
import img5 from '../../assets/images/Sgells/FreestandingSinks/5.svg'
import img6 from '../../assets/images/Sgells/FreestandingSinks/6.svg'

const FreestandingSinks = () => {
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
            fontSize: '36px',
            padding: '15px 50px',
            borderBottom: '1px solid #727376',
            display: 'inline-block'
          }}>
            ОТДЕЛЬНОСТОЯЩИЕ РАКОВИНЫ
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '20px',
          }}>
            {[
              {src: img1, name: 'GX-19004'},
              {src: img2, name: 'GX-19006'},
              {src: img3, name: 'GX-19007'},
              {src: img4, name: 'GX-19008'},
              {src: img5, name: 'GX-19001'},
              {src: img6, name: 'GX-20002'}
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

export default FreestandingSinks;