import { useTranslation } from 'react-i18next'
import coin from '../assets/ourservice_coin.png'
import notebook from '../assets/ourservice_notebook.png'
import setting from '../assets/ourservice_setting.png'
import truck from '../assets/ourservice_truck.png'

function OurService() {

  const [t, i18n] = useTranslation()

  return (
    <div id='information' className='mb-20'>
        <div className='container'>
            <h2 className='text-center text-xl sm:text-3xl font-bold pt-5 pb-10'>{t('ourservice.title')}</h2>
            <div className='w-full grid grid-cols-1 md:grid-cols-5 gap-4 text-white'>
                <div className='md:col-span-3 rounded-[20px] bg-gray-900 flex items-center justify-between pl-10 overflow-hidden h-[210px] animation-left'>
                    <p>{t('ourservice.card1')}</p>
                    <img src={coin} alt="" />
                </div>
                <div className='md:col-span-2 rounded-[20px] bg-gray-900 flex items-center justify-between pl-10 overflow-hidden h-[210px] animation-right'>
                    <p>{t('ourservice.card2')}</p>
                    <img src={notebook} alt="" />
                </div>
                <div className='md:col-span-2 rounded-[20px] bg-gray-900 flex items-center justify-between pl-10 overflow-hidden h-[210px] animation-bottom'>
                    <p>{t('ourservice.card3')}</p>
                    <img src={setting} alt="" />
                </div>
                <div className='md:col-span-3 rounded-[20px] bg-gray-900 flex items-center justify-between pl-10 overflow-hidden h-[210px] animation-bottom'>
                    <p>{t('ourservice.card4')}</p>
                    <img src={truck} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurService