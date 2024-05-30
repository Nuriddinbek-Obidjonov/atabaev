import axios from 'axios'
import React, { useState } from 'react'
import tick from '../assets/tick.gif'
import { useTranslation } from 'react-i18next'

function SendMessage() {

    const [t, i18n] = useTranslation()

    const [loading, setLoading] = useState(false)

    const sendForm = (e) => {
        e.preventDefault()
        document.querySelector('#modal').classList.add('modal')
        setTimeout(() => {
            document.querySelector('#modal').classList.remove('modal')
        }, 2500)
        setLoading(true)
        const token = '7445647385:AAG2Cds7gH5PC0fOh6s0x-DoP7tp5zMvKNw'
        const chat_id = 1777311435
        const url = `https://api.telegram.org/bot${token}/sendMessage`
        const name = document.getElementById('name').value
        const phone = document.getElementById('phone').value
        const info = document.getElementById('info').value
        const message = `Ism: ${name} \nPhone: ${phone} \nAdditional info: ${info}`

        axios({
            url: url,
            method: 'POST',
            data: {
                'chat_id': chat_id,
                'text': message
            }
        }).then((res) => {
            document.getElementById('name').value = ''
            document.getElementById('phone').value = ''
            document.getElementById('info').value = ''
        }).catch((err) => console.log('err')).finally(() => setLoading(false))
    }

  return (
    <div id='communication' className='mb-10 md:mb-20'>
        <div id='modal' className='hidden'>
            <div>
                <img src={tick} alt="tick" />
                <p className='font-semibold text-4xl pb-5'>{t('sendmessage.modal.title')}</p>
                <p className='text-2xl pb-5'>{t('sendmessage.modal.info')}</p>
            </div>
        </div>
        <div className='container'>
        <div className='flex rounded-[30px] px-5 md:px-20 py-10' style={{background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://www.cio.com/wp-content/uploads/2023/05/data_analytics_risk_assessment_tracking_trends_graphs_by_ipopba_gettyimages-1150397416_2400x1600-100828857-orig-7.jpg?quality=50&strip=all&w=1024")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className='grow-1 md:flex-1 animation-bottom'>
                <h2 className='text-white text-3xl sm:w-3/4'>{t('sendmessage.title')}</h2>
                <form action="" className='pt-5 md:pt-10' onSubmit={sendForm}>
                    <input id='name' type="text" placeholder={t('sendmessage.form.nameplaceholder')} className='bg-slate-300 rounded-[50px] py-2 px-5 w-full my-5' required/>
                    <input id='phone' type="tel" placeholder={t('sendmessage.form.phoneplaceholder')} className='bg-slate-300 rounded-[50px] py-2 px-5 w-full md:my-5' required/>
                    <textarea name="" id="info" placeholder={t('sendmessage.form.commentplaceholder')} className='bg-slate-300 rounded-[20px] py-2 px-5 w-full h-[150px] my-5'></textarea>
                    <button type='submit' className='border-solid border-2 border-slate-200 bg-slate-500 rounded-[50px] py-2 px-20 text-white'>{loading ? `${t('sendmessage.form.sendbtnsendingtext')}` : `${t('sendmessage.form.sendbtntext')}`}</button>
                </form>
            </div>
            <div className='md:flex-1'>

            </div>
        </div>
        </div>
    </div>
  )
}

export default SendMessage