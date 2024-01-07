import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Layout } from './pages/Layout.tsx';
import Questions from './pages/Questions/index.tsx';
import { Catalogo } from './pages/Catalog/index.tsx';
import { Budget } from './pages/Budget/index.tsx';

export default function App() {
  return (
    <div className='h-dvh w-full flex'>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/orcamento' element={<Budget />} />
            <Route path='/catalogo' element={<Catalogo />} />
            <Route path='/sobre' element={<About />} />
            <Route path='/duvidas-frequentes' element={<Questions />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
