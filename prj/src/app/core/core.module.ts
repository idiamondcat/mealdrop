import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ShellComponent } from './components/shell/shell.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    ShellComponent,
  ],
  exports: [ShellComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
