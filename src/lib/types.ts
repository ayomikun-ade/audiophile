export type OrderItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type OrderSummary = {
  items: OrderItem[];
  grandTotal: number;
};
