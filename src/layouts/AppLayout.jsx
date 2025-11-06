import { Outlet } from "react-router"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
const AppLayout = () => {
    return (
        <div className=' absolute flex flex-col min-h-screen'>
           <div className='w-[89%] m-auto'>
               <Nav/>

               <main className='grow'>
                 <Outlet/>
               </main>
            </div>
            <Footer/>
        </div>
    )
}

export default AppLayout