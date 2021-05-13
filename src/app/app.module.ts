import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { TitleComponent } from './title/title.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GenreNavbarComponent } from './genre-navbar/genre-navbar.component';
import { GenresComponent } from './genres/genres.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductSectionComponent,
    TitleComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent,
    ContactusComponent,
    NavbarComponent,
    PageNotFoundComponent,
    GenreNavbarComponent,
    GenresComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
