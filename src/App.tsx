import { useEffect, useState } from 'react'
import './App.css'

import { Header } from './components/header/header'
import { MainView } from './components/main/main'

function App() {
  const [topListen, setTopListen] = useState<boolean>(true)
  useEffect(() => {
    const handleHeaderHide = () => {
      setTopListen(window.scrollY < 100);
    }
    window.addEventListener('scroll', handleHeaderHide, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleHeaderHide);
    }
  }, [])

  return (
    <>
      {!topListen?<Header />:null}
      <div className="main">
        <MainView />
      </div>
      <a href="https://www.flaticon.com/free-icons/menu" title="menu icons">Menu icons created by SeyfDesigner - Flaticon</a>
      <footer>
        <div className="left-side-ft">
          <button>Sobre nós</button>
          <button>Contatp</button>
        </div>
        <div className="right-side-ft">
          <b>2026 MotoVendor - Todos os direitos reservados.</b>
          <small>MotoVendor é uma empresa fictícia de venda de motos. Este é um repositorio usado apenas para demonstração de layout dos meus sites.</small>
        </div>
      </footer>
    </>
  )
}

export default App
