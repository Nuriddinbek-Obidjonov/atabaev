import coin from '../assets/ourservice_coin.png'
import notebook from '../assets/ourservice_notebook.png'
import setting from '../assets/ourservice_setting.png'
import truck from '../assets/ourservice_truck.png'

function OurService() {
  return (
    <div>
        <div className='container'>
            <h2 className='text-center text-3xl font-medium py-10'>Our Services</h2>
            <div className='w-full grid grid-cols-1 md:grid-cols-5 gap-4 text-white'>
                <div className='md:col-span-3 rounded-[20px] bg-gray-900 flex items-center justify-between pl-10 overflow-hidden h-[210px] animation-left'>
                    <p>
                    You can get free information from our company's specialists
                    </p>
                    <img src={coin} alt="" />
                </div>
                <div className='md:col-span-2 rounded-[20px] bg-gray-900 flex items-center justify-between pl-10 overflow-hidden h-[210px] animation-right'>
                    <p>
                    Documents clearance
                    </p>
                    <img src={notebook} alt="" />
                </div>
                <div className='md:col-span-2 rounded-[20px] bg-gray-900 flex items-center justify-between pl-10 overflow-hidden h-[210px] animation-bottom'>
                    <p>
                    Repair correction service
                    </p>
                    <img src={setting} alt="" />
                </div>
                <div className='md:col-span-3 rounded-[20px] bg-gray-900 flex items-center justify-between pl-10 overflow-hidden h-[210px] animation-bottom'>
                    <p>
                    Team of professionals
                    </p>
                    <img src={truck} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurService