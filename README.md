# Audiophile E-Commerce 🎧

A full-stack e-commerce application for high-end audio equipment, built with a modern, performant, and type-safe stack. This project features a complete shopping experience, from browsing products to receiving order confirmation emails, all deployed on a serverless architecture.

**[Live Demo](https://audiophile-five-hazel.vercel.app)**

## ✨ Features

- **Product Catalog**: Browse products across multiple categories like headphones, speakers, and earphones.
- **Dynamic Product Pages**: View detailed information, features, and image galleries for each product.
- **Shopping Cart**: Add/remove items, and update quantities with persistent state management.
- **Full Checkout Flow**: A multi-step form with client-side validation for a seamless checkout experience.
- **Serverless Backend**: Utilizes Convex for real-time database operations and backend functions.
- **Order Confirmation**: Automated email notifications upon successful order placement.
- **Order Tracking**: A dedicated page to view the details of a placed order using a unique ID.
- **Responsive Design**: A mobile-first design that adapts beautifully to tablet and desktop screens.

## 🛠️ Technologies Used

| Category          | Technology                                                                |
| ----------------- | ------------------------------------------------------------------------- |
| **Framework**     | [Next.js](https://nextjs.org/)                                            |
| **Language**      | [TypeScript](https://www.typescriptlang.org/)                             |
| **Backend**       | [Convex](https://www.convex.dev/)                                         |
| **Styling**       | [Tailwind CSS](https://tailwindcss.com/)                                  |
| **UI Components** | [Shadcn/ui](https://ui.shadcn.com/)                                       |
| **State Mgt.**    | [Zustand](https://github.com/pmndrs/zustand)                              |
| **Form Handling** | [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) |
| **Emailing**      | [Nodemailer](https://nodemailer.com/)                                     |

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Installation

1.  **Clone the Repository**:

    ```bash
    git clone https://github.com/ayomikun-ade/audiophile.git
    cd audiophile
    ```

2.  **Install Dependencies**:

    ```bash
    npm install
    ```

3.  **Set Up Convex**:
    Log in to your Convex account and set up a new project. Then, run the development server which syncs your schema and functions.

    ```bash
    npx convex dev
    ```

    Keep this process running in a separate terminal.

4.  **Run the Development Server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

### Environment Variables

Create a `.env.local` file in the root of the project and add the following variables.

```env
# Get this from your Convex project dashboard
CONVEX_DEPLOYMENT=dev:your-project-name
NEXT_PUBLIC_CONVEX_URL=https://your-project-url.convex.cloud

# Gmail user for sending emails
EMAIL_USER=your-email@gmail.com
# Gmail App Password (https://support.google.com/accounts/answer/185833)
EMAIL_APP_PASSWORD=your_gmail_app_password

# Your local or deployed base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## API Documentation

The application uses a Next.js API route to handle sending order confirmation emails.

### Base URL

`/api`

### Endpoints

#### POST /send-order-email

Sends an order confirmation email to the customer after a successful checkout.

**Request**:

```json
{
  "orderId": "ORD-LXV5J-515",
  "customerName": "John Doe",
  "customerEmail": "john.doe@example.com",
  "items": [
    {
      "id": "xx99-mark-two",
      "name": "XX99 Mark II",
      "price": 2999,
      "quantity": 1,
      "image": "/products/xx99-mark-two/mobile.jpg"
    }
  ],
  "totalAmount": 3049,
  "shipping": {
    "name": "John Doe",
    "address": "123 Main St",
    "city": "Anytown",
    "zip": "12345",
    "country": "United States"
  }
}
```

**Response**:

```json
{
  "message": "Email sent successfully"
}
```

**Errors**:

- `400 Bad Request`: `Missing required fields` - One or more required fields in the request body are missing.
- `500 Internal Server Error`: `Failed to send email` - The server encountered an error while trying to send the email via Nodemailer.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

- **Fork the repository** on GitHub.
- **Clone your fork**: `git clone https://github.com/ayomikun-ade/audiophile.git`
- **Create a new branch**: `git checkout -b feature/your-feature-name`
- **Make your changes** and commit them: `git commit -m 'Add some feature'`
- **Push to the branch**: `git push origin feature/your-feature-name`
- **Submit a pull request**.

## 📄 License

This project is proprietary and not available under an open-source license.

## 👤 Author

Meeee

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
