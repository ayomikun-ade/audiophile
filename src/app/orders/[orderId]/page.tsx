"use client";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import React from "react";
import { api } from "../../../../convex/_generated/api";
import { MapPin, User, Tag, DollarSign, PackageX } from "lucide-react";
import LoadingScreen from "@/components/shared/loading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { earphonesData, headphonesData, speakersData } from "@/lib/data";
import Image from "next/image";
import { motion } from "motion/react";

const OrderDetails = () => {
  const { orderId } = useParams();
  const products = [...headphonesData, ...earphonesData, ...speakersData];

  const customId = Array.isArray(orderId) ? orderId[0] : orderId;

  const order = useQuery(
    api.orders.getOrderByCustomId,
    customId ? { customId: customId } : "skip"
  );

  const getProductImageById = (id: string) => {
    const product = products.find((item) => item.id === id);
    return product?.mobileUrl ?? "";
  };

  if (order === undefined) {
    return (
      <div className="py-[120px] brand-width mx-auto px-6 max-w-lg w-fit flex justify-center min-h-[calc(100vh-366px)]">
        <LoadingScreen />
      </div>
    );
  }
  if (order === null) {
    return (
      <div className="py-[120px] mx-auto px-6 flex flex-col items-center justify-center max-w-md min-h-[calc(100vh-366px)]">
        <PackageX size={64} className="text-brand-primary" />
        <p>Order not found.</p>
        <p className="subtitle text-center">
          An order with that ID was not found. Please confirm the ID and try
          again.
        </p>
        <Link href={"/"}>
          <Button>Go Home</Button>
        </Link>
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    if (typeof amount !== "number") return "N/A";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <section className="py-[120px] brand-width mx-auto px-6">
      <Link href={"/headphones"} className="">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="inline-block opacity-50 hover:text-brand-primary hover:opacity-100 transition-colors duration-300"
        >
          Go Back
        </motion.p>
      </Link>
      <div className="space-y-8 mb-8 mt-8">
        {/* Header and Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-white rounded-xl shadow-m border"
        >
          <div>
            <h3>
              Order Summary for{" "}
              <span className="text-brand-primary">{order.orderId}</span>
            </h3>
            <p className="text-sm opacity-50 mt-1 capitalize">
              Status: {order.status}
            </p>
            <p className="text-sm opacity-50 mt-1">
              Placed: {new Date(order.createdAt).toLocaleDateString()}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="p-6 bg-white rounded-xl shadow-md space-y-4">
            <h5 className=" flex items-center border-b pb-2 mb-3">
              <User className="w-5 h-5 mr-2 text-brand-primary" /> Customer
              Information
            </h5>
            <p className="text-gray-700">
              <strong>Name:</strong> {order.customer.name}
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> {order.customer.email}
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> {order.customer.phone}
            </p>
          </div>

          {/* Shipping Address Card */}
          <div className="p-6 bg-white rounded-xl shadow-md space-y-4">
            <h5 className="flex items-center border-b pb-2 mb-3">
              <MapPin className="w-5 h-5 mr-2 text-brand-primary" /> Shipping
              Address
            </h5>
            <p className="text-gray-700">
              <strong>Address Line:</strong> {order.shipping.address}
            </p>
            <p className="text-gray-700">
              <strong>City/ZIP:</strong>
              {order.shipping.city}, {order.shipping.zip}
            </p>
            <p className="text-gray-700">
              <strong>Country: </strong>
              {order.shipping.country}
            </p>
          </div>
        </motion.div>

        {/* Ordered Items Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
          className="p-6 bg-white rounded-xl shadow-md"
        >
          <h5 className="mb-4 flex items-center border-b pb-2">
            <Tag className="w-5 h-5 mr-2 text-brand-primary" /> Ordered Items
          </h5>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">
                    Preview
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">
                    Product
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Qty
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Unit Price
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {order.items.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <Image
                        src={getProductImageById(item.id)}
                        width={40}
                        height={40}
                        alt={`${item.name} image`}
                        className="rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      {item.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      {formatCurrency(item.price)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 text-right">
                      {formatCurrency(item.price * item.quantity)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Totals Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
          className="p-6 bg-white rounded-xl shadow-md"
        >
          <h5 className="mb-4 flex items-center border-b pb-2">
            <DollarSign className="w-5 h-5 mr-2 text-brand-primary" /> Payment
            Summary
          </h5>
          <div className="max-w-xs ml-auto space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-medium">
                {formatCurrency(order.totals.subtotal)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span className="font-medium">
                {formatCurrency(order.totals.shipping)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>VAT(included):</span>
              <span className="font-medium">
                {formatCurrency(order.totals.taxes)}
              </span>
            </div>
            <div className="flex justify-between pt-3 border-t-2 border-gray-200 text-lg font-bold text-gray-900">
              <span>Grand Total:</span>
              <span>{formatCurrency(order.totals.grandTotal)}</span>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5, ease: "easeInOut" }}
        className="flex justify-self-end"
      >
        <Link href={"/"}>
          <Button>Continue Shopping</Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default OrderDetails;
