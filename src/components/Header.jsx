import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";

function Header({ currentView, onViewChange }) {
  return (
    <div className="bg-white flex w-full h-14 p-8 items-center justify-between">
      <p className="font-semibold">Task</p>
      <div className="flex gap-2 justify-center items-center">
        <button className="bg-cyan-400 text-white rounded-lg px-3 py-1 font-semibold flex justify-center items-center gap-1">
          <FiPlus /> Create
        </button>
        {currentView === "list" ? (
          <button
            onClick={() => onViewChange("grid")}
            className="border p-2 rounded-md border-gray-300 text-cyan-500"
          >
            <CgMenuGridO />
          </button>
        ) : (
          <button
            onClick={() => onViewChange("list")}
            className="border p-2 rounded-md border-gray-300 text-cyan-500"
          >
            <AiOutlineUnorderedList />
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
