interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="min-h-full min-w-full flex justify-center px-4 py-16">
      {children}
    </div>
  );
};

export default PageContainer;
