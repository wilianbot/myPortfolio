import React from "react";
import { FaCertificate } from "react-icons/fa";

export default function ExperienciaItem({ titulo, itens }) {
  return (
    <div className="flex flex-col border gap-3 rounded-md p-8 border-2 border-gray-400">
      <div className="text-gray-700 font-semibold text-2xl">{titulo}</div>
      <div>
        <ul className="grid grid-cols-2 grid-rows-3 gap-7 gap-x-20">
          {itens.map((item, index) => (
            <li key={index} className="flex align-middle items-center gap-3">
              <FaCertificate />
              <div>
                <div className="font-semibold text-gray-700">{item.nome}</div>
                <div className="text-gray-500">{item.nivel}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
