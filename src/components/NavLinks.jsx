import { Link } from "react-router"

const NavLinks = ()=> {
    return(
        <ul className='flex gap-12'>
            <li className='font-matter text-[14px] uppercase'>
               <a href='#'>About</a>
            </li>
            <li className='font-inter text-[14px] uppercase'>
                <a href='#'>Research</a>
            </li>
            <li className='font-inter text-[14px] uppercase'>
                <a href='#'>learning</a>
            </li>
            <li className='font-inter text-[14px] uppercase'>
                <a href='#'>community</a>
            </li>
            <li className='font-inter text-[14px] uppercase'> 
                <a href='#'>Resources</a>
            </li>
        </ul>
    )
}

export default NavLinks