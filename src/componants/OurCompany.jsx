import { useTranslation } from 'react-i18next'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { useState } from 'react'

function OurCompany() {
    
  const [countOn, setCountOn] = useState(false)
  const [t, i18n] = useTranslation()

  return (
    <div id='aboutus' style={{backgroundImage: 'url("https://www.se.com/ww/en/assets/v2/564/media/230667/900/709934422-Buildings-Facts-IC-1920x1080.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className='mt-10 mb-10 pt-5 pb-[150px]'>
        <div className='container'>
            <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
                <h2 className='text-white text-3xl font-medium py-10'>{t('ourcompany.title')}</h2>
                <div className='grid grid-cols-2 sm:grid-cols-4 text-white'>
                    <div className='mr-10'>
                        <p className='text-4xl sm:text-5xl font-semibold py-3'>
                            {countOn && <CountUp start={0} end={120} duration={3} delay={0}/>}+
                        </p>
                        <p>{t('ourcompany.card1')}</p>
                    </div>
                    <div className='mr-10'>
                        <p className='text-4xl sm:text-5xl font-semibold py-3'>         {countOn && <CountUp start={0} end={43} duration={3} delay={0}/>}+
                        </p>
                        <p>{t('ourcompany.card2')}</p>
                    </div>
                    <div className='mr-10'>
                        <p className='text-4xl sm:text-5xl font-semibold py-3'>{countOn && <CountUp start={0} end={250} duration={3} delay={0}/>}+
                        </p>
                        <p>{t('ourcompany.card3')}</p>
                    </div>
                    <div className='mr-10'>
                        <p className='text-4xl sm:text-5xl font-semibold py-3'>
                        {countOn && <CountUp start={0} end={2} duration={3} delay={0}/>}+
                        </p>
                        <p>{t('ourcompany.card4')}</p>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    </div>
  )
}

export default OurCompany