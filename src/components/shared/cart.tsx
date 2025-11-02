"use client";
import { Minus, Plus, ShoppingCart } from "lucide-react";
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
import { MOCK_ORDER_SUMMARY } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Cart() {
  const addedProducts = MOCK_ORDER_SUMMARY.items;

  const [count, setCount] = useState<number>(1);
  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => {
    if (count === 1) return;
    setCount((prev) => prev - 1);
  };

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
      <DialogContent className="max-w-[377px] p-6 pt-8 top-[35%] sm:left-[55%] md:left-[65%] lg:left-[70%]">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle asChild>
              <h6 className="text-left">Cart ({addedProducts.length})</h6>
            </DialogTitle>
            <button className="underline opacity-50 hover:text-brand-primary cursor-pointer hover:opacity-100">
              Remove all
            </button>
          </div>
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
          <div className="flex flex-col gap-6 mt-6">
            {addedProducts.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    src={
                      "/earphones/product-yx1-earphones/mobile/image-product.jpg"
                    }
                    width={64}
                    height={64}
                    alt="product image"
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-sm font-bold truncate">{item.name}</p>
                    <p className="text-sm opacity-50 font-bold">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div
                  className={`w-24 h-8 bg-brand-neutral-200 flex justify-between items-center text-[13px] font-bold tracking-[1px] px-4`}
                >
                  <button
                    className="opacity-25 text-base font-bold transition-colors duration-300 hover:text-brand-primary hover:opacity-100 cursor-pointer"
                    onClick={handleDecrement}
                  >
                    <Minus size={12} />
                  </button>
                  {count}
                  <button
                    className="opacity-25 text-base font-bold transition-colors duration-300 hover:text-brand-primary hover:opacity-100 cursor-pointer"
                    onClick={handleIncrement}
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
            ))}

            <div>
              <p className="uppercase flex justify-between items-center mb-6">
                <span className="opacity-50">Total</span>
                <span className="text-brand-primary font-bold text-lg">
                  $5,446
                </span>
              </p>
              <Link href={"/checkout"}>
                <Button className="w-full">Checkout</Button>
              </Link>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
