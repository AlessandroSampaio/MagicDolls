import { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { Squash as Hamburger } from 'hamburger-react';

export function Header () {

  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <nav className='bg-white shadow-primary-light shadow-lg'>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between w-full ">
          <div className="flex space-x-7 w-full">
            {/* Logo */}
            <div>
              <a href='/' className='flex items-center py-4 px-2'>
                <img src={logo} alt='magic dolls' className='h-20 mr-2' />
              </a>
            </div>

            {/* Menu */}
            <div className='hidden md:flex items-center space-x-1 w-full justify-end'>
              <a href="/" className="font-roboto py-4 px-2 text-primary border-b-4 border-primary-dark font-semibold">Inicio</a>
              <a href="/catalogo" className="py-4 px-2 text-primary border-b-4 border-primary-dark font-semibold">Catalogo</a>
              <a href="/orcamento" className="py-4 px-2 text-primary border-b-4 border-primary-dark font-semibold">Orçamento</a>
              <a href="/duvidas-frequentes" className="py-4 px-2 text-primary border-b-4 border-primary-dark font-semibold">Dúvidas Frequentes</a>
              <a href="/sobre" className="py-4 px-2 text-primary border-b-4 border-primary-dark font-semibold">Sobre nós</a>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden flex items-center justify-end pr-8 w-full">
              <Hamburger toggled={isNavOpen} toggle={setNavOpen} color='#f562f5'/>
            </div>
          </div>
        </div>
        <div className={`${isNavOpen ? '' : 'hidden'}`}>
          <a href="" className='py-2 pl-2 text-primary-dark hover:bg-primary-light hover:text-white block'>Inicio</a>
          <a href="/catalogo" className='py-2 pl-2 text-primary-dark hover:bg-primary-light hover:text-white block'>Catalogo</a>
          <a href="/orcamento" className='py-2 pl-2 text-primary-dark hover:bg-primary-light hover:text-white block'>Orçamento</a>
          <a href="/duvidas-frequentes" className='py-2 pl-2 text-primary-dark hover:bg-primary-light hover:text-white block'>Dúvidas Frequentes</a>
          <a href="/sobre" className='py-2 pl-2 text-primary-dark hover:bg-primary-light hover:text-white block'>Sobre nós</a>
        </div>
      </div>
    </nav>
  );
}
