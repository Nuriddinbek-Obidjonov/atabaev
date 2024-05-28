import { useState } from 'react'
import logo from '../assets/logo.png'
import { navData } from '../constants/Data'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import phone from '../assets/phone.svg'
import Language from './Language'

export function Navbar() {

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
      <div className={`fixed z-50 top-0 left-0 w-full text-white hidden sm:block ${color ? 'bg-sky-950' : ''}`}>
        <div className='container-nav'>
          <nav className='navigation'>
            <ul className='flex font-semibold list-none justify-between items-center py-5'>
              {navData.map((data, i) => {
                if (data.includes('logo')) {
                  return (
                    <li key={i} className='leading-[20px]'><img src={logo} alt="logo" className='h-[60px]'/></li>
                  )
                } else {
                  return <li key={i}><a href={`#${data.split(' ').join('').toLowerCase()}`}>{data}</a></li>
                }
              })}
              <li><Language/></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className='sm:hidden'>
        <div className={`fixed z-40 top-0 left-0 w-full text-white ${color ? 'bg-sky-950' : ''}`}>
            <nav>
                {navData.map((data, i) => {
                  if (data.includes('logo')) {
                    return (
                      <div key={i} className='flex justify-between py-3 px-5'>
                        <img src={menu} alt="menu" width={'30px'} onClick={() => setMenuOpen(true)}></img>
                        <img src={logo} alt="logo" className='h-[60px]'/>
                        <img src={phone} alt="menu" width={'30px'}></img>
                      </div>
                    )
                  }
                })}
            </nav>
        </div>

        <div className={`fixed bg-cyan-950 h-screen z-50 top-0 left-0 w-[70%] text-white ${menuOpen ? 'block' : 'hidden'}`}>
            <img src={close} alt="close" width={'30px'} className='absolute top-5 right-5' onClick={() => setMenuOpen(false)}/>
            <ul className='flex flex-col list-none pl-10 pt-20'>
              {navData.map((data, i) => {
                if (data.includes('logo')) {
                  return (
                    ''
                  )
                } else {
                  return <li key={i} className='leading-[50px]' onClick={() => setMenuOpen(false)}><a href={`#${data.split(' ').join('').toLowerCase()}`}>{data}</a></li>
                }
              })}
              <li><Language/></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar