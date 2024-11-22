import Title from "@/components/Title";
import React from "react";

const Sumario: React.FC = () => {
  return (
    <>
      <div className="flex flex-col">
        {/* Título */}
        <Title title={"Sumário"} />

        {/* Primeira Seção */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center justify-between text-gray-700">
            <span>01 - Capa</span>
            <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
          </div>
          <div className="flex items-center justify-between text-gray-700">
            <span>02 - Versículos João</span>
            <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
          </div>
          <div className="flex items-center justify-between text-gray-700">
            <span>03 - Prezado Leitor</span>
            <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
          </div>
          <div className="flex items-center justify-between text-gray-700">
            <span>04 - Usufruir sem usucapir - Mário Frigeri</span>
            <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
          </div>
          <div className="flex items-center justify-between text-gray-700">
            <span>05 - Sumário</span>
            <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
          </div>
          {/* Itens 01-06 */}
          <div className="flex items-center justify-between text-gray-700">
            <span>06 - Fonte de Inspiração Divina</span>
            <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
          </div>
          {/* ... continuar com os demais itens */}
        </div>

        {/* Parte I */}
        <div className="my-8">
          <h2 className="text-2xl font-serif text-gray-800 text-center mb-6">
            Parte I – Evolução: A marcha para Deus
          </h2>
          <div className="space-y-3">
            {/* Itens 07-69 */}
            <div className="flex items-center justify-between text-gray-700">
              <span>07 - As sementes do Bem</span>
              <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
            </div>
            <div className="flex items-center justify-between text-gray-700">
              <span>08 - O Novo Mandamento </span>
              <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
            </div>
            <div className="flex items-center justify-between text-gray-700">
              <span>09 - Ecumenismo – o caminho para a Paz</span>
              <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
            </div>
            <div className="flex items-center justify-between text-gray-700">
              <span>10 - Jesus e o Ecumenismo</span>
              <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
            </div>
            <div className="flex items-center justify-between text-gray-700">
              <span>11 - As sementes do Bem</span>
              <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
            </div>
            <div className="flex items-center justify-between text-gray-700">
              <span>12 - Os simples de coração</span>
              <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
            </div>
            <div className="flex items-center justify-between text-gray-700">
              <span>13 -Quem é Jesus</span>
              <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
            </div>
            <div className="flex items-center justify-between text-gray-700">
              <span>14 - A morte</span>
              <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
            </div>
            <div className="flex items-center justify-between text-gray-700">
              <span>15 - Às mães especiais</span>
              <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
            </div>
            <div className="flex items-center justify-between text-gray-700">
              <span>16 - Evolução</span>
              <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
            </div>
            <div className="flex items-center justify-between text-gray-700">
              <span>17 - O tormento do Avarento</span>
              <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
            </div>
            <div className="flex items-center justify-between text-gray-700">
              <span>18 - A maldição da ganância</span>
              <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
            </div>
            <div className="flex items-center justify-between text-gray-700">
              <span>19 - A Lei da Reencarnação</span>
              <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
            </div>
            <div className="flex items-center justify-between text-gray-700">
              <span>20 - Palavras de Jesus</span>
              <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
            </div>

            {/* ... continuar com os demais itens */}
          </div>
        </div>

        {/* Parte II */}
        <div className="my-8">
          <h2 className="text-2xl font-serif text-gray-800 text-center mb-6">
            Parte II – A Arte a serviço de Deus: HOMENAGENS
          </h2>
          <div className="space-y-3">
            {/* Itens 70-94 */}
            <div className="flex items-center justify-between text-gray-700">
              <span>70 – Arte – dom Divino</span>
              <span className="border-b border-dotted border-gray-300 flex-grow mx-4"></span>
              <span>93</span>
            </div>
            {/* ... continuar com os demais itens */}
          </div>
        </div>

        {/* Decoração Final */}
        <div className="flex items-center justify-center mt-8">
          <div className="h-px w-24 bg-gray-200"></div>
          <span className="mx-4 text-gray-400">✧</span>
          <div className="h-px w-24 bg-gray-200"></div>
        </div>
      </div>
    </>
  );
};

export default Sumario;
