import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  
  constructor(private articlesService: ArticleService) { }
  articles: any[] =[];
  ngOnInit(): void {
    this.articlesService.getPaginated(1, 10).subscribe((data) => {
      this.articles.length=0;
      for (let article of data) {
        this.articles.push(article);
        this.articlesService.getById(article.id).subscribe((value) => {
          article['body'] = value['body_html']
        });
      }
    });
  }

  toLink(link: string) {
    window.open(link, '_blank');
  }
}
