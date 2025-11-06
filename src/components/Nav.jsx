import { FiMoon, FiSearch } from "react-icons/fi";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
const nav = ()=>{
    return(
        <nav className='flex pt-8 items-center justify-between'>
            
            <Logo/>
            <div className='flex items-center  '>
            <NavLinks/>
            
                <button className='bg-gray-100 ml-12 mr-4 font-bold p-2 rounded-full text-lg'>
                    <FiMoon/></button>
                
                <button className='bg-gray-200 font-bold p-2 rounded-full text-lg'>
                    <FiSearch /></button>
                
            </div>
        </nav>
    )
}

export default nav;