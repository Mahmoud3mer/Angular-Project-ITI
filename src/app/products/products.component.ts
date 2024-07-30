import { Component } from '@angular/core';
import { Product } from '../product/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { products } from './../../assets/problemSolving/Lab';

@Component({
    selector: 'app-products',
    standalone: true,
    imports: [ProductCardComponent],
    templateUrl: './products.component.html',
    styleUrl: './products.component.css'
})

export class ProductsComponent {
    // products = products;  // problem on products.component.html (data)

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
        },
        {
            name: 'Ipone 13 pro',
            price: 40000,
            imageUrl: '../../assets/Images/iPhone-13-Pro-1.webp',
            onSale: false
        },
        {
            name: 'Ipone 13 pro',
            price: 40000,
            imageUrl: '../../assets/Images/iPhone-13-Pro-1.webp',
            onSale: false
        },
        {
            name: 'Ipone 13 pro',
            price: 40000,
            imageUrl: '../../assets/Images/iPhone-13-Pro-1.webp',
            onSale: false
        },
        {
            name: 'Ipone 13 pro',
            price: 40000,
            imageUrl: '../../assets/Images/iPhone-13-Pro-1.webp',
            onSale: false
        },
        {
            name: 'Ipone 13 pro',
            price: 40000,
            imageUrl: '../../assets/Images/iPhone-13-Pro-1.webp',
            onSale: false
        },
        {
            name: 'Ipone 13 pro',
            price: 40000,
            imageUrl: '../../assets/Images/iPhone-13-Pro-1.webp',
            onSale: false
        },
        {
            name: 'Ipone 13 pro',
            price: 40000,
            imageUrl: '../../assets/Images/iPhone-13-Pro-1.webp',
            onSale: false
        }
    ];
}
