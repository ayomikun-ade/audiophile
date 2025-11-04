import { z } from "zod";

export const checkoutFormSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Invalid phone number format",
    }),

    address: z.string().min(5, { message: "Address is required" }),
    zipCode: z.string().min(5, {
      message: "Invalid ZIP Code format",
    }),
    city: z.string().min(1, { message: "City is required" }),
    country: z.string().min(1, { message: "Country is required" }),

    paymentMethod: z.enum(["e-Money", "Cash on Delivery"], {
      message: "Please select a payment method",
    }),

    eMoneyNumber: z.string().optional(),
    eMoneyPin: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.paymentMethod === "e-Money") {
        return !!data.eMoneyNumber && data.eMoneyNumber.length > 0;
      }
      return true;
    },
    {
      message: "e-Money Number is required",
      path: ["eMoneyNumber"],
    }
  )
  .refine(
    (data) => {
      if (data.paymentMethod === "e-Money") {
        return !!data.eMoneyPin && data.eMoneyPin.length > 0;
      }
      return true;
    },
    {
      message: "e-Money PIN is required",
      path: ["eMoneyPin"],
    }
  );

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
