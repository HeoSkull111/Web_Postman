import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NbTabsetModule } from '@nebular/theme';
import { NewsModule } from './pages/news/news.module';
import { AboutModule } from './pages/about/about.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbTabsetModule,
    NewsModule,
    AboutModule
  ]
})
export class HomeModule { }
