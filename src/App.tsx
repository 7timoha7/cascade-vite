import './App.css'
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Factory from "./components/factory/Factory.tsx";
import OurProducts from "./components/ourProducts/OurProducts.tsx";
import WallHungToilets from "./components/Toilets/WallHungToilets/WallHungToilets.tsx";
import FloorStandingToilets from "./components/Toilets/FloorStandingToilets/FloorStandingToilets.tsx";
import Shells from "./components/Shells/Shells.tsx";

function App() {

  return (

    <div style={{display: 'flex', flexDirection: 'column', height: '100vh', margin: 0}}>
      <div>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div className={'main-container'} style={{marginBottom: 'auto', marginTop: 0}}>
            <Header/>
          </div>
        </div>


        <Factory/>

        <OurProducts/>

        <WallHungToilets/>

        <FloorStandingToilets/>

        <Shells/>

        <div style={{display: 'flex', flexDirection: 'column', background: '#F1F2F6', marginTop: '80px'}}>
          <div className={'main-container'} style={{marginTop: 'auto'}}>
            <Footer/>
          </div>
        </div>

      </div>

    </div>


  )
}

export default App
