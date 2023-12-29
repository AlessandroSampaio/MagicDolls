import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Layout } from './pages/Layout.tsx';
import Questions from './pages/Questions/index.tsx';

export function App() {
  return (
    <div className='h-dvh w-full flex'>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/sobre' element={<About />} />
            <Route path='/duvidas-frequentes' element={<Questions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
