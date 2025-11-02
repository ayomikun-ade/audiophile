import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";

export default function Cart() {
  const addedProducts = [];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button aria-label="Open cart">
          <ShoppingCart
            size={24}
            className="hover:text-brand-primary cursor-pointer transition-colors duration-300"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[377px] p-6 top-55 sm:left-[55%] md:left-[65%] lg:left-[70%]">
        <DialogHeader>
          <DialogTitle asChild>
            <h6 className="text-left">Cart ({addedProducts.length})</h6>
          </DialogTitle>
          <DialogDescription className="sr-only">User cart</DialogDescription>
        </DialogHeader>
        {addedProducts.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-4">
            <p>Your cart is empty</p>
            <ShoppingCart size={40} />
            <DialogClose>
              <Button>Start Shopping</Button>
            </DialogClose>
          </div>
        ) : (
          // Render cart items here
          <div>{/* Map addedProducts and show items */}</div>
        )}
      </DialogContent>
    </Dialog>
  );
}
