import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ProductSectionComponent} from './product-section/product-section.component'
import {GenresComponent} from './genres/genres.component'
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: 'textbooks',
        component: ProductSectionComponent
      }, 
      {
        path: 'genres',
        component: GenresComponent
      },
      {
        path: '',
        redirectTo: 'genres',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
