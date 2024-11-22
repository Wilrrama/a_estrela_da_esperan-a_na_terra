import React from "react";
import pfraMarlen2 from "/pfraMarlen2.png";
import construindo_novo_brasil from "/construindo_novo_brasil.jpeg";
import a_esperanca_em_versos from "/a_esperanca_em_versos.png";
import a_esperanca_em_versos1 from "/a_esperanca_em_versos1.png";
import Title from "@/components/Title";

const livros = [
  {
    titulo: "Construindo um novo Brasil com Jesus",
    ano: "2001",
    exemplares: "2000",
    capa: construindo_novo_brasil,
  },
  {
    titulo: "A esperança em versos",

    ano: "2000",
    exemplares: "2000",
    capa: a_esperanca_em_versos,
  },
  {
    titulo: "A esperança em versos",
    ano: "2000",
    exemplares: "1000",
    capa: a_esperanca_em_versos1,
  },
];

export const Prezado: React.FC = () => {
  return (
    <>
      <div className="flex flex-col mb-20">
        <Title title={"Prezado Leitor"} />

        <p className="text-justify pb-3">
          Esta obra é a minha contribuição para melhorar o meu e o seu astral.
          Sua motivação é o Ecumenismo Irrestrito fundamentado na maior Lei de
          Deus – o Novo Mandamento de Jesus:
          <span className="block font-semibold mt-2 text-center">
            "AMAI-VOS COMO EU VOS AMEI"
          </span>
          – o denominador comum de todas as religiões.
        </p>

        <p className="text-justify pb-3">
          A inspiração eu devo à Super Rede Boa Vontade de Comunicação,
          especialmente à série Apocalipse de Jesus para os simples de coração,
          apresentada por Paiva Netto. E também ao canal Momentos de poesia...,
          do poeta e escritor -
          <a href="https://www.youtube.com/@mariofrigeri">
            Mário Frigéri (Youtube e Facebook).
          </a>
        </p>

        <p className="text-justify pb-3">
          Você vai deparar com uma coletânea de pensamentos, versos e alguns
          textos para sua reflexão. O objetivo é iluminar a nossa alma para
          tornar os nossos atos mais éticos e empáticos.
        </p>

        <p className="text-justify pb-3">
          Aproveito a oportunidade para tecer alguns comentários sobre a
          situação política do Brasil, pois, a nossa mente pode estar nas
          alturas, mas os nossos pés continuam no chão...
        </p>

        <p className="text-justify pb-5">
          Que esta leitura (grátis) lhe faça muito bem.
        </p>

        <div className="flex flex-col items-center">
          <img
            src={pfraMarlen2}
            alt="Marlene Alves"
            width={250}
            height={250}
            className="rounded-full"
          />
          <div className="pt-6 font-medium text-center">
            <p>Marlene Alves dos Santos</p>
          </div>
        </div>

        <blockquote className="my-12 p-6 bg-gray-50 rounded-lg shadow-sm">
          <p className="italic text-gray-700 font-bold">
            "Não lamente os mortos... Lamente a multidão, a multidão apática, os
            covardes e submissos que veem a grande angústia e as iniquidades do
            mundo sem se atreverem a falar."
          </p>
          <footer className="text-sm mt-4 text-gray-600 text-right">
            — Ralf Chaplin
          </footer>
        </blockquote>

        <div className="w-full">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
            Minhas outras obras literárias
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {livros.map((livro, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="w-full">
                  <img
                    src={livro.capa}
                    alt={livro.titulo}
                    width={150}
                    height={150}
                    className="sm:h-48 object-cover mx-auto"
                  />
                </div>
                <div className="p-3 sm:p-4 space-y-2 flex-1 flex flex-col ">
                  <h3 className="font-medium text-center sm:text-lg text-gray-900 line-clamp-2 flex-grow">
                    {livro.titulo}
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600 ">
                    <div className="flex justify-center  space-x-2">
                      <span className="font-medium ">Ano:</span>
                      <span>{livro.ano}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="font-medium">Exemplares:</span>
                      <span>{livro.exemplares}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
