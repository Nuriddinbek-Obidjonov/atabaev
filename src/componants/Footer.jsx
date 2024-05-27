import logo from '../assets/logo.png'
import instagram from '../assets/instagram.svg'
import telegram from '../assets/telegram.svg'

function Footer() {
  return (
    <div className='bg-orange-300 py-20'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                <div>
                    <img src={logo} alt="logo" width={'150px'}/>
                    <h2 className='my-5 text-2xl font-semibold'>Subscribe to our social networks</h2>
                    <div className='mt-5'>
                        <a href="https://instagram.com/_nuriddinbek__"><img src={instagram} alt="instagram" width={'30px'} className='inline bg-slate-950 rounded-[50%] w-[60px] p-[15px]'/></a>
                        <a href="https://t.me/nuriddinbek_1"><img src={telegram} alt="telegram" width={'30px'} className='inline bg-slate-950 rounded-[50%] w-[60px] p-[15px] ml-5'/></a>
                    </div>
                </div>
                <div>
                    <h2 className='mt-10 sm:mt-0 mb-5 text-2xl font-semibold'>Our company</h2>
                    <p>Enterprises</p>
                    <p>About Us</p>
                    <p>News</p>
                    <p>Our Projects</p>
                </div>
                <div>
                    <h2 className='mt-10 md:mt-0 mb-5 text-2xl font-semibold'>Communication</h2>
                    <p>+998974839999</p>
                    <p>+998997126666</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer