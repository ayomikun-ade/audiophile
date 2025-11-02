"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { checkoutFormSchema, CheckoutFormValues } from "@/lib/schema";
import Image from "next/image";
import CashIcon from "@/assets/icon-cash-on-delivery.svg";
import SuccessModal from "@/components/shared/order-success";
import { MOCK_ORDER_SUMMARY } from "@/lib/data";
import { Button } from "@/components/ui/button";

const initialValues: Partial<CheckoutFormValues> = {
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  zipCode: "",
  city: "",
  country: "",
  paymentMethod: "e-Money",
  eMoneyNumber: "",
  eMoneyPin: "",
};

const CheckoutPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: initialValues,
    mode: "onBlur",
  });

  const { paymentMethod } = form.watch();

  const orderData = MOCK_ORDER_SUMMARY;

  const handleClose = () => {
    setIsModalOpen(false);
    // You might also clear the cart or navigate away here
  };

  const handleBackToHome = () => {
    console.log("Navigating back to home...");
    setIsModalOpen(false);
  };

  const onSubmit = (data: CheckoutFormValues) => {
    console.log("Form Submitted:", data);
    setIsModalOpen(true);
  };

  return (
    <main className="bg-brand-neutral-200 max-lg:pt-[124px] lg:pt-44">
      <section className="brand-width mx-auto px-6 pb-[141px]">
        <Link href={"/"} className="">
          <p className="inline-block opacity-50 hover:text-brand-primary hover:opacity-100 transition-colors duration-300">
            Go Back
          </p>
        </Link>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <section className="pt-[38px] flex max-lg:flex-col gap-[30px]">
              <div className="bg-white p-6 lg:px-12 lg:py-[54px] rounded-xl lg:max-w-[730px] w-full">
                <h3 className="mb-10">Checkout</h3>
                {/* --- BILLING DETAILS --- */}
                <p className="subtitle text-brand-primary mb-4">
                  Billing Details
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-center">
                          <FormLabel className="text-xs font-bold">
                            Name
                          </FormLabel>
                          <FormMessage />
                        </div>
                        <FormControl>
                          <Input
                            className="placeholder:font-bold placeholder:text-sm focus:outline-none focus:border-brand-primary"
                            placeholder="Alexei Ward"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* Email Address */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-center">
                          <FormLabel className="text-xs font-bold">
                            Email Address
                          </FormLabel>
                          <FormMessage />
                        </div>
                        <FormControl>
                          <Input
                            className="placeholder:font-bold placeholder:text-sm"
                            type="email"
                            placeholder="alexei@mail.com"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* Phone Number */}
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-center">
                          <FormLabel className="text-xs font-bold">
                            Phone Number
                          </FormLabel>
                          <FormMessage />
                        </div>
                        <FormControl>
                          <Input
                            className="placeholder:font-bold placeholder:text-sm"
                            placeholder="+1 202-555-0136"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* --- SHIPPING INFO --- */}
                <p className="subtitle text-brand-primary mt-16 mb-4">
                  Shipping Info
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Address (takes full width on small screens) */}
                  <div className="md:col-span-2">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex justify-between items-center">
                            <FormLabel className="text-xs font-bold">
                              Address
                            </FormLabel>
                          </div>
                          <FormControl>
                            <Input
                              className="placeholder:font-bold placeholder:text-sm"
                              placeholder="1137 Williams Avenue"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* ZIP Code */}
                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-center">
                          <FormLabel className="text-xs font-bold">
                            ZIP Code
                          </FormLabel>
                          <FormMessage />
                        </div>
                        <FormControl>
                          <Input
                            className="placeholder:font-bold placeholder:text-sm"
                            placeholder="10001"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* City */}
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-center">
                          <FormLabel className="text-xs font-bold">
                            City
                          </FormLabel>
                          <FormMessage />
                        </div>
                        <FormControl>
                          <Input
                            className="placeholder:font-bold placeholder:text-sm"
                            placeholder="New York"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* Country */}
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-center">
                          <FormLabel className="text-xs font-bold">
                            Country
                          </FormLabel>
                          <FormMessage />
                        </div>
                        <FormControl>
                          <Input
                            className="placeholder:font-bold placeholder:text-sm"
                            placeholder="United States"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* --- PAYMENT DETAILS --- */}
                <p className="subtitle text-brand-primary mt-16 mb-4">
                  Payment Details
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <p className="text-sm font-bold">Payment Method</p>
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem className="space-y-3 md:col-span-1">
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-4"
                          >
                            {/* e-Money Radio Button */}
                            <FormItem className="flex items-center space-x-3 rounded-md border p-4 hover:border-brand-primary has-checked:border-brand-primary transition-colors duration-200">
                              <FormControl>
                                <RadioGroupItem value="e-Money" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                e-Money
                              </FormLabel>
                            </FormItem>

                            {/* Cash on Delivery Radio Button */}
                            <FormItem className="flex items-center space-x-3 rounded-md border p-4 hover:border-brand-primary has-checked:border-brand-primary transition-colors duration-200">
                              <FormControl>
                                <RadioGroupItem value="Cash on Delivery" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Cash on Delivery
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* --- CONDITIONAL e-Money FIELDS --- */}
                {paymentMethod === "e-Money" ? (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
                    {/* e-Money Number */}
                    <FormField
                      control={form.control}
                      name="eMoneyNumber"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex justify-between items-center">
                            <FormLabel className="text-xs font-bold">
                              e-Money Number
                            </FormLabel>
                            <FormMessage />
                          </div>
                          <FormControl>
                            <Input
                              className="placeholder:font-bold placeholder:text-sm"
                              placeholder="238521993"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {/* e-Money PIN */}
                    <FormField
                      control={form.control}
                      name="eMoneyPin"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex justify-between items-center">
                            <FormLabel className="text-xs font-bold">
                              e-Money PIN
                            </FormLabel>
                            <FormMessage />
                          </div>
                          <FormControl>
                            <Input
                              className="placeholder:font-bold placeholder:text-sm"
                              placeholder="6891"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-8 justify-between mt-6">
                    <Image
                      src={CashIcon}
                      width={48}
                      height={48}
                      alt="Cash on delivery icon"
                      className="w-12"
                    />
                    <p className="opacity-50 max-w-[554px]">
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white p-8 rounded-xl lg:max-w-[350px] w-full h-fit">
                <h6>Summary</h6>
                <div className="flex flex-col my-8 gap-6">
                  {orderData.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between"
                    >
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
                          <p className="text-sm font-bold truncate">
                            {item.name}
                          </p>
                          <p className="text-sm opacity-50 font-bold">
                            ${item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <span className="font-bold opacity-50">
                        x{item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="uppercase flex justify-between items-center">
                    <span className="opacity-50">Total</span>
                    <span className="font-bold text-lg">$5,396</span>
                  </p>
                  <p className="uppercase flex justify-between items-center">
                    <span className="opacity-50">Shipping</span>
                    <span className="font-bold text-lg">$50</span>
                  </p>
                  <p className="uppercase flex justify-between items-center">
                    <span className="opacity-50">Vat (included)</span>
                    <span className="font-bold text-lg">$1,079</span>
                  </p>
                </div>

                <p className="uppercase flex justify-between items-center mt-6 mb-8">
                  <span className="opacity-50">Grand Total</span>
                  <span className="text-brand-primary font-bold text-lg">
                    $5,446
                  </span>
                </p>

                <div>
                  <Button type="submit" className="w-full">
                    Continue & Pay
                  </Button>
                  <SuccessModal
                    isOpen={isModalOpen}
                    onClose={handleClose}
                    orderSummary={orderData}
                    onBackToHome={handleBackToHome}
                  />
                </div>
              </div>
            </section>
          </form>
        </Form>
      </section>
    </main>
  );
};

export default CheckoutPage;
