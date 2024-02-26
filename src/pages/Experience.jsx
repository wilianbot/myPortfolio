import React from "react";
import "../index.css";
import ExperienciaItem from "../components/ExperienciaItem";

export default function Experience() {
  const frontEndItens = [
    { nome: "HTML", nivel: "Intermediário" },
    { nome: "CSS", nivel: "Intermediário" },
    { nome: "JavaScript", nivel: "Básico" },
    { nome: "Tailwind", nivel: "Intermediário" },
    { nome: "React", nivel: "Básico" },
    // Adicione mais itens conforme necessário
  ];

  const backEndItens = [
    { nome: "SQL", nivel: "Intermediário" },
    { nome: "Node JS", nivel: "Básico" },
    { nome: "Git", nivel: "Básico" },
    { nome: "C", nivel: "Básico" },
    // Adicione mais itens conforme necessário
  ];

  return (
    <div className="mx-4 flex w-full h-screen gap-16 justify-center items-center section">
      <div>
        <div className="flex justify-center align-middle items-center">
          <h2 className="text-3xl font-semibold mb-4">Experiência</h2>
        </div>
        <div className="flex justify-between gap-16">
          <ExperienciaItem titulo="Front-end" itens={frontEndItens} />
          <ExperienciaItem titulo="Back-end" itens={backEndItens} />
        </div>
      </div>
    </div>
  );
}
