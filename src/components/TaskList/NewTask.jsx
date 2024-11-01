const NewTask = ({data}) => {
  console.log(data.title)
  return (
    <div className='h-full w-[300px] flex-shrink-0 rounded-xl p-5 bg-red-400'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-700 text-sm px-4 py-2 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>
            <div className='mt-4'>
                <button className='bg-blue-600 px-3 py-1 text-sm rounded'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask