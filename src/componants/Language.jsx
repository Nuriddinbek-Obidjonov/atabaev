import { useTranslation } from "react-i18next"

function Language() {

  const [t, i18n] = useTranslation()

  const languages = localStorage.getItem('i18nextLng') || 'uz'

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value
    i18n.changeLanguage(selectedLanguage)
  }
  
  return (
      <select name="langs" id="" className="bg-transparent border-none" onChange={changeLanguage} value={languages}>
        <option value="uz" className="text-black bg-slate-300">UZ</option>
        <option value="en" className="text-black bg-slate-300">EN</option>
        <option value="ru" className="text-black bg-slate-300">RU</option>
      </select>
  )
};
export default Language;