"use client";

import { DownloadIcon, FileIcon, PrinterIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

export const PrintDrawer = () => {
  const handlePrint = () => {
    // Set print-specific settings
    const originalTitle = document.title;
    document.title = "CV - " + new Date().toLocaleDateString();

    // Hide drawer elements before printing
    const drawerElements = document.querySelectorAll(
      "[data-vaul-drawer-content], [data-vaul-drawer-overlay]",
    );
    drawerElements.forEach((el) => {
      if (el instanceof HTMLElement) {
        el.style.display = "none";
        el.style.opacity = "0";
        el.style.visibility = "hidden";
      }
    });

    // Add printing class to body
    document.body.classList.add("is-printing");

    // Optimize for print
    const style = document.createElement("style");
    style.id = "print-optimization";
    style.innerHTML = `
      @media print {
        body { font-size: 8px !important; }
        .card { padding: 0.05rem !important; margin-bottom: 0.05rem !important; }
        section { margin-bottom: 0.1rem !important; padding: 0 !important; }
        h1, h2, h3, h4 { margin-bottom: 0.1rem !important; margin-top: 0.1rem !important; }
        p { margin-bottom: 0.05rem !important; margin-top: 0.05rem !important; }
        ul, ol { margin: 0 !important; padding-left: 0.8rem !important; }
        li { margin-bottom: 0 !important; line-height: 1.1 !important; }
        .container { padding: 0.5rem !important; }
        .avatar { width: 60px !important; height: 60px !important; }
        .flex { gap: 0.2rem !important; }
        .space-y-2 { margin-top: 0 !important; }
      }
    `;
    document.head.appendChild(style);

    // Print the document
    setTimeout(() => {
      window.print();

      // Restore the original title and drawer elements
      setTimeout(() => {
        document.title = originalTitle;
        document.body.classList.remove("is-printing");
        drawerElements.forEach((el) => {
          if (el instanceof HTMLElement) {
            el.style.display = "";
            el.style.opacity = "";
            el.style.visibility = "";
          }
        });

        // Remove the temporary style
        const tempStyle = document.getElementById("print-optimization");
        if (tempStyle) {
          tempStyle.remove();
        }
      }, 100);
    }, 100);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="fixed bottom-4 right-4 h-16 w-16 rounded-full shadow-2xl print:hidden">
          <PrinterIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Print CV</DrawerTitle>
            <DrawerDescription>Print or save your CV as PDF</DrawerDescription>
          </DrawerHeader>
          <div className="space-y-4 p-4 pb-0">
            <p className="text-sm text-muted-foreground">
              To save as PDF, use the &quot;Save as PDF&quot; option in your
              browser&apos;s print dialog.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <FileIcon className="h-4 w-4" />
                <span className="text-sm">Paper size: A4 portrait</span>
              </div>
              <div className="flex items-center space-x-2">
                <DownloadIcon className="h-4 w-4" />
                <span className="text-sm">Margins: Minimal (0.5cm)</span>
              </div>
            </div>
            <div className="mt-4 rounded-md bg-muted p-3">
              <h4 className="mb-2 text-sm font-medium">Print tips:</h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>
                  • Make sure to select &quot;No scaling&quot; or &quot;Actual
                  size&quot; in print settings
                </li>
                <li>• Disable headers and footers for best results</li>
                <li>
                  • If content appears on two pages, try reducing browser zoom
                  slightly
                </li>
              </ul>
            </div>
          </div>
          <DrawerFooter>
            <Button onClick={handlePrint}>Print / Save as PDF</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
