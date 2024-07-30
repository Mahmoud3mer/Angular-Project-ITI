import { Component } from '@angular/core';
import { Slide } from './slide';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  slides: Slide[] = [
    {
      image: '../../assets/Images/iPhone-13-Pro-1.webp',
      price: 40000,
      category: 'Iphone'
    },
    {
      image: '../../assets/Images/Apple-iPhone-12-Pro.webp',
      price: 30000,
      category: 'Iphone'
    },
    {
      image: '../../assets/Images/Apple-iPhone-11.webp',
      price: 15000,
      category: 'Iphone'
    }
  ]
}
