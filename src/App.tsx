import './App.css'
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Factory from "./components/factory/Factory.tsx";
import OurProducts from "./components/ourProducts/OurProducts.tsx";

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


        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div className={'main-container'} style={{marginTop: 'auto'}}>
            <Footer/>
          </div>
        </div>

      </div>

    </div>


  )
}

export default App
