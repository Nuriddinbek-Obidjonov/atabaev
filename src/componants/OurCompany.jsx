import React from 'react'
import { useTranslation } from 'react-i18next'

function OurCompany() {
    
  const [t, i18n] = useTranslation()

  return (
    <div id='aboutus' style={{backgroundImage: 'url("https://www.se.com/ww/en/assets/v2/564/media/230667/900/709934422-Buildings-Facts-IC-1920x1080.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className='mt-10 mb-10 pt-5 pb-[150px]'>
        <div className='container'>
            <h2 className='text-white text-3xl font-medium py-10'>{t('ourcompany.title')}</h2>
            <div className='grid grid-cols-2 sm:grid-cols-4 text-white'>
                <div className='mr-10'>
                    <p className='text-4xl sm:text-5xl font-semibold py-3'>120+</p>
                    <p>{t('ourcompany.card1')}</p>
                </div>
                <div className='mr-10'>
                    <p className='text-4xl sm:text-5xl font-semibold py-3'>43+</p>
                    <p>{t('ourcompany.card2')}</p>
                </div>
                <div className='mr-10'>
                    <p className='text-4xl sm:text-5xl font-semibold py-3'>250+</p>
                    <p>{t('ourcompany.card3')}</p>
                </div>
                <div className='mr-10'>
                    <p className='text-4xl sm:text-5xl font-semibold py-3'>2+</p>
                    <p>{t('ourcompany.card4')}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurCompany