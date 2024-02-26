import React from "react";
import '../index.css';


export default function Header() {
  return (
    <div className="mx-4 my-9 flex w-full justify-between items-center">
      <div className="text-3xl font-semibold font-popi">Wilian Robal</div>
      <nav>
        <ul className="flex space-x-8 font-medium text-xl">
          <li className="efeitos-mouse">Sobre</li>
          <li className="efeitos-mouse">Experiencia</li>
          <li className="efeitos-mouse">Projetos</li>
          <li className="efeitos-mouse">Contato</li>
        </ul>
      </nav>
    </div>
  );
}
