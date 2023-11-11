import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './core/pages/error-page/error-page.component';
import { ShellComponent } from './core/components/shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./mealdrop/mealdrop.module').then(m => m.MealdropModule),
      },
      { path: 'page-not-found', component: ErrorPageComponent },
      { path: '**', redirectTo: 'page-not-found' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
