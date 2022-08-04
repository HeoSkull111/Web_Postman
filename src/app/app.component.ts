import { Component, OnInit } from '@angular/core';
import { ArticleService } from './services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shop_module';
  constructor(private articlesServive: ArticleService) {}
  ngOnInit():void { 
    this.articlesServive.getPaginated(1, 10);
  }
  items = [
    { title: 'Home', icon: 'home', link: '/home'},
    { title: 'Help', icon: 'info-outline', link: '/shop'},
  ]   
}
