export class Article {
    title: string;
    link: string;
    votes: number;
    constructor(title: string, link: string, votes?: number){
        this.title = title;
        this.link = link;
        this.votes = votes || 0
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
// domain() is a utility function that extracts
// the domain from a URL, which we'll explain shortly
  domain(): string{
    try {
        const domainAndPath: string = this.link.split('//')[1];
        return domainAndPath.split('/')[0];
    } catch (error) {
        return null;
    }
  }

}