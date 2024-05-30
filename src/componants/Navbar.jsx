import { useState } from 'react'
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import phone from '../assets/phone.svg'
import Language from './Language'
import { useTranslation } from 'react-i18next'

export function Navbar() {

    const [t, i18n] = useTranslation()

    const [color, setColor] = useState(false)

    const colorChange = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', colorChange)

    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <div className={`fixed z-50 top-0 left-0 w-full text-white hidden md:block ${color ? 'bg-sky-950' : ''}`}>
        <div className='container-nav'>
          <nav className='navigation'>
            <ul className='flex font-semibold list-none justify-between items-center py-5'>
              <li>
                <a href='#information'>{t('navbar.information')}</a>
              </li>
              <li>
                <a href='#aboutus'>{t('navbar.about')}</a>
              </li>
              <li>
                <a href='#enterprises'>{t('navbar.enterprises')}</a>
              </li>
              <li>
                <a href="#mainpage">
                  <img src={logo} alt="logo" className='h-[60px]'/>
                </a>
              </li>
              <li>
                <a href='#ouradvantages'>{t('navbar.ouradvantages')}</a>
              </li>
              <li>
                <a href='#news'>{t('navbar.news')}</a>
              </li>
              <li>
                <a href='#communication'>{t('navbar.communication')}</a>
              </li>
              <li>
                <Language/>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className='md:hidden'>
        <div className={`fixed z-40 top-0 left-0 w-full text-white ${color ? 'bg-sky-950' : ''}`}>
            <nav>
              <ul className='flex justify-between items-center py-3 px-5'>
                <li>
                    <img src={menu} alt="menu" width={'30px'} onClick={() => setMenuOpen(true)}></img>
                </li>
                <li>
                  <a href="#mainpage">
                    <img src={logo} alt="logo" className='h-[60px]'/>
                  </a>
                </li>
                <li>
                  <a href="tel:+998945082234">
                    <img src={phone} alt="menu" width={'30px'}></img>
                  </a>
                </li>
              </ul>
            </nav>
        </div>

        <div className={`fixed bg-cyan-950 h-screen z-50 top-0 left-0 w-[70%] text-white ${menuOpen ? 'block' : 'hidden'}`}>
            <img src={close} alt="close" width={'30px'} className='absolute top-5 right-5' onClick={() => setMenuOpen(false)}/>
            <ul className='flex flex-col list-none pl-10 pt-20'>
              <li className='leading-[50px]' onClick={() => setMenuOpen(false)}>
                <a href='#information'>{t('navbar.information')}</a>
              </li>
              <li className='leading-[50px]' onClick={() => setMenuOpen(false)}>
                <a href='#aboutus'>{t('navbar.about')}</a>
              </li>
              <li className='leading-[50px]' onClick={() => setMenuOpen(false)}>
                <a href='#enterprises'>{t('navbar.enterprises')}</a>
              </li>
              <li className='leading-[50px]' onClick={() => setMenuOpen(false)}>
                <a href='#ouradvantages'>{t('navbar.ouradvantages')}</a>
              </li>
              <li className='leading-[50px]' onClick={() => setMenuOpen(false)}>
                <a href='#news'>{t('navbar.news')}</a>
              </li>
              <li className='leading-[50px]' onClick={() => setMenuOpen(false)}>
                <a href='#communication'>{t('navbar.communication')}</a>
              </li>
              <li>
                <Language/>
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar