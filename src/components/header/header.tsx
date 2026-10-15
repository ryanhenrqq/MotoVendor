import { useState } from 'react'
import './header.css'

import menuIco from '../../assets/menu.png'

export function Header() {
  const [showDocked, setShowDocked] = useState(false)
  const handleShowDock = () => {
    !showDocked?setShowDocked(true):setShowDocked(false)
  }
  return (
    <>
      <header>
        <div className='left-side'>
          <h1>MotoVendor</h1>
          <b>A maior variedade de motos</b>
        </div>
        <div className='right-side'>
          <div>Inicio</div>
          <div>Catálogo</div>
          <div>Contato</div>
        </div>
        <div className='right-side-docked'>
          <img src={menuIco} alt="Menu" className='right-side-docked-menuimg' onClick={handleShowDock} />
        </div>
        
      </header>
      {showDocked?
            <DockedMenuHead />
            :
            null
          }
    </>
  )
}

function DockedMenuHead() {
  return(
    <div className='docked-menu-overlay'>
      <div>Inicio</div>
      <div>Catálogo</div>
      <div>Contato</div>
    </div>
  )
}