import React from 'react'

const TaskListNumber = ({data}) => {
    // console.log(data.tasks.find((task)=> task.newTask === true ? "0" : "1"))
  return (
    <div className='flex w-full mt-10 justify-between gap-5 tasknumber'>
        <div className='rounded-xl w-[40%] py-7 px-9 bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[40%] py-7 px-9 bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed</h3>
        </div>
        <div className='rounded-xl w-[40%] py-7 px-9 bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Accepted</h3>
        </div>
        <div className='rounded-xl w-[40%] py-7 px-9 bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumber