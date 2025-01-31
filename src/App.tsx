import './App.css'
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {

  return (

    <div style={{display: 'flex', flexDirection: 'column', height: '100vh', margin: 0}}>
      <div style={{borderBottom: '2px solid #6F7682'}}>
        <div className={'main-container'} style={{marginBottom: 'auto'}}>
          <Header/>
        </div>
      </div>


      <div className={'main-container'} style={{marginTop: 'auto'}}>
        <Footer/>
      </div>
    </div>


  )
}

export default App
