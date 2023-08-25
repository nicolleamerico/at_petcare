import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Sobre() {
    return (
      <>
      <Header/>
        <div className="sobre">

            <div className="contsobre">
                <div className="textosobre">
                    <h1 className="text-dark fw-bold mb-4">Sobre nós</h1>                   
                    <p>Nosso compromisso com a saúde animal levou-nos a adotar a mais recente tecnologia para garantir que cada peludo receba atenção individualizada. Introduzindo a coleira inteligente PawSense, uma maravilha tecnológica que revoluciona a maneira como monitoramos a saúde dos animais de estimação. Não apenas uma coleira, mas um elo inquebrável entre você e seu companheiro peludo.</p>
                    <p>Na PetCare, acreditamos que a tecnologia pode fortalecer os laços entre humanos e animais. Ao escolher a coleira inteligente PawSense, você está investindo em cuidados preventivos e em uma parceria mais profunda com seu animal de estimação. Junte-se a nós nessa jornada de amor, cuidado e inovação, e juntos, criaremos um mundo onde todos os peludos prosperam.</p>

                    <div className="quemsomos">
                    <h5>Contato</h5>
                    <img src="https://media.discordapp.net/attachments/1138062582964551720/1140601704526659714/whatsapp.png?width=427&height=427" alt="" width="40px" /> 
                    <img src="https://media.discordapp.net/attachments/1138062582964551720/1140601704199495710/chamada-telefonica.png?width=427&height=427" alt="" width="40px" />
                    </div>

                </div>
                <div className="imgsobre">
                    <img src="https://cdn.discordapp.com/attachments/1006575837493071873/1141436949882736730/LOGO_1.png" alt="About Us" height="400px" width="400px" />
                </div>
            </div>
        </div>
        <Footer/>
      </>
    )
  }
  
  export default Sobre