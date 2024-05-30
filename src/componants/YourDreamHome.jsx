import luxury from '../assets/luxury.jpg'
import fashion from '../assets/fashion.jpg'
import traditional from '../assets/traditional.jpg'
import compact from '../assets/compact.jpg'
import expensive from '../assets/expensive.jpg'
import modern from '../assets/modern.jpg'
import { useTranslation } from 'react-i18next'

function YourDreamHome() {
    
  const [t, i18n] = useTranslation()

  return (
    <div className='mb-10'>
            <h2 className='text-center text-xl sm:text-3xl font-bold pb-10'>{t('yourdreamhome.title')}</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3'>
                <div className='w-full h-[200px] sm:h-[300px]'>
                    <img src={luxury} className='w-full h-full' alt="luxury" />
                </div>
                <div className='w-full h-[200px] sm:h-[300px]'>
                    <img src={fashion} className='w-full h-full' alt="fashion" />
                </div>
                <div className='w-full h-[200px] sm:h-[300px]'>
                    <img src={traditional} className='w-full h-full' alt="traditional" />
                </div>
                <div className='w-full h-[200px] sm:h-[300px]'>
                    <img src={compact} className='w-full h-full' alt="compact" />
                </div>
                <div className='w-full h-[200px] sm:h-[300px]'>
                    <img src={expensive} className='w-full h-full' alt="expensive" />
                </div>
                <div className='w-full h-[200px] sm:h-[300px]'>
                    <img src={modern} className='w-full h-full' alt="modern" />
                </div>
            </div>
    </div>
  )
}

export default YourDreamHome