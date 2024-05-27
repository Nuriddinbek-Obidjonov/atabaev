import AllOurNews from './componants/AllOurNews'
import AtaevBuilding from './componants/AtaevBuilding'
import Footer from './componants/Footer'
import MainPage from './componants/MainPage'
import Navbar from './componants/Navbar'
import OurCompany from './componants/OurCompany'
import OurProjects from './componants/OurProjects'
import OurService from './componants/OurService'
import SendMessage from './componants/SendMessage'
import YourDreamHome from './componants/YourDreamHome'

function App() {

  return (
    <div>
      <Navbar/>
      <MainPage/>
      <OurService/>
      <OurCompany/>
      <YourDreamHome/>
      <OurProjects/>
      <AllOurNews/>
      <AtaevBuilding/>
      <SendMessage/>
      <Footer/>
    </div>
  )
}

export default App
