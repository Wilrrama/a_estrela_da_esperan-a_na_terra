import Title from "@/components/Title";
import React from "react";

export const Dedicatoria: React.FC = () => {
  return (
    <div>
      {/* Título */}

      <Title title={"Dedicatória"} />

      <div className="space-y-10 pt-5">
        {/* Primeira citação */}
        <div className="text-center">
          <blockquote className="text-lg italic text-gray-700 leading-relaxed">
            "Atingir o equilíbrio é a meta suprema. O Bem nunca será vencido
            pelo mal."
          </blockquote>
          <footer className="mt-2 text-gray-600 font-serif">
            — Alziro Zarur
          </footer>
        </div>

        {/* Segunda citação */}
        <div className="text-center">
          <blockquote className="text-lg italic text-gray-700 leading-relaxed">
            "O determinismo do Amor e do Bem é a Lei de todo o Universo e a alma
            humana emerge de todas as catástrofes em busca de uma vida melhor."
          </blockquote>
          <footer className="mt-2 text-gray-600 font-serif">
            — Emmanuel (Chico Xavier)
          </footer>
        </div>

        {/* Separador decorativo */}
        <div className="flex items-center justify-center">
          <div className="h-px w-24 bg-gray-200"></div>
          <span className="mx-4 text-gray-400">✧</span>
          <div className="h-px w-24 bg-gray-200"></div>
        </div>

        {/* Texto principal da dedicatória */}
        <div className="text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Dedico este livro a todos os perseverantes na{" "}
            <strong>imensa Seara do Bem</strong> , de todas as correntes
            religiosas, políticas, filosóficas, científicas, etc., especialmente
            aos voluntários e voluntárias de trabalhos humanitários em todas as
            áreas, nas muitas <strong>ONGs</strong> espalhadas pelo mundo.
          </p>
        </div>

        {/* Separador decorativo */}
        <div className="flex items-center justify-center">
          <div className="h-px w-24 bg-gray-200"></div>
          <span className="mx-4 text-gray-400">✧</span>
          <div className="h-px w-24 bg-gray-200"></div>
        </div>

        {/* Citação final */}
        {/* <div className="text-center">
              <blockquote className="text-lg italic text-gray-700 leading-relaxed">
                "O que esculpe a nossa alma são as ações que praticamos. Somos
                aquilo que pensamos, falamos e fazemos."
              </blockquote>
              <footer className="mt-2 text-gray-600 font-serif">
                — Paiva Netto
              </footer>
            </div> */}
      </div>
    </div>
  );
};

export default Dedicatoria;
