import './OurProducts.css'
import imgLogo from '../../assets/images/ourProducts/logo.svg'
import technologiesIcon1 from '../../assets/images/ourProducts/technologies-icon1.svg'
import technologiesIcon2 from '../../assets/images/ourProducts/technologies-icon2.svg'
import technologiesIcon3 from '../../assets/images/ourProducts/technologies-icon3.svg'
import technologiesIcon4 from '../../assets/images/ourProducts/technologies-icon4.svg'
import technologiesIcon5 from '../../assets/images/ourProducts/technologies-icon5.svg'
import technologiesIcon6 from '../../assets/images/ourProducts/technologies-icon6.svg'
import img from "../../assets/images/ourProducts/img2.svg";

const OurProducts = () => {
  return (

    <div style={{borderTop: '1px solid #727376',}}>

      <div style={{flex: 1}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div className={`main-container`}>
            <img src={imgLogo} alt="cascade"/>
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
              <p style={{maxWidth: '860px', fontSize: '24px', textAlign: 'left'}}>
                Завод занимает площадь 60 000 кв. м и специализируется на производстве и продаже керамических унитазов,
                раковин и продукции для общественных ванных комнат.
              </p>

              <p style={{maxWidth: '860px', fontSize: '24px', textAlign: 'left'}}>
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
              <div style={{
                textAlign: 'center',
                fontSize: '36px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <p style={{margin: 0, paddingBottom: '25px'}}>НАША ПРОДУКЦИЯ</p>
                <p style={{borderTop: '2px solid #727376', margin: 0, padding: '28px 150px'}}>УНИТАЗЫ</p>
              </div>

              <div style={{
                backgroundColor: '#E6E6E6B3',
                textAlign: 'left',
                width: '100%',
              }}>
                <div
                  style={{
                    display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontSize: '12px', gap: '15px',
                    padding: '20px'
                  }}>
                  <div style={{maxWidth: '180px'}}>
                    <div style={{textAlign: 'center'}}>
                      <img src={technologiesIcon1} alt="cascade-technologies"/>
                    </div>
                    <p>
                      Бесшумное и плавное
                      опускание крышки,
                      нет IP-шума, нет
                      керамического воздействия,
                      безопасно, тихо и удобно
                    </p>
                  </div>
                  <div style={{maxWidth: '180px'}}>
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
                  <div style={{maxWidth: '180px'}}>
                    <div style={{textAlign: 'center'}}>
                      <img src={technologiesIcon3} alt="cascade-technologies"/>
                    </div>
                    <p>
                      Технология формирования
                      высокого давления и постоянная температура
                      обеспечивает качество керамики
                    </p>
                  </div>

                  <div style={{maxWidth: '180px'}}>
                    <div style={{textAlign: 'center'}}>
                      <img src={technologiesIcon4} alt="cascade-technologies"/>
                    </div>
                    <p>
                      Технологичные материалы
                      керамики, позволяют
                      сохранять на поверхности
                      глазури гладкосVIть,
                      блеск и чистоту
                    </p>
                  </div>
                  <div style={{maxWidth: '180px'}}>
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
                  <div style={{maxWidth: '180px'}}>
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