import React from "react";
import "../index.css";
import MinhaImagem from "../assets/wilian.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function HeaderAbout() {
  return (
    <div className="flex justify-between items-center mx-11 my-40">
      <div>
        <img src={MinhaImagem} alt="" className="my-9" />
      </div>
      <div className="flex flex-col align-middle justify-center items-center gap-3">
        <p className="text-gray-500 font-semibold text-lg">Olá, eu sou</p>
        <h2 className="font-bold text-5xl">Wilian Robal</h2>
        <h3 className="text-gray-500 font-semibold text-3xl">
          Frontend Developer
        </h3>
        <div>
          <div className="flex justify-between gap-4">
            <button className="border rounded-lg p-3 font-bold border-gray-900 hover:text-white hover:bg-slate-900 hover:transition-all hover:-translate-y-1">
              Download CV
            </button>
            <button className="border rounded-lg p-3 font-bold bg-gray-900 text-white hover:text-gray-900 hover:bg-white hover:border-gray-900 hover:-translate-y-1">
              Contact Info
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <FaLinkedin className="size-9 hover:translate-y-1 cursor-pointer" />
          <FaGithub className="size-9 hover:translate-y-1 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
}
