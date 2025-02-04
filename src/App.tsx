import './App.css'
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Factory from "./components/factory/Factory.tsx";

function App() {

  return (

    <div style={{display: 'flex', flexDirection: 'column', height: '100vh', margin: 0}}>
      <div className={'main-container'} style={{marginBottom: 'auto', marginTop: 0}}>
        <Header/>
      </div>

      <Factory/>


      <div className={'main-container'} style={{marginTop: 'auto'}}>
        <Footer/>
      </div>
    </div>


  )
}

export default App
