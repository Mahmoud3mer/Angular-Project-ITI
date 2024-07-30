import { Component } from '@angular/core';
import { Product } from './product';
import { ProductCardComponent } from '../product-card/product-card.component';

  @Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  products: Product[] = [
    {
      name: 'Ipone 11',
      price: 15000,
      imageUrl: '../../assets/Images/Apple-iPhone-11.webp',
      onSale: true
    },
    {
      name: 'Ipone 12 pro',
      price: 30000,
      imageUrl: '../../assets/Images/Apple-iPhone-12-Pro.webp',
      onSale: true
    },
    {
      name: 'Ipone 13 pro',
      price: 40000,
      imageUrl: '../../assets/Images/iPhone-13-Pro-1.webp',
      onSale: false
    }
  ];
}
