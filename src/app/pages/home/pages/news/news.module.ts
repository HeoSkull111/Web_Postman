import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NbButton, NbButtonModule, NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NbCardModule,
    NbButtonModule,
  ],
  exports: [
    NewsComponent
  ]
})
export class NewsModule { }
