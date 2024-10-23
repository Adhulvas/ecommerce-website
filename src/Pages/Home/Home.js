import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <main>
      <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home