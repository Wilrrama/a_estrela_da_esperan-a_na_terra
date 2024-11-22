interface ITitle {
  title: string;
}

const Title: React.FC<ITitle> = ({ title }) => {
  return <h1 className="text-center text-3xl font-semibold pb-2">{title}</h1>;
};

export default Title;
