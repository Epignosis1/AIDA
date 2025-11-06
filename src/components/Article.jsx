const articles = [
    {
        title:"Design Case Studies ",
        subTitle:'October 2025',
        name: 'Seun Alakanse'
    },
    {
        title:'Designers Collector:',
        subTitle:'Marketing Landing Pages',
        name: 'Faith Adeoye'
    },
    {
        title:'Persuasive Design and Behavioural',
      
        name: 'Seun Alkanse'
    },
]

const Articles = ()=>{
   return (
     <div className="flex flex-col">
      {articles.map((article) => (
        <div className='flex border-b border-gray-200 gap-6 p-4'>
             <div className='bg-gray-200 rounded-xl w-20 h-20'></div> 
             <div className='flex flex-col gap-1'>
                  <p className='text-2xl'>{article.title}</p>
                  <p className='text-lg'>{article.subTitle}</p>
                  <p className='text-gray-500'>{article.name}</p>
             </div>
           
        </div>
      ))}
    </div>
   )
}
export default Articles