import './OurProducts.css'
import imgLogo from '../../assets/images/ourProducts/logo.svg'
import technologiesIcon1 from '../../assets/images/ourProducts/technologies-icon1.svg'
import technologiesIcon2 from '../../assets/images/ourProducts/technologies-icon2.svg'
import technologiesIcon3 from '../../assets/images/ourProducts/technologies-icon3.svg'
import technologiesIcon4 from '../../assets/images/ourProducts/technologies-icon4.svg'
import technologiesIcon5 from '../../assets/images/ourProducts/technologies-icon5.svg'
import technologiesIcon6 from '../../assets/images/ourProducts/technologies-icon6.svg'
import img from "../../assets/images/ourProducts/img2.svg";
import {useEffect, useState} from "react";

const OurProducts = () => {
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

    <div id="about-us" style={{borderTop: '1px solid #727376',}}>

      <div style={{flex: 1}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div className={`main-container`}>
            <img style={{maxWidth: !isMobile ? '150px' : '100%'}} src={imgLogo} alt="cascade"/>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              paddingLeft: '10px',
              paddingRight: '10px'
            }}>
              <p style={{maxWidth: '860px', fontSize: isMobile ? '24px' : '14px', textAlign: 'left'}}>
                Завод занимает площадь 60 000 кв. м и специализируется на производстве и продаже керамических унитазов,
                раковин и продукции для общественных ванных комнат.
              </p>

              <p style={{maxWidth: '860px', fontSize: isMobile ? '24px' : '14px', textAlign: 'left'}}>
                Производственный комплекс включает завод по изготовлению фарфоровой глины и литейный цех, а также
                оснащён
                высокотехнологичными туннельными и компьютеризированными печами. Мощная производственная база и
                передовые
                технические решения позволяют нам обеспечивать высокое качество продукции и стабильные поставки в
                кратчайшие
                сроки.
              </p>
            </div>
          </div>
        </div>


        <div style={{display: 'flex', flexDirection: 'column'}}>
          <img style={{width: '100%'}} src={img} alt="2"/>
          <div className={`main-container waterfallBackground`}>
            <div>
              <div id="products" style={{
                textAlign: 'center',
                fontSize: '36px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <p style={{fontSize: isMobile ? '36px' : '18px', margin: 0, paddingBottom: '25px'}}>НАША ПРОДУКЦИЯ</p>
                <p style={{
                  fontSize: isMobile ? '36px' : '18px',
                  borderTop: '2px solid #727376',
                  margin: 0,
                  padding: '28px 150px'
                }}>УНИТАЗЫ</p>
              </div>

              <div style={{
                backgroundColor: '#E6E6E6B3',
                textAlign: 'left',
                width: '100%',
              }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: !isMobile ? 'space-around' : 'space-between',
                    flexWrap: 'wrap',
                    fontSize: '12px',
                    gap: !isMobile ? '8px' : '15px',
                    padding: '20px'
                  }}>
                  <div style={{maxWidth: !isMobile ? '130px' : '180px'}}>
                    <div style={{textAlign: 'center'}}>
                      <img src={technologiesIcon1} alt="cascade-technologies"/>
                    </div>
                    <p>
                      Тихое и плавное
                      опускание крышки,
                      высококачественный
                      пластик
                    </p>
                  </div>
                  <div style={{maxWidth: !isMobile ? '130px' : '180px'}}>
                    <div style={{textAlign: 'center'}}>
                      <img src={technologiesIcon2} alt="cascade-technologies"/>
                    </div>
                    <p>
                      Весь трубопровод
                      покрыт глазурованным
                      материалом, делающим
                      внутренние трубы гладкими
                      и беспрепятственным
                    </p>
                  </div>
                  <div style={{maxWidth: !isMobile ? '130px' : '180px'}}>
                    <div style={{textAlign: 'center'}}>
                      <img src={technologiesIcon3} alt="cascade-technologies"/>
                    </div>
                    <p>
                      Технология формирования
                      высокого давления и постоянная температура
                      обеспечивает качество керамики
                    </p>
                  </div>

                  <div style={{maxWidth: !isMobile ? '130px' : '180px'}}>
                    <div style={{textAlign: 'center'}}>
                      <img src={technologiesIcon4} alt="cascade-technologies"/>
                    </div>
                    <p>
                      Технологичные материалы
                      керамики позволяют
                      сохранять на поверхности
                      глазури гладкость,
                      блеск и чистоту
                    </p>
                  </div>
                  <div style={{maxWidth: !isMobile ? '130px' : '180px'}}>
                    <div style={{textAlign: 'center'}}>
                      <img src={technologiesIcon5} alt="cascade-technologies"/>
                    </div>
                    <p>
                      Технология смывания
                      на 360° обеспечивает
                      бесшумность экономию
                      воды и обмывание
                      всей поверхности
                      образуя воронку для
                      удаления грязи

                    </p>
                  </div>
                  <div style={{maxWidth: !isMobile ? '130px' : '180px'}}>
                    <div style={{textAlign: 'center'}}>
                      <img src={technologiesIcon6} alt="cascade-technologies"/>
                    </div>
                    <p>
                      Простота установки и
                      разборки предоставляет
                      быстрый доступ для
                      очистки системы
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>


    </div>

  );
};

export default OurProducts;