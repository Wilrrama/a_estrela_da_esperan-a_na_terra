const Usufruir = () => {
  return (
    <div className="mb-16">
      {/* Título do Poema */}
      <h2 className="text-3xl font-serif text-gray-800 text-center mb-10 border-b border-gray-200 pb-4">
        Usufruir sem usucapir
      </h2>

      {/* Corpo do Poema */}
      <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
        <p className="italic">
          Seja rico, mas não seja escravo de sua riqueza. Use-a em benefício de
          si, de sua família e da Humanidade.
        </p>

        <p className="italic">
          Adquira bens espirituais utilizando bens materiais para praticar o bem
          social.
        </p>

        <p className="italic">
          Sabe do quer você é dono? Só do que puder levar quando partir para a
          Pátria Espiritual, ou seja, as virtudes e os vícios que incorporou em
          sua alma.
        </p>

        <p className="italic">Pense nisso e trate de ser feliz.</p>

        {/* Separador decorativo */}
        {/* <div className="flex items-center justify-center py-4">
              <div className="h-px w-24 bg-gray-200"></div>
              <span className="mx-4 text-gray-400">❋</span>
              <div className="h-px w-24 bg-gray-200"></div>
            </div> */}

        <p className="italic">
          "Somos ricos até o ponto em que a riqueza esteja agregada à nossa alma
          e não presa entre os dedos de nossas mãos."
        </p>

        {/* Assinatura */}
        <p className="text-right text-gray-600 font-serif mt-4">
          — Mário Frigéri
        </p>
      </div>

      {/* Citação Final */}
      <div className="mt-10 pt-6 border-t border-gray-200">
        <p className="text-gray-700 text-center italic">
          "A verdadeira prosperidade reside em conservar nosso Espírito
          abastecido pelas joias morais, espirituais e éticas da Sabedoria
          Divina"
        </p>
        <p className="text-sm text-gray-600 text-center mt-2">
          Do livro "Jesus e as Sete igrejas da Ásia (Esmirna)" - Paiva Netto
        </p>
      </div>
    </div>
  );
};

export default Usufruir;
