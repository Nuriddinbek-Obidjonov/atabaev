import { useTranslation } from 'react-i18next'

function MainPage() {

  const [t, i18n] = useTranslation()

  return (
    <div className='mb-10' style={{backgroundImage: 'url("https://media.istockphoto.com/id/1411304340/photo/two-modern-buildings-with-glass-windows-architecture-design-of-buildings-office-space-houses.jpg?s=612x612&w=0&k=20&c=KQA6R0B5lp8-rcdFO9knPiSz96NiZBCJQBQMlMoXT7U=")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', paddingBottom: '70px', paddingTop: '100px'}}>
        <div className='container'>
            <div className='flex flex-col text-white'>
                <h1 className='sm:text-5xl md:text-7xl lg:text-8xl font-semibold py-20 w-3/4'>{t('mainpage.title')}</h1>
                <p>{t('mainpage.slogan')}</p>
                <div className='py-10'>
                    <button className='border-2 border-white border-sloid rounded-[50px] px-5 py-2'>{t('mainpage.btnLeft')}</button>
                    <button className='border-2 border-white border-sloid rounded-[50px] px-5 py-2 ml-5'>{t('mainpage.btnRight')}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPage