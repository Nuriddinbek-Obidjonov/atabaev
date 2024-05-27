import luxury from '../assets/luxury.jpg'
import fashion from '../assets/fashion.jpg'
import traditional from '../assets/traditional.jpg'
import compact from '../assets/compact.jpg'
import expensive from '../assets/expensive.jpg'
import modern from '../assets/modern.jpg'

function YourDreamHome() {
  return (
    <div>
            <h2 className='text-center text-3xl font-medium py-10'>Your Dream Home</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3'>
                <div className='w-full h-[300px]'>
                    <img src={luxury} className='w-full h-full' alt="luxury" />
                </div>
                <div className='w-full h-[300px]'>
                    <img src={fashion} className='w-full h-full' alt="fashion" />
                </div>
                <div className='w-full h-[300px]'>
                    <img src={traditional} className='w-full h-full' alt="traditional" />
                </div>
                <div className='w-full h-[300px]'>
                    <img src={compact} className='w-full h-full' alt="compact" />
                </div>
                <div className='w-full h-[300px]'>
                    <img src={expensive} className='w-full h-full' alt="expensive" />
                </div>
                <div className='w-full h-[300px]'>
                    <img src={modern} className='w-full h-full' alt="modern" />
                </div>
            </div>
    </div>
  )
}

export default YourDreamHome