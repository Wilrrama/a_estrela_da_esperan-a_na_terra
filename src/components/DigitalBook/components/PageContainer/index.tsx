interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="h-[91vh] w-full flex justify-center bg-gray-300 px-4 py-16">
      {children}
    </div>
  );
};

export default PageContainer;
