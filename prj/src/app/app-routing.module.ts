import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  {    path: '', component:  HomeComponent},
  {    path: 'restaurants/:id', component: RestaurantComponent},
  {    path: 'categories', component: CategoriesComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
