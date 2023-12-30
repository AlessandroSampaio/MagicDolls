import logo from '../../assets/images/logo.png';
import instagram from '../../assets/images/svg/instagram.svg';
import pinterest from '../../assets/images/svg/pinterest.svg';

export function Footer() {
  return (
    <div className="w-full mt-8 bg-black-900 flex align-middle items-center justify-between">
      <div>
        <a href='/' className='flex items-center py-4 px-8'>
          <img src={logo} alt='magic dolls' className='h-20 mr-2' />
        </a>
      </div>
      <div className='flex gap-6 mr-4'>
        <a
          href="https://www.instagram.com/magicdolls.arts?igsh=eWZiZzUwMWE4cWo1"
          className='flex align-middle items-center gap-1 text-gray-100'
        >
          <img src={instagram} alt='instagram' className='size-12' />
          <p className='mobile:hidden '>Instagram</p>
        </a>
        <a
          href="https://pin.it/5RFfkXi"
          className='flex align-middle items-center gap-1 text-gray-100'
        >
          <img src={pinterest} alt='pinterest' className='size-12' />
          <p className='mobile:hidden'>Pinterest</p>
        </a>
      </div>
    </div>
  );
}
