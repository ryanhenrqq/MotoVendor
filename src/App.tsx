import './App.css'

import motorcyclesImg from './assets/img/motorcycles.jpg'

function App() {

  return (
    <>
      <Header />
      <div className="main">


        <div className="flex-hor top-main-cont-div">
          <img src={motorcyclesImg} alt="Motos" />
          <div className="flex-ver">
            <h3>Sua próxima conquista sobre duas rodas.</h3>
            <p>Motos seminovas rigorosamente inspecionadas, com garantia e as melhores condições de financiamento do mercado.</p>
            <button className='top-main-cont-div-btn'>Catalogo</button>
          </div>
        </div>


        <div className="flex-hor second-main-cont-div">
          <div className="flex-ver">
            <h3>Por Que Comprar na MotoVendor?</h3>
              <p>Sua tranquilidade é a nossa prioridade em cada negociação.</p>
              <ul>
                <li>Inspeção em 50+ Pontos</li>
                <li>Garantia Completa</li>
                <li>Financiamento Facilitado</li>
              </ul>
          </div>
          <div className="flex-ver">
            <h3>Atribuições</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dicta eveniet repellat pariatur nam esse magni cum et, officiis doloremque aliquid optio placeat dolor sed, ratione quaerat eos, minima est.</p>
          </div>
        </div>
      </div>
    </>
  )
}

function Header() {
  return (
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
    </header>
  )
}

export default App
