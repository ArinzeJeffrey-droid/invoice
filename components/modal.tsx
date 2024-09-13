import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "./ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

export interface ModalProps {
  children?: ReactNode;
  open: boolean;
  onOpenChange(open: boolean): void;
  className?: string;
  closeButton?: boolean;
}

export function Modal({
  children,
  open,
  onOpenChange,
  closeButton,
  className,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        aria-describedby="modal"
        className={cn("max-w-[95vw] bg-white mx-auto p-4 h-[90vh] overflow-y-auto", className)}
        closeButton={closeButton}
        id="custom-modal"
      >
        <DialogTitle className="sr-only">Opened modal</DialogTitle>
        <DialogDescription className="sr-only">description</DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
}
