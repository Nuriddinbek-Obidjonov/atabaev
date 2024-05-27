import React from 'react'

function MainPage() {
  return (
    <div style={{backgroundImage: 'url("https://media.istockphoto.com/id/1411304340/photo/two-modern-buildings-with-glass-windows-architecture-design-of-buildings-office-space-houses.jpg?s=612x612&w=0&k=20&c=KQA6R0B5lp8-rcdFO9knPiSz96NiZBCJQBQMlMoXT7U=")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', paddingBottom: '70px', paddingTop: '100px'}}>
        <div className='container'>
            <div className='flex flex-col text-white'>
                <h1 className='sm:text-5xl md:text-7xl lg:text-8xl font-semibold py-20'>ATAEV BAHODIR <br /> BUILDING</h1>
                <p>Excellence in everything</p>
                <div className='py-10'>
                    <button className='border-2 border-white border-sloid rounded-[50px] px-5 py-2'>Our Projects</button>
                    <button className='border-2 border-white border-sloid rounded-[50px] px-5 py-2 ml-5'>Connection</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPage