import React from "react";
import "../index.css";
import LogoOne from "../../public/logo1.png";
import LogoTwo from "../../public/logo2.png";
import LogoTre from "../../public/logo3.png";
import EmBreve from "../../public/embreve.png";

export default function Projetos() {
  return (
    <div className="mx-4 flex w-full h-screen gap-16 justify-center flex-col align-middle items-center section">
      <h2 className="text-4xl font-semibold">Projetos</h2>
      <div className="grid-cols-3 grid-rows-1 grid gap-8">
        <div className="p-10 border-2 border-gray-500 rounded-md flex flex-col justify-center items-center gap-5">
          <img src={EmBreve} alt="" className="rounded-lg" />
          <h2 className="text-xl">Projeto 1</h2>
          <div className="flex gap-4">
            <button className="border-2 border-gray-500  rounded-full p-2 px-7 hover:bg-gray-200">
              GitHub
            </button>
            <button className="border-2 border-gray-500 rounded-full p-2 px-7 hover:bg-gray-200">
              Demo
            </button>
          </div>
        </div>
        <div className="p-10 border-2 border-gray-500 rounded-md flex flex-col justify-center items-center gap-3">
          <img src={EmBreve} alt="" className="rounded-lg" />
          <h2 className="text-xl">Projeto 2</h2>
          <div className="flex gap-4">
            <button className="border-2 border-gray-500  rounded-full p-2 px-7 hover:bg-gray-200">
              GitHub
            </button>
            <button className="border-2 border-gray-500 rounded-full p-2 px-7 hover:bg-gray-200">
              Demo
            </button>
          </div>
        </div>
        <div className="p-10 border-2 border-gray-500 rounded-md flex flex-col justify-center items-center gap-3">
          <img src={EmBreve} alt="" className="rounded-lg" />
          <h2 className="text-xl">Projeto 3</h2>
          <div className="flex gap-4">
            <button className="border-2 border-gray-500  rounded-full p-2 px-7 hover:bg-gray-200">
              GitHub
            </button>
            <button className="border-2 border-gray-500 rounded-full p-2 px-7 hover:bg-gray-200">
              Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
