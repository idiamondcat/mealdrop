import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { MealdropRoutingModule } from './mealdrop-routing.module';
import { SliderComponent } from './components/slider/slider.component';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OrderComponent } from './pages/order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardComponent,
    CategoryComponent,
    ProductComponent,
    CategoriesComponent,
    HomeComponent,
    RestaurantComponent,
    SliderComponent,
    ModalComponent,
    SidebarComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    MealdropRoutingModule,
    SharedModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class MealdropModule {}
