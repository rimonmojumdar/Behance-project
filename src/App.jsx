
import Ads from "./Components/Ads"
import Arts from "./Components/Arts"
import Filter from "./Components/Filter"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Search from "./Components/Search"
import Secondart from "./Components/Secondart"
import SecondMenu from "./Components/SecondMenu"


const App = () => {
  return (
    <div>
      <Navbar/>
      <SecondMenu/>
      <Filter/>
      <Arts/>
      <Ads/>
      <Secondart/>
      <Footer/>
    </div>
  )
}

export default App
