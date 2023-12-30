import { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { Squash as Hamburger } from 'hamburger-react';
import { HeaderLink } from './HeaderLink';

export function Header () {

  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <nav className='bg-white shadow-pink-flamingo-300 shadow-lg'>
      <div className="mx-auto px-4">
        <div className="flex justify-between w-full ">
          <div className="flex  w-full justify-between">
            {/* Logo */}
            <div>
              <a href='/' className='flex items-center py-4 px-2'>
                <img src={logo} alt='magic dolls' className='h-20 mr-2' />
              </a>
            </div>

            {/* Menu */}
            <div className='mobile:hidden flex items-center space-x-1 w-full justify-end'>
              <HeaderLink href='/' label='Inicio' />
              <HeaderLink href='/catalogo' label='Catalogo' />
              <HeaderLink href='/orcamento' label='Orçamento' />
              <HeaderLink href='/duvidas-frequentes' label='Dúvidas Frequentes' />
              <HeaderLink href='/sobre' label='Sobre nós' />
            </div>

            {/* Mobile menu */}
            <div className="normal:hidden flex items-center justify-end pr-8 w-full">
              <Hamburger toggled={isNavOpen} toggle={setNavOpen} color='#f562f5'/>
            </div>
          </div>
        </div>
        <div className={`${isNavOpen ? '' : 'hidden'} flex flex-col`}>
          <HeaderLink mobile href='/' label='Inicio' />
          <HeaderLink mobile href='/catalogo' label='Catalogo' />
          <HeaderLink mobile href='/orcamento' label='Orçamento' />
          <HeaderLink mobile href='/duvidas-frequentes' label='Dúvidas Frequentes' />
          <HeaderLink mobile href='/sobre' label='Sobre nós' />
        </div>
      </div>
    </nav>
  );
}
