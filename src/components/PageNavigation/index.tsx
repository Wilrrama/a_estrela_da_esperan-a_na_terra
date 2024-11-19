import { PageConfig } from "@/pages/PageConfig";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PageNavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

interface NavigationButtonProps {
  onClick: () => void;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  disabled?: boolean;
}

export const TableOfContents: React.FC<{
  pages: PageConfig[];
  currentPage: number;
  onPageSelect: (index: number) => void;
  onClose: () => void;
}> = ({ pages, currentPage, onPageSelect, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-gray-200 rounded-lg p-6 max-w-md w-full m-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Índice</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 bg-gray-100"
        >
          ✕
        </button>
      </div>
      <div className="space-y-2">
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => {
              onPageSelect(index);
              onClose();
            }}
            className={`w-full text-left px-4 py-2 rounded bg-slate-50 ${
              currentPage === index
                ? "bg-blue-100 text-blue-700"
                : "hover:bg-gray-100"
            }`}
          >
            {page.title}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  onClick,
  icon: Icon,
  label,
  disabled,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`flex items-center justify-center p-3 rounded-full 
      ${
        disabled
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105 active:scale-95"
      } 
      transition-all duration-200 shadow-sm`}
    aria-label={label}
  >
    <Icon className="w-6 h-6" />
  </button>
);

export const PageNavigation: React.FC<
  PageNavigationProps & { onOpenIndex: () => void }
> = ({ currentPage, totalPages, onPageChange, onOpenIndex }) => (
  <div className="bg-gray-900 flex items-center justify-around gap-3 p-4 rounded-lg shadow-md bottom-0 fixed w-full ">
    <button
      onClick={onOpenIndex}
      className="bg-gray-300 text-gray-900 hover:bg-gray-300 hover:scale-105 active:scale-95 transition-all duration-200 "
      aria-label="Abrir índice"
    >
      <h2>Indice</h2>
    </button>

    <NavigationButton
      onClick={() => onPageChange(currentPage - 1)}
      icon={ChevronLeft}
      label="Página anterior"
      disabled={currentPage === 0}
    />
    <span className="text-gray-700 font-medium bg-white px-4 py-2 rounded-full shadow-sm">
      {currentPage + 1} / {totalPages}
    </span>
    <NavigationButton
      onClick={() => onPageChange(currentPage + 1)}
      icon={ChevronRight}
      label="Próxima página"
      disabled={currentPage === totalPages - 1}
    />
  </div>
);
