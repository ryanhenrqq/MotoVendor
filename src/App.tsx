import { useEffect, useState } from 'react'
import './App.css'

import motorcyclesImg from './assets/img/motorcycles.jpg'
import cg160Img from './assets/img/cg160.jpg'
import fz25Img from './assets/img/fz25.jpg'
import bmw310Img from './assets/img/bmw310naked.webp'
import noprofileIco from './assets/noprofile.jpg'
import menuIco from './assets/menu.png'

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
        
        {/* HEADER - CHAMADA PRA AÇÃO (CNO CASO O CATALOGO) */}
        <div className="flex-hor top-main-cont-div">
          <div className='top-main-cont-div-title'>
            <h1>MotoVendor</h1>
            <b>A maior variedade de motos</b>
          </div>
          <img src={motorcyclesImg} alt="Motos" />
          <div className="flex-ver top-main-cont-div-child">
            <h3>Sua próxima conquista sobre duas rodas.</h3>
            <p>Motos seminovas rigorosamente inspecionadas, com garantia e as melhores condições de financiamento do mercado.</p>
            <button className='top-main-cont-div-btn'>Catalogo</button>
          </div>
        </div>

        {/* SEGUNDA ABA - MOTIVO PARA COMPRAR NA EMPRESA - TRANSMITIR CONFIANÇA */}
        <div className="flex-hor second-main-cont-div">

          <div className="flex-ver second-main-cont-div-child">

            <h3>Por Que Comprar na MotoVendor?</h3>

            <p>Sua tranquilidade é a nossa prioridade em cada negociação.</p>

            <div className="flex-hor second-main-child-about">

              <div className="flex-ver">
                <b>Inspeção em 50+ Pontos</b>
                <p>Todas as nossas motos passam por um rigoroso teste mecânico e elétrico antes de irem para o show-room.</p>
              </div>

              <div className="flex-ver">
                <b>Garantia Completa</b>
                <p>Oferecemos garantia de motor e câmbio para você pilotar com total paz de espírito e segurança.</p>
              </div>

              <div className="flex-ver">
                <b>Financiamento Facilitado</b>
                <p>Aprovação rápida com as melhores taxas do mercado. Aceitamos sua moto usada como entrada!</p>
              </div>

            </div>
          </div>
        </div>

        {/* TERCEIRA ABA - CATALOGO RAPIDO COM FOTOS E PREÇOS CHAMATIVOS */}
        <div className="flex-hor thirdy-main-cont-div">

          <div className="flex-ver thirdy-main-cont-div-child">

            <h3>Conheça os destaques da semana!</h3>

            <div className="flex-ver thirdy-main-child-about">

              <div className="flex-hor thirdy-main-child-about-card">
                <div className="flex-ver">
                  <b>HONDA CG 160 2022</b>
                  <p>Líder absoluta em economia e facilidade na manutenção. Ideal para o dia a dia na cidade com alto valor de revenda.</p>
                  <b>Em até 72x de R$ 389,00</b>
                  <small style={{width:'100%',textAlign:'left'}}>Preço sujeito a análise do perfil do cliente.</small>
                  <button>Simular</button>
                </div>
                <img src={cg160Img} alt="HONDA CG 160 2022" />
              </div>

              <div className="flex-hor thirdy-main-child-about-card">
                <img src={fz25Img} alt="YAMAHA FAZER FZ25 2022" />
                <div className="flex-ver">
                  <b>YAMAHA FAZER FZ-25 2022</b>
                  <p>Visual agressivo com iluminação full LED e freios ABS nas duas rodas. Conforto e torque de sobra para o trânsito ou estrada.</p>
                  <b>Em até 72x de R$ 469,00</b>
                  <small style={{width:'100%',textAlign:'left'}}>Preço sujeito a análise do perfil do cliente.</small>
                  <button>Simular</button>
                </div>
              </div>

              <div className="flex-hor thirdy-main-child-about-card">
                <div className="flex-ver">
                  <b>BMW G 310 R 2016</b>
                  <p>Sua porta de entrada para a engenharia premium alemã. Motor de 34 cv, garfo invertido e pilotagem pura na cidade.</p>
                  <b>Em até 72x de R$ 509,00</b>
                  <small style={{width:'100%',textAlign:'left'}}>Preço sujeito a análise do perfil do cliente.</small>
                  <button>Simular</button>
                </div>
                <img src={bmw310Img} alt="BMW G 310 R NAKED 2016" />
              </div>

            </div>
          </div>
        </div>

        {/* QUARTA ABA - MOTIVO PARA COMPRAR NA EMPRESA - TRANSMITIR CONFIANÇA */}
        <div className="flex-hor fourty-main-cont-div">

          <div className="flex-ver fourty-main-cont-div-child">

            <h3>O que nossos clientes dizem?</h3>

            <p>Já tivemos mais de 100 compras fechadas com sucesso. Escute um pouco do depoimento de nossos clientes satisfeitos.</p>

            <div className="flex-hor fourty-main-child-about">

              <div className="flex-ver fourty-main-child-about-card">

                <div className="flex-hor" style={{width:'80%'}}>
                  <img src={noprofileIco} alt="Foto de Perfil" />
                  <div className="flex-ver">
                    <b>Usuário Anonimo</b>
                    <b>7 anos atrás</b>
                  </div>
                </div>
                
                <p>“Comprei minha FZ25 com a MotoVendor e o processo foi super ágil. Moto revisada e entregue no prazo!”</p>
              </div>

              <div className="flex-ver fourty-main-child-about-card">
                
                <div className="flex-hor" style={{width:'80%'}}>
                  <img src={noprofileIco} alt="Foto de Perfil" />
                  <div className="flex-ver">
                    <b>Usuário Anonimo</b>
                    <b>3 anos atrás</b>
                  </div>
                </div>
                
                <p>“Excelente atendimento! Consegui financiar minha primeira CG 160 com parcelas que cabem no meu bolso.”</p>
              </div>

              <div className="flex-ver fourty-main-child-about-card">
                
                <div className="flex-hor" style={{width:'80%'}}>
                  <img src={noprofileIco} alt="Foto de Perfil" />
                  <div className="flex-ver">
                    <b>Usuário Anonimo</b>
                    <b>3 anos atrás</b>
                  </div>
                </div>
                
                <p>“Experiência excelente na compra da minha primeira moto de maior cilindrada! Estava em dúvida entre uma 160 e uma 250cc, mas o vendedor me ajudou a entender o custo-benefício da FZ25 para o meu trajeto diário no trânsito e pequenas viagens ao fim de semana.”</p>
              </div>

            </div>
          </div>
        </div>
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

function Header() {
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

export default App
