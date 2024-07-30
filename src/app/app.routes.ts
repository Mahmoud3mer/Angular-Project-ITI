import { Routes } from '@angular/router';
import homeComponent from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const routes: Routes = [
    {path: '' , redirectTo: 'home' , pathMatch: 'full'},
    {path: 'home' , component: homeComponent},
    {path: 'about' , component: AboutComponent},
    {path: 'contact' , component: ContactComponent},
    {path: 'products' , component: ProductsComponent},

    {path: '**' , component: NotFoundPageComponent}
];
