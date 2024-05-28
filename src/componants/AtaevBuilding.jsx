import { useTranslation } from "react-i18next"

function AtaevBuilding() {

  const [t, i18n] = useTranslation()

  return (
    <div id="ouradvantages" className='h-[600px] mt-[100px] text-white py-20 mb-20' style={{backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url("https://brightoncollege.com/wp-content/uploads/2020/05/river-near-city-buildings-under-cloudy-sky-1209978-1.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <div className='container'>
            <h3 className='text-3xl w-4/12'>{t('atabaev.slogan')}</h3>
            <h2 className='text-6xl py-10 w-1/2'>{t('atabaev.title')}</h2>
            <p className='w-4/12'>{t('atabaev.info')}</p>
        </div>
    </div>
  )
}

export default AtaevBuilding