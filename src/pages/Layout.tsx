import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Layout() {
  return (
    <div className='flex flex-col w-full'>
      <Header />
      <div className="flex-1 h-full w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
