import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Tecno() {
    return (
      <>
      <Header/>
        <div className="tecno">

            <div className="conttecno">
                <div className="img">
                    <img src="https://m.media-amazon.com/images/I/413UlH+hSRS._SL500_.jpg" alt="About Us" height="400px" width="400px" />
                </div>
                <div className="textotecno">
                    <h1 className="text-dark fw-bold mb-4">Coleira inteligente</h1>                   
                    <p>No cenário contemporâneo, onde a conexão entre humanos e seus animais de estimação é cada vez mais profunda, a tecnologia surge como uma aliada para garantir o bem-estar e a saúde dos nossos companheiros peludos. Nesse contexto, a coleira inteligente se destaca como uma inovação notável, incorporando avanços tecnológicos para monitorar e cuidar da saúde dos animais de estimação de maneira sem precedentes.</p>
                    <p>Além da medição de batimentos cardíacos, a coleira inteligente também registra outras métricas vitais, como a temperatura corporal do animal, níveis de atividade física e até mesmo padrões de sono. Essas informações são transmitidas em tempo real para um aplicativo móvel dedicado, onde os tutores podem visualizar os dados em gráficos claros e compreensíveis. O aplicativo não apenas exibe as métricas atuais, mas também cria históricos detalhados, permitindo que os tutores rastreiem o progresso da saúde de seus animais de estimação ao longo do tempo.</p>

                    <div className="diego">
                    <h5>Contato</h5>
                    <img src="https://media.discordapp.net/attachments/1138062582964551720/1140601704526659714/whatsapp.png?width=427&height=427" alt="" width="40px" /> 
                    <img src="https://media.discordapp.net/attachments/1138062582964551720/1140601704199495710/chamada-telefonica.png?width=427&height=427" alt="" width="40px" />
                    </div>

                </div>
            </div>
        </div>
    <Footer/>
      </>
    )
}

export default Tecno