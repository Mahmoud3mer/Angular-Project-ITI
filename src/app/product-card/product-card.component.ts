import { Component, Input, Output } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  // @Input() data: Product = {} as Product;
  @Input() data!: Product;
}
