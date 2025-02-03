import './App.css'
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import imgFactory from "../src/assets/images/background/cascade-factory.svg"

function App() {

  return (

    <div style={{display: 'flex', flexDirection: 'column', height: '100vh', margin: 0}}>
      <div className={'main-container'} style={{marginBottom: 'auto', marginTop: 0}}>
        <Header/>
      </div>

      <div style={{border: '1px solid blue', flex: 1}}>
        <img style={{width: '100%'}} src={imgFactory} alt="factory"/>
      </div>


      <div className={'main-container'} style={{marginTop: 'auto'}}>
        <Footer/>
      </div>
    </div>


  )
}

export default App
