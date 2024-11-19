import { useState } from "react";
import PageContainer from "./components/PageContainer";
import { pages } from "@/pages/PageConfig";
import { PageNavigation } from "../PageNavigation";

const DigitalBook = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const CurrentPageComponent = pages[currentPage].component;

  const handlePageChange = (newPage: number): void => {
    if (newPage >= 0 && newPage < pages.length) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <PageContainer>
        <CurrentPageComponent />
      </PageContainer>

      <PageNavigation
        currentPage={currentPage}
        totalPages={pages.length}
        onPageChange={handlePageChange}
        // onOpenIndex={() => setShowIndex(true)}
      />
    </>
  );
};

export default DigitalBook;
