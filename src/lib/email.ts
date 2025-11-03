import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ShippingDetails {
  name: string;
  address: string;
  city: string;
  zip: string;
  country: string;
}

interface EmailData {
  orderId: string;
  customerName: string;
  customerEmail: string;
  orderDate: string;
  items: OrderItem[];
  totalAmount: number;
  shipping: ShippingDetails;
}

export async function sendOrderConfirmationEmail(
  data: EmailData
): Promise<void> {
  const templatePath = path.join(
    process.cwd(),
    "src",
    "lib",
    "email-template.html"
  );
  let emailTemplate = fs.readFileSync(templatePath, "utf-8");

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://audiophile-five-hazel.vercel.app";

  const getAbsoluteUrl = (url: string) => {
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    return `${baseUrl}${url.startsWith("/") ? "" : "/"}${url}`;
  };

  const itemsHTML = data.items
    .map(
      (item, index) => `
                    <div
                      class="order-item"
                      style="
                        padding: 15px;
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        ${
                          index < data.items.length - 1
                            ? "border-bottom: 1px solid #e0e0e0;"
                            : ""
                        }
                      "
                    >
                      <img
                        src="${getAbsoluteUrl(item.image)}"
                        alt="${item.name}"
                        style="
                          width: 64px;
                          height: 64px;
                          border-radius: 8px;
                          object-fit: cover;
                        "
                      />
                      <div style="flex: 1; padding-left: 16px;">
                        <div
                          style="
                            color: #101010;
                            font-weight: bold;
                            margin-bottom: 5px;
                          "
                          class="dark-mode-text"
                        >
                          ${item.name}
                        </div>
                        <div style="color: #666666; font-size: 14px">
                          Quantity: ${item.quantity}
                        </div>
                      </div>
                      <div
                        style="
                          color: #d87d4a;
                          font-weight: bold;
                          font-size: 16px;
                          padding-left: 16px;
                        "
                      >
                        $${(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>`
    )
    .join("");

  // Generate order view URL
  const orderViewUrl = `${baseUrl}/orders/${data.orderId}`;

  emailTemplate = emailTemplate
    .replace(/{{company_name}}/g, "Audiophile")
    .replace(/{{customer_name}}/g, data.customerName)
    .replace(/{{order_id}}/g, data.orderId)
    .replace(/{{order_date}}/g, data.orderDate)
    .replace(/{{ORDER_ITEMS}}/g, itemsHTML)
    .replace(/{{total_amount}}/g, data.totalAmount.toLocaleString())
    .replace(/{{ORDER_VIEW_URL}}/g, orderViewUrl)
    .replace(/{{shipping_name}}/g, data.shipping.name)
    .replace(/{{shipping_address}}/g, data.shipping.address)
    .replace(/{{shipping_city}}/g, data.shipping.city)
    .replace(/{{shipping_zip}}/g, data.shipping.zip)
    .replace(/{{shipping_country}}/g, data.shipping.country);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Audiophile" <${process.env.EMAIL_USER}>`,
    to: data.customerEmail,
    subject: `Order Confirmation - ${data.orderId}`,
    html: emailTemplate,
  });
}
