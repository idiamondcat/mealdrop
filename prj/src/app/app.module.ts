import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SliderComponent } from './components/slider/slider.component';
import { CategoryComponent } from './components/category/category.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NoFoodComponent } from './components/no-food/no-food.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CardComponent,
    SliderComponent,
    CategoryComponent,
    RestaurantComponent,
    CategoriesComponent,
    NoFoodComponent,
    ErrorPageComponent,
    ModalComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
