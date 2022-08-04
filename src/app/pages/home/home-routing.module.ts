import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      {
        path: 'news',
        loadChildren: ()  =>
        import('./pages/news/news.module').then(m => m.NewsModule),
      },
      {
        path: 'about',
        loadChildren: () =>
        import('./pages/about/about.module').then(m => m.AboutModule),
      },
    ] 
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
