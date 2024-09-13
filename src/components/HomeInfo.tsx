import React from "react";

function HomeInfo() {
  return (
    <div className="container bg-gray-200 grid grid-cols-3 gap-4">
      <div className="container bg-red-400 p-6 flex flex-col justify-center items-center h-[12rem]">
        <h3>
          <i className="bx bxs-truck"></i>
        </h3>
        <h4>Lorem ipsum dolor sit amet</h4>
      </div>
      <div className="container bg-red-400">
        <h3>
          <i className="bx bxs-truck"></i>
        </h3>
        <h4>Lorem ipsum dolor sit amet</h4>
      </div>
      <div className="container bg-red-400">
        <h3>
          <i className="bx bxs-truck"></i>
        </h3>
        <h4>Lorem ipsum dolor sit amet</h4>
      </div>
    </div>
  );
}

export default HomeInfo;
