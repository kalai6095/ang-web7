import {User} from "./User";

export class Post {

  id: number;
  title: string;
  author: User['id'];
  image: string;
  publishdate: string;
  excert: string;

  constructor(id: number, title: string, author: number, image: string, publishdate: string, excert: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.image = image;
    this.publishdate = publishdate;
    this.excert = excert;
  }
}
