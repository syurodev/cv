"use client";

import { RESUME_DATA } from "@/data/resume-data";
import { PrinterIcon } from "lucide-react";
import { Button } from "./ui/button";

export const PrintDrawer = () => {
  const handlePrint = () => {
    // Set print-specific settings
    const originalTitle = document.title;
    document.title = `${RESUME_DATA.name} - CV`;

    // Scroll to top to prevent print layout issues
    window.scrollTo(0, 0);

    // Wait for scroll to finish before printing
    setTimeout(() => {
      window.print();

      // Restore the original title
      // Use setTimeout to ensure print dialog is closed or processing started before reverting title
      setTimeout(() => {
        document.title = originalTitle;
      }, 100);
    }, 100);
  };

  return (
    <Button
      onClick={handlePrint}
      className="fixed bottom-4 right-4 h-16 w-16 rounded-full shadow-2xl print:hidden"
      size="icon"
    >
      <PrinterIcon className="h-6 w-6" />
    </Button>
  );
};
