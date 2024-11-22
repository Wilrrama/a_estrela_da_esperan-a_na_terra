interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="min-h-full min-w-full flex justify-center px-8 py-4 md:px-16 lg:px-36 ">
      {children}
    </div>
  );
};

export default PageContainer;
