import { useTranslation } from "react-i18next"
import image1 from '../assets/modern.jpg'
import image2 from '../assets/traditional.jpg'
import image3 from '../assets/luxury.jpg'
import image4 from '../assets/expensive.jpg'

function AllOurNews() {
    
    const [t, i18n] = useTranslation()

    return (
    <div id="news">
        <div className='container'>
            <h2 className='text-center text-xl sm:text-3xl font-bold pb-10'>{t('allournews.title')}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='rounded-[20px] flex flex-col sm:flex-row justify-between overflow-hidden shadow-xl animation-left'>
                    <div className="flex-1 sm:pr-5">
                        <img src={image1} alt="image1" className="h-full"/>
                    </div>
                    <div className="flex-1 py-5 px-5 sm:px-0 sm:pr-5">
                        <span className="w-[150px] h-[30px] rounded-[50px] bg-gray-950 block border-2 border-solid border-gray-950 hover:bg-white duration-500"></span>
                        <p className="my-3 text-xl font-semibold">{t('allournews.card1.title')}</p>
                        <p>{t('allournews.card1.info')}</p>
                    </div>
                </div>
                <div className='rounded-[20px] flex flex-col sm:flex-row justify-between overflow-hidden shadow-xl animation-right'>
                    <div className="flex-1 sm:pr-5">
                        <img src={image2} alt="image2" className="h-full"/>
                    </div>
                    <div className="flex-1 py-5 px-5 sm:px-0 sm:pr-5">
                        <span className="w-[150px] h-[30px] rounded-[50px] bg-gray-950 block border-2 border-solid border-gray-950 hover:bg-white duration-500"></span>
                        <p className="my-3 text-xl font-semibold">{t('allournews.card2.title')}</p>
                        <p>{t('allournews.card2.info')}</p>
                    </div>
                </div>
                <div className='rounded-[20px] flex flex-col sm:flex-row justify-between overflow-hidden shadow-xl animation-left'>
                    <div className="flex-1 sm:pr-5">
                        <img src={image3} alt="" className="h-full"/>
                    </div>
                    <div className="flex-1 py-5 px-5 sm:px-0 sm:pr-5">
                        <span className="w-[150px] h-[30px] rounded-[50px] bg-gray-950 block border-2 border-solid border-gray-950 hover:bg-white duration-500"></span>
                        <p className="my-3 text-xl font-semibold">{t('allournews.card3.title')}</p>
                        <p>{t('allournews.card3.info')}</p>
                    </div>
                </div>
                <div className='rounded-[20px] flex flex-col sm:flex-row justify-between overflow-hidden shadow-xl animation-right'>
                    <div className="flex-1 sm:pr-5">
                        <img src={image4} alt="" className="h-full"/>
                    </div>
                    <div className="flex-1 py-5 px-5 sm:px-0 sm:pr-5">
                        <span className="w-[150px] h-[30px] rounded-[50px] bg-gray-950 block border-2 border-solid border-gray-950 hover:bg-white duration-500"></span>
                        <p className="my-3 text-xl font-semibold">{t('allournews.card4.title')}</p>
                        <p>{t('allournews.card4.info')}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllOurNews