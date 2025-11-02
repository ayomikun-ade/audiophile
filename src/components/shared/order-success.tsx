import React from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Separator } from "@/components/ui/separator";
import { OrderSummary } from "@/lib/types";
import Image from "next/image";
import SuccessIcon from "@/assets/icon-order-confirmation.svg";

interface OrderConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  orderSummary: OrderSummary;
  onBackToHome: () => void;
}

const SuccessModal = ({
  isOpen,
  onClose,
  orderSummary,
  onBackToHome,
}: OrderConfirmationDialogProps) => {
  const [showAllItems, setShowAllItems] = React.useState(false);

  // Determine which items to display
  const itemsToShow = showAllItems
    ? orderSummary.items
    : orderSummary.items.slice(0, 1);

  const remainingItemsCount = orderSummary.items.length - itemsToShow.length;

  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString("en-US")}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[540px] p-8 rounded-lg max-sm:gap-0">
        <DialogHeader className="items-start text-left max-sm:gap-0">
          <Image
            src={SuccessIcon}
            width={64}
            height={64}
            alt="order confirmation icon"
          />
          <DialogTitle asChild>
            <h3 className="lg:mt-[33px] max-lg:mt-4 lg:mb-6 max-lg:mb-6">
              Thank you for your order
            </h3>
          </DialogTitle>
          <p className="opacity-50">
            You will receive an email confirmation shortly.
          </p>
        </DialogHeader>

        <div className="mt-[33px] flex flex-col md:flex-row rounded-lg overflow-hidden bg-brand-neutral-200">
          <div className="flex-1 p-6 md:w-[60%] space-y-3">
            {itemsToShow.map((item, index) => (
              <div key={item.id}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={
                        "/earphones/product-yx1-earphones/mobile/image-product.jpg"
                      }
                      width={64}
                      height={64}
                      alt="product image"
                    />
                    <div>
                      <p className="text-sm font-bold truncate">{item.name}</p>
                      <p className="text-sm opacity-50 font-bold">
                        {formatCurrency(item.price)}
                      </p>
                    </div>
                  </div>

                  <span className="font-bold opacity-50">x{item.quantity}</span>
                </div>

                {showAllItems && index < itemsToShow.length - 1 && (
                  <Separator className="mt-3" />
                )}
              </div>
            ))}

            {/* View More/Less Toggle */}
            {orderSummary.items.length > 1 && (
              <>
                <Separator className="bg-gray-300" />
                <button
                  type="button"
                  onClick={() => setShowAllItems(!showAllItems)}
                  className="w-full text-center text-sm cursor-pointer hover:opacity-75 font-bold opacity-50 pt-1"
                >
                  {showAllItems
                    ? "View less"
                    : `and ${remainingItemsCount} other item(s)`}
                </button>
              </>
            )}
          </div>

          {/* Right Side: Grand Total */}
          <div className="md:w-[40%] bg-black p-6 flex flex-col justify-end rounded-b-lg md:rounded-l-none md:rounded-r-lg">
            <p className="uppercase text-white opacity-50">Grand Total</p>
            <p className="text-lg font-bold text-white">
              {formatCurrency(orderSummary.grandTotal)}
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <Button className="max-sm:mt-6" onClick={onBackToHome}>
          Back to Home
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
