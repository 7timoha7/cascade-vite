import imgFactory from "../../assets/images/factory/cascade-factory.svg";
import img1 from "../../assets/images/factory/factory-icon1.svg";
import img2 from "../../assets/images/factory/factory-icon2.svg";
import img3 from "../../assets/images/factory/factory-icon3.svg";
import img4 from "../../assets/images/factory/factory-icon4.svg";
import './Factory.css'
import {useEffect, useState} from "react";


const Factory = () => {

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
    <>
      {isMobile ? <div style={{flex: 1}}>
          <img style={{width: '100%'}} src={imgFactory} alt="factory"/>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div className={'main-container'}
                 style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%'}}>
              <div className={'card'}>
                <img className={'icon-img'} src={img1} alt="cascade-factory-icon"/>
                <p className={'icon-text1'}>Площадь завода </p>
                <p className={'icon-text2'}>60.000 <span className={'icon-text2-span'}>м²</span></p>
              </div>

              <div className={'card'}>
                <img className={'icon-img'} src={img2} alt="cascade-factory-icon"/>
                <p className={'icon-text1'}>Роботизированная машина
                  для распыления глазури</p>
                <p className={'icon-text2'}>10+ <span className={'icon-text2-span'}>Башен</span></p>
              </div>

              <div className={'card'}>
                <img className={'icon-img'} src={img3} alt="cascade-factory-icon"/>
                <p className={'icon-text1'}>Автоматическая печь
                  объемом 160 м³</p>
                <p className={'icon-text2'}>160 <span className={'icon-text2-span'}>м³</span></p>
              </div>

              <div className={'card'}>
                <img className={'icon-img'} src={img4} alt="cascade-factory-icon"/>
                <p className={'icon-text1'}>10 автоматичеких
                  линий литья
                </p>
                <p className={'icon-text2'}> 10 <span className={'icon-text2-span'}>линий</span></p>
              </div>
            </div>
          </div>

        </div> :

        <div style={{flex: 1}}>
          <img style={{width: '100%'}} src={imgFactory} alt="factory"/>
          <div style={{display: 'flex'}}>
            <div className={'main-container2'}
                 style={{
                   display: 'flex',
                   flexDirection: 'column',
                   alignItems: 'center',
                   width: '100%'
                 }}>
              <div className={'card2'} style={{marginBottom: '20px'}}>
                <div className='img-box'>
                  <img className={'icon-img-1'} src={img1} alt="cascade-factory-icon"/>
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: '150px',
                  alignItems: 'start',
                  justifyContent: 'center',
                }}>
                  <p className={'icon-text1-1'}>Площадь завода </p>
                  <p className={'icon-text2-2'}>60.000 <span className={'icon-text2-2-span'}>м²</span></p>
                </div>

              </div>

              <div className={'card2'} style={{marginBottom: '20px'}}>
                <div className='img-box'>
                  <img className={'icon-img-1'} src={img2} alt="cascade-factory-icon"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', maxWidth: '150px'}}>
                  <p className={'icon-text1-1'}>Роботизированная машина
                    для распыления глазури</p>
                  <p className={'icon-text2-2'}>10+ <span className={'icon-text2-2-span'}>Башен</span></p>
                </div>

              </div>

              <div className={'card2'} style={{marginBottom: '20px'}}>
                <div className='img-box'>
                  <img className={'icon-img-1'} src={img3} alt="cascade-factory-icon"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', maxWidth: '150px'}}>
                  <p className={'icon-text1-1'}>Автоматическая печь
                    объемом 160 м³</p>
                  <p className={'icon-text2-2'}>160 <span className={'icon-text2-2-span'}>м³</span></p>
                </div>

              </div>

              <div className={'card2'} style={{marginBottom: '20px'}}>
                <div className='img-box'>
                  <img className={'icon-img-1'} src={img4} alt="cascade-factory-icon"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', maxWidth: '150px'}}>
                  <p className={'icon-text1-1'}>10 автоматичеких
                    линий литья
                  </p>
                  <p className={'icon-text2-2'}> 10 <span className={'icon-text2-2-span'}>линий</span></p>
                </div>

              </div>
            </div>
          </div>

        </div>
      }
    </>


  );
};


export default Factory;