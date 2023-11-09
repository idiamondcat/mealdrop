import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritePipe } from './pipes/favourite.pipe';
import { NewPipe } from './pipes/new.pipe';
import { ToRoundPipe } from './pipes/to-round.pipe';
import { ToSquarePipe } from './pipes/to-square.pipe';

@NgModule({
  declarations: [FavouritePipe, NewPipe, ToRoundPipe, ToSquarePipe],
  exports: [FavouritePipe, NewPipe, ToRoundPipe, ToSquarePipe],
  imports: [CommonModule],
})
export class SharedModule {}
