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
import { OrderSuccessfulComponent } from './pages/order-successful/order-successful.component';
import { FirstStepComponent } from './components/first-step/first-step.component';
import { SecondStepComponent } from './components/second-step/second-step.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderBlockComponent } from './components/order-block/order-block.component';

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
    OrderComponent,
    FirstStepComponent,
    SecondStepComponent,
    OrderSuccessfulComponent,
    CategoryListComponent,
    NotFoundComponent,
    OrderBlockComponent,
  ],
  imports: [
    CommonModule,
    MealdropRoutingModule,
    SharedModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MealdropModule {}
