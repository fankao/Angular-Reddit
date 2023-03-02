import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // By using @HostBinding() the host element (the app-article tag) we want to set the class attribute to have “row”
  @HostBinding('attr.class') cssClass = 'row';// cssClass - the CSS class we want to apply to the “host” of this component

  votes: number; // votes - a number representing the sum of all upvotes, minus the downvotes

  title: string; // title - a string holding the title of the article

  link: string; // link - a string holding the URL of the article

  constructor() {
    this.title = 'Angular';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  ngOnInit(): void {
  }

  /*JavaScript, by default, propagates the click event to all the parent components.
  Because the click event is propagated to parents, our browser is trying to follow the
  empty link, which tells the browser to reload.*/

  voteUp(): boolean {
    this.votes += 1;
    return false;
  }

  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }

}
