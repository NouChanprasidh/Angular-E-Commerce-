import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LatestProductsComponent } from '../latest-products/latest-products.component';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../services/cart.service';
import { SearchComponent } from '../components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    SlickCarouselModule,
    LatestProductsComponent,
    SearchComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  showDropdown = false;

  constructor(private cartService: CartService) {}

  addToCart(product: CartItem) {
    this.cartService.addToCart(product);
  }

  // Main carousel configuration
  slides = [
    {
      img: '../../assets/img/h4-slide.png',
      title: ' ',
      greentext: '',
      subtitle: '',
    },
    {
      img: '../../assets/img/h4-slide2.png',
      title: '',
      greentext: '',
      subtitle: 'Free Backpacks.*',
    },
    {
      img: '../../assets/img/h4-slide3.png',
      title: ' ',
      greentext: '',
      subtitle: '',
    },
    {
      img: '../../assets/img/h4-slide4.jpg',
      title: '',
      greentext: '',
      subtitle: '',
    },
  ];
  slideConfig = {
    accessibility: true,
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    isFinite: true,
    arrows: true,
    nextArrow:
      '<i class="fa fa-chevron-right mainslick-next" style="color: #5a88ca;"></i>',
    prevArrow:
      '<i class="fa fa-chevron-left mainslick-prev" style="color: #5a88ca;"></i>',
  };

  // Brands carousel configuration
  slideConfigLogos = {
    accessibility: true,
    dots: false,
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 1500,
    isFinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: '<button type="button" class=" logoslick-next ">next</button>',
    prevArrow: '<button type="button" class="  logoslick-prev  ">prev</button>',
  };
  slidesLogos = [
    { img: '../../assets/img/brand1.png' },
    { img: '../../assets/img/brand2.png' },
    { img: '../../assets/img/brand3.png' },
    { img: '../../assets/img/brand4.png' },
    { img: '../../assets/img/brand5.png' },
    { img: '../../assets/img/brand6.png' },
    { img: '../../assets/img/brand1.png' },
    { img: '../../assets/img/brand2.png' },
  ];

  // Latest products carousel configuration
  slideConfiglatestProducts = {
    accessibility: true,
    dots: false,
    slidesToShow: 5,
    autoplay: false,
    autoplaySpeed: 1500,
    isFinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: '<button type="button" class=" logoslick-next ">next</button>',
    prevArrow: '<button type="button" class="  logoslick-prev  ">prev</button>',
  };
}
