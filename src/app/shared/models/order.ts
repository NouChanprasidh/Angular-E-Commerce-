export interface Order {
  customerName: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  products: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  orderDate?: Date;
  status?: string;
} 