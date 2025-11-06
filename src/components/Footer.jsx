import { FaMoon, FaSearch } from "react-icons/fa"

const Footer = () => {
    return (
    <>
        <div className='bg-gray-200 flex flex-col bottom-[9%] w-[89%] py-12 left-[5%] rounded-xl items-center gap-4 absolute'>
            <h3 className='text-2xl font-robotoMono tracking-widest'>Subscribe</h3>
            <p className='text-2xl tracking-wide'>Stay in the know with AIDA news and events</p>
            <div className='w-[50%] bg-gray-300 flex justify-between items-center border border-gray-300 rounded-lg overflow-hidden'>
                <input className=' p-3 ' type='text' placeholder="Your Email Address"/>
                <button className=' bg-black text-sm text-white px-4 rounded-lg py-2 mr-2 '>Subscribe</button>
            </div>
            
            <p className='text-sm'>Please check your spam fot the activation email after subscribing</p>
        </div>
        <div className='pt-[150px] h-[400px] bg-black text-white flex justify-around items-start'>

            <div className='flex flex-col gap-2'>
                <img className='w-[' src='Frame 47.png' alt='aida logo'/>
                <div className='flex gap-4'>
                    <button><FaMoon/></button>
                    <button><FaSearch/></button>
                </div>
            </div>

            <img className='h-[150px]' src='Frame 48.png' alt='decor'/>

            <ul className='flex flex-col gap-4'>
                <li><a href=''>About</a></li>
                <li><a href=''>Join the Community</a></li>
                <li><a href=''>Privacy Policy</a></li>
            </ul>

            <div>
                <p className='mb-5'>Partner with us</p>

                <ul className='flex flex-col gap-1'>
                    <li className='text-sm'><a href=''>Sponsorship</a></li>
                    <li className='text-sm'><a href=''>Support us</a></li>
                </ul>

            </div>

            <div>
                <h3 className='mb-5 '>Contact us</h3>

                <div className='flex flex-col gap-1'>
                    <p className='text-sm'>hello@aidesign.africa</p>
                    <p className='text-sm'>+233 8XX XXXX XXX</p>
                </div>
                
            </div>
        </div>
    </>
    )
}

export default Footer