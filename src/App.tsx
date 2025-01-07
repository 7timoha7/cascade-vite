import './App.css'
import Header from "./components/footer/Header.tsx";
import Footer from "./components/header/Footer.tsx";

function App() {

  return (

    <div className={'main-container'} style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
      <div style={{marginBottom: 'auto'}}>
        <Header/>
      </div>

      <div style={{marginTop: 'auto'}}>
        <Footer/>
      </div>
    </div>


  )
}

export default App
