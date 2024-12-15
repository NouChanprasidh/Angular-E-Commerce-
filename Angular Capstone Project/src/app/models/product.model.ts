import { Schema, model } from 'mongoose';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number },
  image: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true }
}, {
  timestamps: true
});

export const Product = model<IProduct>('Product', productSchema); 