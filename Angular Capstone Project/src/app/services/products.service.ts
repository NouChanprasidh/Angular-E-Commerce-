import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'ASUS ROG Strix G18',
      price: 1500,
      oldPrice: 1800,
      image: '../../assets/img/product-thumb-1.jpg',
      description: 'High-performance gaming laptop with latest generation processor',
      category: 'Gaming'
    },
    {
      id: 2,
      name: 'Lenovo Legion 5',
      price: 1200,
      oldPrice: 1500,
      image: '../../assets/img/product-thumb-3.jpg',
      description: 'Powerful gaming laptop with excellent cooling system',
      category: 'Gaming'
    },
    {
      id: 3,
      name: 'Macbook Pro',
      price: 1800,
      oldPrice: 2000,
      image: '../../assets/img/product-thumb-2.jpg',
      description: 'Premium ultrabook with 4K OLED display',
      category: 'Premium'
    },
    {
      id: 4,
      name: 'Dell XPS 13',
      price: 1400,
      oldPrice: 1700,
      image: '../../assets/img/product-thumb-4.jpg',
      description: 'Compact ultrabook with InfinityEdge display',
      category: 'Premium'
    },
    {
      id: 5,
      name: 'Samsung Galaxy Book',
      price: 1400,
      oldPrice: 1600,
      image: '../../assets/img/product-thumb-5.jpg',
      description: '2-in-1 laptop with S Pen support',
      category: 'Premium'
    },
    {
      id: 6,
      name: 'ROG Zephyrus G14',
      price: 1800,
      oldPrice: 2100,
      image: '../../assets/img/product-thumb-6.jpg',
      description: 'Compact gaming powerhouse with AMD processor',
      category: 'Gaming'
    },
    {
      id: 7,
      name: 'Razer Blade 16',
      price: 2000,
      oldPrice: 2500,
      image: '../../assets/img/product-thumb-7.jpg',
      description: 'Premium gaming laptop with Mini LED display',
      category: 'Gaming'
    },
    {
      id: 8,
      name: 'Dell Alienware M18',
      price: 2000,
      oldPrice: 2500,
      image: '../../assets/img/product-thumb-8.jpg',
      description: 'Desktop replacement gaming laptop with 18-inch display',
      category: 'Gaming'
    },
    {
      id: 9,
      name: 'ASUS ROG Backpack',
      price: 19,
      oldPrice: 29,
      image: '../../assets/img/h4-slide2.png',
      description: 'Performance and Rugged Backpack.',
      category: 'Accessories'
    },
    {
      id: 10,
      name: 'Razer Cobra Pro',
      price: 40,
      oldPrice: 50,
      image: '../../assets/img/h4-slide3.jpg',
      description: 'Compact and Performance Gaming Mouse',
      category: 'Accessories'
    },
    {
      id: 11,
      name: 'Kingston HyperX Gaming Headset',
      price: 130,
      oldPrice: 150,
      image: '../../assets/img/h4-slide4.jpg',
      description: 'Premium Gaming headset',
      category: 'Accessories'
    },
    {
      id: 12,
      name: 'Razer Huntsman Mini',
      price: 65,
      oldPrice: 70,
      image: '../../assets/img/huntsman-mini.jpg',
      description: 'Gaming Keyboard',
      category: 'Gaming'
    },
    {
      id: 13,
      name: 'ROG Gladius III Gaming Mouse',
      price: 80,
      oldPrice: 100,
      image: '../../assets/img/gladiusIII.jpg',
      description: 'Solid Performance Gaming Mouse',
      category: 'Gaming'
    },
    {
      id: 14,
      name: 'Secretlab TITAN Evo',
      price: 499,
      oldPrice: 599,
      image: '../../assets/img/evo.jpg',
      description: 'Premium Gaming Chair with ergonomic design',
      category: 'Gaming'
    },
    {
      id: 15,
      name: 'Xbox Elite Controller',
      price: 179,
      oldPrice: 199,
      image: '../../assets/img/xbox.jpg',
      description: 'Professional gaming controller with customizable buttons',
      category: 'Gaming'
    },
    {
      id: 16,
      name: 'Logitech G Pro X',
      price: 149,
      oldPrice: 169,
      image: '../../assets/img/logitech.jpg',
      description: 'Professional gaming mouse with HERO sensor',
      category: 'Gaming'
    }
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);
  products$ = this.productsSubject.asObservable();

  constructor() {}

  getAllProducts() {
    return this.products$;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }

  getProductsByCategory(category: string) {
    return this.products$.pipe(
      map(products => products.filter(product => {
        if (category.toLowerCase() === 'gaming') {
          return [
            'ASUS ROG Strix G18',
            'Lenovo Legion 5',
            'ROG Zephyrus G14',
            'Razer Blade 16',
            'Dell Alienware M18'
          ].includes(product.name);
        } else if (category.toLowerCase() === 'business') {
          return [
            'Macbook Pro',
            'Dell XPS 13',
            'Samsung Galaxy Book'
          ].includes(product.name);
        } else if (category.toLowerCase() === 'ultrabook') {
          return [
            'Dell XPS 13',
            'Macbook Pro',
            'Samsung Galaxy Book'
          ].includes(product.name);
        } else if (category.toLowerCase() === 'mouse') {
          return ['Razer Cobra Pro', 'Logitech G Pro X'].includes(product.name);
        } else if (category.toLowerCase() === 'keyboard') {
          return ['Razer Huntsman Mini'].includes(product.name);
        } else if (category.toLowerCase() === 'headset') {
          return ['Kingston HyperX Gaming Headset'].includes(product.name);
        } else if (category.toLowerCase() === 'chair') {
          return ['Secretlab TITAN Evo'].includes(product.name);
        } else if (category.toLowerCase() === 'controller') {
          return ['Xbox Elite Controller'].includes(product.name);
        }
        return product.category.toLowerCase() === category.toLowerCase();
      }))
    );
  }

  searchProducts(term: string) {
    return this.products$.pipe(
      map(products => products.filter(product => 
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase()) ||
        product.category.toLowerCase().includes(term.toLowerCase())
      ))
    );
  }
} 