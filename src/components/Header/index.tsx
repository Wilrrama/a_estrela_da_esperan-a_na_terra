const Header = () => {
  return (
    <header className="flex items-center h-24 w-full px-6 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 shadow-lg">
      <img
        src="estrela.png"
        alt="Logo"
        className="w-12 h-12 mr-4 rounded-full  shadow-md"
      />

      <div className="text-center flex-1">
        <h3 className="text-white text-2xl font-varela tracking-wide">
          A Estrela da Esperança na Terra
        </h3>
        <h4 className="text-blue-200 text-xl mt-1">Marlene Alves dos Santos</h4>
      </div>
    </header>
  );
};

export default Header;
