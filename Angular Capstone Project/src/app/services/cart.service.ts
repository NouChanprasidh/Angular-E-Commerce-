import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();
  
  // Add message subject
  private messageSubject = new BehaviorSubject<string>('');
  message$ = this.messageSubject.asObservable();

  constructor() {
    // Load cart from localStorage if it exists
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems.next(JSON.parse(savedCart));
    }
  }

  addToCart(product: CartItem) {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(item => item.id === product.id);

    if (existingItem) {
      // If item exists, increment quantity
      const updatedItems = currentItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
      this.cartItems.next(updatedItems);
      this.messageSubject.next(`Added another ${product.name} to cart`);
    } else {
      // If item doesn't exist, add it with quantity 1
      this.cartItems.next([...currentItems, { ...product, quantity: 1 }]);
      this.messageSubject.next(`${product.name} added to cart`);
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(this.cartItems.value));
    
    // Clear message after 3 seconds
    setTimeout(() => {
      this.messageSubject.next('');
    }, 3000);
  }

  removeFromCart(productId: number) {
    const updatedItems = this.cartItems.value.filter(item => item.id !== productId);
    this.cartItems.next(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  }

  getCartTotal(): number {
    return this.cartItems.value.reduce((total, item) => 
      total + (item.price * (item.quantity || 1)), 0);
  }

  getCartCount(): number {
    return this.cartItems.value.reduce((count, item) => 
      count + (item.quantity || 1), 0);
  }

  clearCart() {
    this.cartItems.next([]);
    localStorage.removeItem('cart');
  }
} 