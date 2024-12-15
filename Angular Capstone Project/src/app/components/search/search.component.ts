import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="search-container">
      <form class="search-form" (submit)="search()">
        <input 
          type="text" 
          placeholder="Search for products..."
          [(ngModel)]="searchTerm"
          name="search"
          class="search-input"
        >
        <button type="submit" class="search-button">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  `,
  styles: [`
    .search-container {
      padding: 20px 0;
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .search-form {
      display: flex;
      width: 100%;
      max-width: 600px;
    }

    .search-input {
      width: 100%;
      padding: 12px 20px;
      border: 2px solid #5a88ca;
      border-right: none;
      border-radius: 25px 0 0 25px;
      outline: none;
      font-size: 16px;
    }

    .search-button {
      padding: 12px 25px;
      background:#0d0d0d;
      color: white;
      border: 2px solid #5a88ca;
      border-radius: 0 25px 25px 0;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .search-button:hover {
      background: #4a78ba;
    }
  `]
})
export class SearchComponent {
  searchTerm: string = '';

  constructor(private router: Router) {}

  search() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/products'], {
        queryParams: { search: this.searchTerm }
      });
    }
  }
} 