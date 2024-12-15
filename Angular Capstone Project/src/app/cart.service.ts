import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = []; // Array to hold cart items

  constructor() {}

  // Add item to cart
  addToCart(item: any) {
    this.cart.push(item);
    console.log('Item added:', item);
  }

  // Get all items in the cart
  getCartItems() {
    return this.cart;
  }

  // Remove item from cart
  removeFromCart(item: any) {
    const index = this.cart.indexOf(item);
    if (index > -1) {
      this.cart.splice(index, 1);
      console.log('Item removed:', item);
    }
  }

  // Clear all items from the cart
  clearCart() {
    this.cart = [];
    console.log('Cart cleared');
  }
}
