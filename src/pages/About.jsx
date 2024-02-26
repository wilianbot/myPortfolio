import React from "react";
import MinhaImagemAbout from "../assets/wilian2.png";

export default function About() {
  return (
    <div className="mx-4 flex w-full h-screen gap-16 justify-center items-center section">
      {/* Lado Esquerdo: Imagem */}
      <div className="w-1/2">
        <img
          src={MinhaImagemAbout}
          alt="Minha Foto"
          className="w-full h-auto"
        />
      </div>

      {/* Lado Direito: Sobre Mim */}
      <div className="w-1/2 px-8">
        <h2 className="text-3xl font-semibold mb-4">Sobre Mim</h2>
        <div className="text-lg mb-4">
          🚀 Estudante Apaixonado por Programação | Desenvolvedor em Formação🖥️
          Seja bem-vindo ao meu perfil! 👋 Atualmente, estou empenhado em me
          tornar um desenvolvedor full-stack, combinando minha paixão pela
          resolução de problemas com tecnologia e a criação de soluções
          inovadoras.
        </div>
      </div>
    </div>
  );
}
