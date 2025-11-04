import React from "react";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import QuickProducts from "../homepage/quick-products";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const MobileNav = ({ isOpen, setIsOpen }: MobileNavProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className={`max-md:max-w-3xl! md:max-w-screen! w-full min-h-[340px] p-8 pt-12 rounded-lg max-sm:gap-0 top-22 right-0 left-0 translate-y-0 translate-x-0`}
      >
        <DialogHeader className="sr-only items-start text-left max-sm:gap-0">
          <DialogTitle asChild>
            <h3 className="lg:mt-[33px] max-lg:mt-4 lg:mb-6 max-lg:mb-6">
              Quick Mobile navigation links
            </h3>
          </DialogTitle>
          <p className="opacity-50">Select a category to shop from</p>
        </DialogHeader>
        <div className="self-end">
          <QuickProducts />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MobileNav;
