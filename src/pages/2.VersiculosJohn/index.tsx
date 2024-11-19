const VersiculosJoao = () => {
  return (
    <div className="pb-8">
      <div className="text-center p-6 ">
        <p className="text-lg text-gray-700 leading-relaxed">
          Sinos poderosos, cujos toques nos chegam das Elevadas Regiões onde os
          horizontes não conhecem limites, anunciam que vem próxima a hora do
          resgate. As massas humanas serão como o Martelo de Deus a derruir as
          estruturas da arrogância e da impiedade.
        </p>
        <p className="mt-4 text-sm text-gray-600 italic">
          Do livro "Jesus e as Sete Igrejas da Ásia (Pérgamo)" - Página 255
          <br />
          <span className="font-medium">Autor: Paiva Netto</span>
        </p>
      </div>

      <blockquote className="space-y-8 p-8   ">
        {/* Primeiro versículo */}
        <div className="space-y-4">
          <p className="text-2xl font-serif text-gray-800 text-center">
            Disse Jesus:
          </p>
          <p className="text-xl italic text-gray-700 leading-relaxed text-center">
            "Eu sou a videira verdadeira, vós os ramos. Quem permanece em mim, e
            Eu nele, esse dá muito fruto; porque sem mim nada podereis fazer."
          </p>
          <footer className="text-sm text-gray-600 text-center">
            (João – 15:3)
          </footer>
        </div>

        {/* Separador decorativo */}
        <div className="flex items-center justify-center">
          <div className="h-px w-32 bg-gray-200" />
          <div className="mx-4 text-gray-400">✝</div>
          <div className="h-px w-32 bg-gray-200" />
        </div>

        {/* Segundo versículo */}
        <div className="space-y-4">
          <p className="text-xl italic text-gray-700 leading-relaxed text-center">
            "Conhecereis a Verdade (de Deus), e a Verdade (de Deus) vos
            libertará."
          </p>
          <footer className="text-sm text-gray-600 text-center">
            (João – 8:32)
          </footer>
        </div>
      </blockquote>
    </div>
  );
};

export default VersiculosJoao;
