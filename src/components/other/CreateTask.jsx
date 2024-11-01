import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    const taskData = {
      title,
      date,
      category,
      description,
      assignTo,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };
    const data = userData;
    data.forEach(function(elem){
      if(assignTo == elem.username){
        elem.tasks.push(taskData)
        elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1
      }
    });
    setUserData(data);
    setTitle('');
    setDate('');
    setAssignTo('');
    setCategory('');
    setDescription('');
    
  }
  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded createTask">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="flex flex-wrap w-full items-start justify-between">
          <div className="w-1/2 createTask1">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
              required
                value={title}
                onChange={(e)=>{
                  setTitle(e.target.value)
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
              required
              value={date}
              onChange={(e)=>{
                setDate(e.target.value)
              }}
                className="text-sm py-1 px-2 outline-none rounded w-4/5 bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <select className='text-gray-300 text-sm py-1 px-2 outline-none rounded w-4/5 bg-transparent border-[1px] border-gray-400 mb-4 ' id="" value={assignTo} onChange={(e)=> {
                setAssignTo(e.target.value)
              }}>
                <option className='text-white bg-[#1c1c1c]' value="employee names">Employee Name</option>
                {userData.map(function(elem, idx){
                  return <option className='text-white bg-[#1C1C1C] outline-none' key={idx} value={elem.username}>{elem.username}</option>
                })}
              </select>
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
              required
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
                className="text-sm py-1 px-2 outline-none rounded w-4/5 bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Design, dev, etc"
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start createTask2">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
            required
            value={description}
            onChange={(e)=>{
              setDescription(e.target.value)
            }}
              className="w-full h-44 text-sm bg-transparent outline-none py-2 px-4 border-[1px] border-gray-400 "
              cols="30"
              rows="10"
            ></textarea>
            <button className="bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded text-sm mt-4 w-full">Create Task</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask