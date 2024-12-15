import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { CartService, CartItem } from '../services/cart.service';
import { FormsModule } from '@angular/forms';

interface ShippingInfo {
  fullName: string;
  email: string;
  address: string;
  phone: string;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems$ = this.cartService.cartItems$;
  shippingInfo: ShippingInfo = {
    fullName: '',
    email: '',
    address: '',
    phone: ''
  };
  showConfirmation = false;
  orderNumber = '';

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {}

  getCartTotal() {
    return this.cartService.getCartTotal();
  }

  placeOrder() {
    // Check if form is filled
    if (this.isFormValid()) {
      // Generate random order number
      this.orderNumber = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
      this.showConfirmation = true;
      
      // Clear cart after successful order
      setTimeout(() => {
        this.cartService.clearCart();
        this.router.navigate(['/']);
      }, 5000);
    }
  }

  isFormValid(): boolean {
    return !!(
      this.shippingInfo.fullName &&
      this.shippingInfo.email &&
      this.shippingInfo.address &&
      this.shippingInfo.phone
    );
  }
}
