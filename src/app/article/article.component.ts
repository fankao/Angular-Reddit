import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // By using @HostBinding() the host element (the app-article tag) we want to set the class attribute to have “row”
  @HostBinding('attr.class') cssClass = 'row';// cssClass - the CSS class we want to apply to the “host” of this component

  @Input()article: Article;

  constructor() {
    
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
    }
    voteDown(): boolean {
    this.article.voteDown();
    return false;
    }

  ngOnInit(): void {
  }
}
