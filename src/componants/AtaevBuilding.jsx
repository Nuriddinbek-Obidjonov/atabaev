import { useTranslation } from "react-i18next"

function AtaevBuilding() {

  const [t, i18n] = useTranslation()

  return (
    <div id="ouradvantages" className='mt-[100px] text-white py-10 md:py-20 mb-10 md:mb-20' style={{backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url("https://brightoncollege.com/wp-content/uploads/2020/05/river-near-city-buildings-under-cloudy-sky-1209978-1.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <div className='container'>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              <div>
                <h3 className='text-xl md:text-3xl'>{t('atabaev.slogan')}</h3>
                <h2 className='text-3xl md:text-6xl py-10'>{t('atabaev.title')}</h2>
                <p>{t('atabaev.info')}</p>
              </div>
              <div></div>
              <div></div>
            </div>
        </div>
    </div>
  )
}

export default AtaevBuilding