import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded taskListMain">
        <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded taskListHeading">
            <h3 className="text-lg font-medium w-1/5">Employee Names</h3>
            <h3 className="text-lg font-medium w-1/5">New Task</h3>
            <h3 className="text-lg font-medium w-1/5">Active Task</h3>
            <h3 className="text-lg font-medium w-1/5">Completed Task</h3>
            <h3 className="text-lg font-medium w-1/5">Failed Task</h3>
          </div>
      <div className="">
      {userData.map(function (elem, idx) {
        return (
          <div key={idx} className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded taskListNumber">
            <h2 className="text-lg font-medium w-1/5">{elem.username}</h2>
            <h2 className="text-lg font-medium w-1/5 text-blue-400">{elem.taskNumbers.newTask}</h2>
            <h2 className="text-lg font-medium w-1/5 text-yellow-400">{elem.taskNumbers.active}</h2>
            <h2 className="text-lg font-medium w-1/5 text-white">{elem.taskNumbers.completed}</h2>
            <h2 className="text-lg font-medium w-1/5 text-red-600">{elem.taskNumbers.failed}</h2>
          </div>
        );
      })}
      </div>

    </div>
  );
};

export default AllTask;
