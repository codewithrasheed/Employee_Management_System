import React from "react";

const FailedTask = ({data}) => {
  return (
    <div className="h-full w-[300px] flex-shrink-0 rounded-xl p-5 bg-yellow-400">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 text-sm px-4 py-2 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
      {data.taskDescription}
      </p>
      <div className="mt-2">
        <button className="w-full bg-red-600 py-1 rounded">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
