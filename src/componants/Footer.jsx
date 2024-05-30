import logo from '../assets/logo.png'
import instagram from '../assets/instagram.svg'
import telegram from '../assets/telegram.svg'
import { useTranslation } from 'react-i18next'

function Footer() {

    const [t, i18n] = useTranslation()

  return (
    <div className='bg-orange-300 py-5 sm:py-20'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                <div>
                    <img src={logo} alt="logo" width={'150px'}/>
                    <h2 className='my-5 text-2xl font-semibold'>{t('footer.card1.title')}</h2>
                    <div className='mt-5'>
                        <a href="https://instagram.com/_nuriddinbek__"><img src={instagram} alt="instagram" width={'30px'} className='inline bg-slate-950 rounded-[50%] w-[60px] p-[15px]'/></a>
                        <a href="https://t.me/nuriddinbek_1"><img src={telegram} alt="telegram" width={'30px'} className='inline bg-slate-950 rounded-[50%] w-[60px] p-[15px] ml-5'/></a>
                    </div>
                </div>
                <div>
                    <h2 className='mt-5 sm:mt-0 sm:mb-5 text-2xl font-semibold'>{t('footer.card2.title')}</h2>
                    <p>{t('footer.card2.text1')}</p>
                    <p>{t('footer.card2.text2')}</p>
                    <p>{t('footer.card2.text3')}</p>
                    <p>{t('footer.card2.text4')}</p>
                </div>
                <div>
                    <h2 className='mt-5 sm:mb-5 md:mt-0 text-2xl font-semibold'>{t('footer.card3.title')}</h2>
                    <p>{t('footer.card3.text1')}</p>
                    <p>{t('footer.card3.text2')}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer