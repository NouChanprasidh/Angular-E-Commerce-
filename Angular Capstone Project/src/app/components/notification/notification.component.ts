import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (message$ | async; as message) {
      <div class="notification-container">
        <div class="alert alert-success" role="alert">
          {{ message }}
        </div>
      </div>
    }
  `,
  styles: [`
    .notification-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
      animation: slideIn 0.5s ease-out;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }

    .alert {
      padding: 1rem;
      border-radius: 4px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
  `]
})
export class NotificationComponent implements OnInit {
  message$ = this.cartService.message$;

  constructor(private cartService: CartService) {}

  ngOnInit() {}
} 