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

export const PageNavigation: React.FC<PageNavigationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => (
  <div>
    <div className="fixed w-16 bottom-5 left-0 right-0 flex justify-center items-center gap-6 p-6  pb-4 z-20  ">
      <button
        // onClick={onOpenIndex}
        className="absolute left-2 p-3 rounded-full bg-gray-300 text-gray-900 hover:bg-gray-300 hover:scale-105 active:scale-95 transition-all duration-200 "
        aria-label="Abrir índice"
      >
        <h2>Indice</h2>
      </button>
    </div>

    <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center gap-6  pb-3 z-10">
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
  </div>
);
