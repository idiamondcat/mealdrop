import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderSuccessfulComponent } from './pages/order-successful/order-successful.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants/:id', component: RestaurantComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/list/:name', component: CategoryListComponent },
  { path: 'order', component: OrderComponent },
  { path: 'placed', component: OrderSuccessfulComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealdropRoutingModule {}
