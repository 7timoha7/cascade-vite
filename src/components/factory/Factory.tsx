import imgFactory from "../../assets/images/factory/cascade-factory.svg";
import img1 from "../../assets/images/factory/factory-icon1.svg";
import img2 from "../../assets/images/factory/factory-icon2.svg";
import img3 from "../../assets/images/factory/factory-icon3.svg";
import img4 from "../../assets/images/factory/factory-icon4.svg";
import './Factory.css'


const Factory = () => {
  return (
    <div style={{flex: 1}}>
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

    </div>
  );
};


export default Factory;