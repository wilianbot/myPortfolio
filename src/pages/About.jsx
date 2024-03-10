import React from "react";
import MinhaImagemAbout from "../assets/wilian2.png";

export default function About() {
  return (
    <div
      className="mx-4 flex w-full h-screen gap-16 justify-center items-center section"
      id="about"
    >
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
        <h2 className="text-4xl font-semibold mb-4">Sobre Mim</h2>
        <pre className="text-lg mb-4 whitespace-pre-wrap">
          Estudante Apaixonado por Programação | Desenvolvedor em Formação.
        </pre>

        <pre className="text-lg mb-4 whitespace-pre-wrap">
          <strong>Minha Missão:</strong> Combinar minha paixão pela resolução de
          problemas com tecnologia para criar soluções inovadoras que façam a
          diferença no mundo.
        </pre>

        <pre className="text-lg mb-4 whitespace-pre-wrap">
          <strong>Atualmente:</strong> Estou empenhado em me tornar um
          desenvolvedor full-stack, aprendendo e aprimorando minhas habilidades
          em:
          <l>
            <li>Linguagens de programação (Python, JavaScript)</li>
            <li>Frameworks e bibliotecas </li>
            <li>Banco de dados</li>
            <li>Versionamento de código</li>
            <li>Metodologias ágeis</li>
          </l>
        </pre>
      </div>
    </div>
  );
}
