import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../services/cart.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems$ = this.cartService.cartItems$;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {}

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  getCartTotal() {
    return this.cartService.getCartTotal();
  }

  checkout() {
    // Navigate to checkout page
    this.router.navigate(['/checkout']);
  }
} 