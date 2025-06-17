"use client"
import Link from 'next/link';
import './navbar.css';
import ButtonBorder from '../Buttons/Button_border/ButtonBorder';
import ThemeSwap from '../Buttons/Theme_swap/ThemeSwap';
import { useTheme } from '../Theme/useTheme';
import Logo from '../Logo/Logo';
import { FiUser } from 'react-icons/fi'; // profile icon

export default function NavBar() {
  const { swapTheme } = useTheme();

  return (
    <div className='p-3 sticky top-0 backdrop-blur-xl z-50'>
      <div className='flex justify-center md:justify-around items-center max-w-[95%] mx-auto'>

        {/* Logo */}
        <Link href={'/'}>
          <div className='mb-3'>
            <Logo />
          </div>
        </Link>

        {/* Right section: theme toggle + logout + profile */}
        <div className='flex items-center space-x-5'>

          {/* Theme toggle */}
          <div className='text-xl cursor-pointer' onClick={swapTheme}>
            <ThemeSwap />
          </div>

          {/* Logout button */}
          <Link href={'/logout'}>
            <ButtonBorder className="text-red-500">Logout</ButtonBorder>
          </Link>

          {/* Profile icon (optional) */}
          <div className="text-xl cursor-pointer">
            <FiUser />
          </div>

        </div>
      </div>
    </div>
  );
}
