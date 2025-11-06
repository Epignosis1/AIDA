import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"
import Courses from "../components/Courses"
import { ArrowLeft } from "lucide-react"
import Articles from "../components/Article"

const Home = ()=>{
    return (
        <div>
          <div className='bg-gray-100 w-full rounded-3xl my-6 h-[500px]'></div>
          <section className='relative flex py-[70px] flex-col text-center justify-center items-center ml-[60px] gap-8'>
            <h2 className='  font-robotoMono text-[22px] tracking-widest uppercase text-gray-500 '>Who We are</h2>
            <p className=' leading-normal font-light w-[700px] text-4xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, porro. 
                Exercitationem fuga, reiciendis quis libero 
            </p>
            <button className='bg-gray-200 font-inter w-[130px] p-4 rounded-full'>Join us</button>
            <div className='absolute top-[40%] left-0 bg-gray-100 w-[140px] rounded-2xl h-[140px] '></div>
            <img className=' mt-[30px] w-[250px]'src="/Frame.png" alt=""/>
            <div className='absolute bottom-[2%] right-[5%] bg-gray-100 w-[180px] rounded-2xl h-40 '></div>
           
          </section>

         {/** Research section */}

          <section className='flex my-[150px]  justify-center  gap-12  '>
            <div className='flex w-1/2 flex-col gap-4'>
              <p className='font-robotoMono text-[22px] tracking-widest uppercase text-gray-500'>Research</p>
              <h2 className='text-4xl font-light'>AI & African Designers</h2>
              <p className=' text-gray-500 wrap-break-words whitespace-normal leading-[1.8]  w-[700px] text-lg '>
                Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. <br/> Quas, 
                porro. Exercitationem fuga, reiciendis<br/> quis libero hilk
                tilian golian vreyw tyuop cont wooam tilow jaii <br/> colon tilie opliis oslas tyal
              </p>
              <button className='bg-gray-200 mt-[10px] font-inter w-[130px] p-4 rounded-full'>Learn more</button>
            </div>
            <div className='basis-1/2 bg-gray-100 w-1/2 h-[367px] rounded-4xl'></div>
          </section>

          {/** Masterclass section */}

          <section className='flex mb-[130px] flex-col gap-4'>
            <h3 className='text-[22px] items-center uppercase text-gray-400 font-robotoMono tracking-widest'>Masterclass</h3>
            <div className='flex justify-between'>
              <p className='text-4xl font-light leading-relaxed'>Learn from the Industry's Best</p>
              <div className='flex items-center justify-center gap-2'>
                 <button className='border  text-gray-700 rounded-full font-light p-2'><FaChevronLeft/></button>
                 <button className='border rounded-full text-gray-700 font-light  p-2'><FaChevronRight/></button>
              </div>
             
            </div>
            <Courses/>
          </section>

          {/**Articles section */}
            <section className='flex mt-[150px] mb-[300px]  justify-center  gap-12  '>
            <div className='flex w-1/2 flex-col gap-5'>
              <p className='font-robotoMono text-[22px] tracking-widest uppercase text-gray-700'>Articles</p>
              <div className=' bg-gray-300 w-[550px] h-[250px] mt-5 rounded-3xl'></div>
              <div className='flex items-center gap-2'>
                <p className='bg-gray-100 py-1 px-4 text-sm rounded-2xl'>Featured</p>
                <p className='text-gray-500'>5 October 2025</p>
              </div>
              <p className=' wrap-break-words whitespace-normal   w-[700px] text-3xl '>
                The African AI Policy and what it <br/> means for designers
              </p>
              <button className='self-start text-gray-500'>Learn more</button>
            </div>
           <Articles/>
          </section>

        </div>
    )
}

export default Home