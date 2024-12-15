import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartTotal = 0;
  itemCount = 0;
  showDropdown = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Subscribe to cart changes to update the total and count
    this.cartService.cartItems$.subscribe(items => {
      this.cartTotal = items.reduce((total, item) => 
        total + (item.price * (item.quantity || 1)), 0);
      this.itemCount = items.reduce((count, item) => 
        count + (item.quantity || 1), 0);
    });
  }
}
