import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NbActionsModule, NbButton, NbButtonModule, NbCardModule, NbUserModule } from '@nebular/theme';


@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbUserModule,
    NbActionsModule,
  ],
  exports: [
    NewsComponent
  ]
})
export class NewsModule { }
