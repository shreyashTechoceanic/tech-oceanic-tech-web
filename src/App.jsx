import './App.css'
import  NavBar  from './components/navBar/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
   <>
   <div className='w-full flex flex-col items-center gap-10'>
    <div className='w-[1270px]'>
    <NavBar/>
    </div>
    <Outlet/>
   </div>
   </>
  )
}

export default App
