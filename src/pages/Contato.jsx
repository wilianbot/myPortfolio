import React from "react";
import "../index.css";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

export default function Contato() {
  return (
    <div className="mx-4 flex w-full h-screen gap-16 justify-center flex-col align-middle items-center section">
      <h2 className="text-4xl font-semibold -mb-5">Contate-me</h2>
      <div className="flex border-2 rounded-lg p-5 bg-slate-100 gap-7">
        <div className="flex align-middle justify-center items-center gap-1">
          <CgMail className="rounded-lg size-5" />
          <p>wiliamrobaldossantos1@gmail.com</p>
        </div>
        <div className="flex align-middle justify-center items-center gap-1">
          <FaLinkedin className="rounded-lg size-5" />
          <p>Linkedin</p>
        </div>
      </div>
        <div>
          <ul className="flex gap-5 text-xl">
            <li className="efeitos-mouse">About</li>
            <li className="efeitos-mouse">Experiencia</li>
            <li className="efeitos-mouse">Projetos</li>
            <li className="efeitos-mouse">Contato</li>
          </ul>
        </div>
        <div className="text-sm">
          Copyright © Wilian Robal. All RIghts Reserved
        </div>
    </div>
  );
}
