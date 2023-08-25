import React from 'react'
import Header from './Header'
import Footer from './Footer'
import VLibras from '@djpfs/react-vlibras'

const Home = () => {
return (
    <div className='bgimg'>      
        <Header/>
        <div className="secao1">
            <div className="cont">
                <h1>Cuidando com amor do seu pet</h1>
                <p className='textosecao1'>Bem-vindo à PetCare, uma ONG apaixonada por proteger e promover o bem-estar dos nossos amigos de quatro patas. Nós acreditamos que a conexão entre humanos e animais é uma ponte de amor e responsabilidade, e é por isso que nos dedicamos a fornecer o melhor cuidado possível por meio da inovação.</p>
                {/* <button className='bnav'>Agendar</button> */}
            </div>
            <div className="dog">
                <img className="cachorro" src="https://www.pedigree.com.br/sites/g/files/fnmzdf2401/files/2022-04/hero-icon-Savannah_0.png" alt="" />
            </div>
        </div>

        <div className="secao2">
            <div className="cont2">
                <div className="card">
                    <img className='imgcard' src="https://m.media-amazon.com/images/I/413UlH+hSRS._SL500_.jpg" alt="" />
                    <h4>PawSense</h4>
                    <p className="preco">R$ 149,99</p>
                </div>
                <div className="contd">
                    <h1>Novidades</h1>
                    <h2>Coleira Inteligente para Animais de Estimação: Monitoramento Avançado de Saúde</h2>
                    <p>Imagine uma coleira elegante e confortável que vai além do seu papel tradicional e se transforma em um dispositivo multifuncional de monitoramento de saúde. Essa coleira inteligente é equipada com sensores de alta precisão capazes de medir os batimentos cardíacos do animal, oferecendo uma visão abrangente do ritmo cardíaco e sua variação ao longo do tempo. Isso permite que os tutores acompanhem as mudanças na saúde cardíaca de seus animais de estimação e identifiquem possíveis problemas precocemente.</p>
                    {/* <button className='bnav'>Agendar</button> */}
                </div>
            </div>
        </div>

        <div className="secao3">
            <div className="cont3">
                <h1 className='titrede'>Acompanhe nossas redes sociais</h1>
                <div className="redes">
                    <div className='linha1'>
                        <div className="rede">
                            <img className="redeimg" src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />
                            <p>Facebook</p>
                        </div>
                        <div className="rede">
                            <img className="redeimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png" alt="" />
                            <p>Instagram</p>
                        </div>
                    </div>
                    <div className='linha2'>
                        <div className="rede">
                            <img className="redeimg" src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2-1.png" alt="" />
                            <p>Twitter</p>
                        </div>
                        <div className="rede">
                            <img className="redeimg" src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="" />
                            <p>Youtube</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
)
}
export default Home
