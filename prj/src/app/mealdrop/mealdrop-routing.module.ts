import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants/:id', component: RestaurantComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'order', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealdropRoutingModule {}
