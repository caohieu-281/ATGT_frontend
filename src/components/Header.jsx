import React from "react";

const Header = () => {
  return (
    <div className="w-full p-2 bg-slate-500 flex justify-between">
      <div>
        <p className="text-black font-bold text-xl ml-5">Camera</p>
      </div>
      <div>
        <button className="text-black bg-green-400 p-1 mr-5">
          Go to center
        </button>
      </div>
    </div>
  );
};

export default Header;
