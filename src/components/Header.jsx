import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
return (
    <div>
      <div className='Nbar'>
        <img className='petlogo' src="https://media.discordapp.net/attachments/1138062582964551720/1140602698648014938/logo.png" alt="" />
        <h1 className='hnav'>Pet care</h1>
        <div className="link">
            <p className='pnav'><a href="/">Home</a></p>
            <p className='pnav'><a href="/sobre">Sobre nós</a></p>
            <p className='pnav'><a href="/tecno">Nossa inovação</a></p>
            {/* <p className='pnav'><a href="/">Contato</a></p> */}
        </div>
        {/* <button className='bnav'>Agendar</button> */}
      </div>
    </div>
)
}
export default Header