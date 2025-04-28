import img1 from '../../assets/images/Sgells/1.jpg'
import img2 from '../../assets/images/Sgells/2.jpg'
import img3 from '../../assets/images/Sgells/3.svg'
import HangingSinks from "./HangingSinks.tsx";
import FreestandingSinks from "./FreestandingSinks.tsx";
import InsetSinks from "./InsetSinks.tsx";
import TabletopSinks from "./TabletopSinks.tsx";

const Shells = () => {
  return (
    <div>
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
              РАКОВИНЫ
            </p>
          </div>

          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '25px'}}>
            <div style={{maxWidth: '600px'}}>
              <img style={{width: '100%'}} src={img1} alt="shell"/>
            </div>

            <div style={{maxWidth: '600px'}}>
              <img style={{width: '100%'}} src={img2} alt="shell"/>
            </div>


          </div>
        </div>
      </div>
      <HangingSinks/>

      <div style={{display: 'flex', justifyContent: 'center', marginTop: '90px'}}>
        <img style={{maxWidth: '712px'}} src={img3} alt="cascade"/>
      </div>

      <FreestandingSinks/>
      <InsetSinks/>
      <TabletopSinks/>
    </div>

  );
};

export default Shells;