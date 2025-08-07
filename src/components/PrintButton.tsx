import React from "react";
import { useReactToPrint } from "react-to-print";


interface PrintButtonProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const PrintButton: React.FC<PrintButtonProps> = ({ contentRef }) => {
  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: "CV-Preview",
  });

  return (
    <button
      onClick={handlePrint}
      className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors"
      type="button"
    >
      Download PDF
    </button>
  );
};

export default PrintButton;
