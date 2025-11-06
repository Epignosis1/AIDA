import { Clock, Play } from "lucide-react";
import { FaClock } from "react-icons/fa";

const courses = [
  {
    tutor: "John Ohio",
    title: "Embedding AI elements as reusable assets in",
    time: "58 mins",
  },
  {
    tutor: "Stephen Obiakun",
    title: "AI Prompting and Design",
    time: "58 mins",
  },
  {
    tutor: "Ramy Mohammef",
    title: "Embedding AI elements as reusable assets in",
    time: "58 mins",
  },
];

const Courses = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, index) => (
        <div
          key={index}
          className="flex h-80 bg-gray-100 justify-between flex-col gap-2 p-6 border border-gray-200 rounded-3xl hover:shadow-md transition"
        >
          <div className='flex flex-col gap-4'>
            <div className='bg-gray-200 rounded-xl w-20 h-20'></div>
            <h4 className="font-semibold text-2xl">{course.title}</h4>
          </div>
          
          <div className='flex items-center justify-between'>
              <p className="text-gray-500">{course.tutor}</p>
              <div className='flex items-center gap-6'>
                <div className="flex items-center gap-2 text-[11px]"><Clock className='text-black' size={14}/> {course.time}</div>
                <div  className="font-semibold bg-gray-200 p-3 rounded-full"><Play size={12}/></div>
             </div>
          </div>
         </div>
      ))}
    </div>
  );
};

export default Courses;
