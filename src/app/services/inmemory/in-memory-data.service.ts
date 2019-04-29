import {Injectable} from '@angular/core';
import {InMemoryDbService, RequestInfo, ResponseOptions, STATUS} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  d: Date;

  constructor() {
    this.d = new Date();
  }

  createDb() {
    let local_date = this.d;
    const users = [
      {id: 11, "firstName": "kalai", lastname: "selvan", email: "kalai@gmail.com", password: "pass"},
      {id: 12, "firstName": "kurtis", lastname: "john", email: "kurtis@gmail.com", password: "pass"}
    ]

    const posts = [
      {
        'id': "1",
        'tagline': "Java Related-01",
        'title': "Java Blog",
        'author': "Jet Brains",
        'icon': "fa fa-bars fa-2x",
        'img': "assets/images/gallery-images/gallery-image-1.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      },
      {
        'id': "2",
        'tagline': "Angular Related-02",
        'title': " Angular Blog",
        'author': "Jet Brains ",
        'icon': "fa fa-user fa-2x",
        'img': "assets/images/gallery-images/gallery-image-2.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      },
      {
        'id': "3",
        'tagline': "Angular Related-03",
        'title': " Angular Blog",
        'author': "Jet Brains ",
        'icon': "fa fa-user fa-2x",
        'img': "assets/images/gallery-images/gallery-image-2.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      }, {
        'id': "4",
        'tagline': "Angular Related-04",
        'title': " Angular Blog",
        'author': "Jet Brains ",
        'icon': "fa fa-user fa-2x",
        'img': "assets/images/gallery-images/gallery-image-2.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      }, {
        'id': "5",
        'tagline': "Angular Related-05",
        'title': " Angular Blog",
        'author': "Jet Brains ",
        'icon': "fa fa-user fa-2x",
        'img': "assets/images/gallery-images/gallery-image-2.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      }, {
        'id': "6",
        'tagline': "Angular Related-06",
        'title': " Angular Blog",
        'author': "Jet Brains ",
        'icon': "fa fa-user fa-2x",
        'img': "assets/images/gallery-images/gallery-image-2.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      }, {
        'id': "7",
        'tagline': "Angular Related-07",
        'title': " Angular Blog",
        'author': "Jet Brains ",
        'icon': "fa fa-user fa-2x",
        'img': "assets/images/gallery-images/gallery-image-2.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      }, {
        'id': "8",
        'tagline': "Angular Related-08",
        'title': " Angular Blog",
        'author': "Jet Brains ",
        'icon': "fa fa-user fa-2x",
        'img': "assets/images/gallery-images/gallery-image-2.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      }, {
        'id': "9",
        'tagline': "Angular Related-09",
        'title': " Angular Blog",
        'author': "Jet Brains ",
        'icon': "fa fa-user fa-2x",
        'img': "assets/images/gallery-images/gallery-image-2.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      },
      {
        'id': "10",
        'tagline': "Angular Related-10",
        'title': " Angular Blog",
        'author': "Jet Brains ",
        'icon': "fa fa-user fa-2x",
        'img': "assets/images/gallery-images/gallery-image-2.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      }, {
        'id': "11",
        'tagline': "Java Related-11",
        'title': "Java Blog",
        'author': "Jet Brains",
        'icon': "fa fa-bars fa-2x",
        'img': "assets/images/gallery-images/gallery-image-1.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      },
      {
        'id': "12",
        'tagline': "Angular Related-12",
        'title': " Angular Blog",
        'author': "Jet Brains ",
        'icon': "fa fa-user fa-2x",
        'img': "assets/images/gallery-images/gallery-image-2.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      },
      {
        'id': "13",
        'tagline': "Angular Related-13",
        'title': " Angular Blog",
        'author': "Jet Brains ",
        'icon': "fa fa-user fa-2x",
        'img': "assets/images/gallery-images/gallery-image-2.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      }, {
        'id': "14",
        'tagline': "Angular Related-14",
        'title': " Angular Blog",
        'author': "Jet Brains ",
        'icon': "fa fa-user fa-2x",
        'img': "assets/images/gallery-images/gallery-image-2.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      }, {
        'id': "15",
        'tagline': "Angular Related-15",
        'title': " Angular Blog",
        'author': "Jet Brains ",
        'icon': "fa fa-user fa-2x",
        'img': "assets/images/gallery-images/gallery-image-2.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      }, {
        'id': "16",
        'tagline': "Angular Related-16",
        'title': " Angular Blog",
        'author': "Jet Brains ",
        'icon': "fa fa-user fa-2x",
        'img': "assets/images/gallery-images/gallery-image-2.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      }, {
        'id': "17",
        'tagline': "Angular Related-17",
        'title': " Angular Blog",
        'author': "Jet Brains ",
        'icon': "fa fa-user fa-2x",
        'img': "assets/images/gallery-images/gallery-image-2.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      }, {
        'id': "18",
        'tagline': "Angular Related-18",
        'title': " Angular Blog",
        'author': "Jet Brains ",
        'icon': "fa fa-user fa-2x",
        'img': "assets/images/gallery-images/gallery-image-2.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      }, {
        'id': "19",
        'tagline': "Angular Related-19",
        'title': " Angular Blog",
        'author': "Jet Brains ",
        'icon': "fa fa-user fa-2x",
        'img': "assets/images/gallery-images/gallery-image-2.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      },
      {
        'id': "20",
        'tagline': "Angular Related-20",
        'title': " Angular Blog",
        'author': "Jet Brains ",
        'icon': "fa fa-user fa-2x",
        'img': "assets/images/gallery-images/gallery-image-2.jpg",
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '

      }
    ]
    return {users, posts};
  }

  getToken(users) {
    return "test";
  }

  get(reqInfo: RequestInfo) {
    if (reqInfo.collectionName === 'post') {
      this.getArticles(reqInfo);
    }
    return undefined;
  }

  getArticles(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const dataEncap = reqInfo.utils.getConfig().dataEncapsulation;
      const id = reqInfo.id;
      const collection = reqInfo.collection;
      let posts = id === undefined ? collection : reqInfo.utils.findById(collection, id)
      const options: ResponseOptions = posts ? {
        body: dataEncap ? {posts} : posts,
        status: 200
      } : {
        body: {
          error: 'Post not found',
          status: 404
        }
      }
      return options
    });
  }

  post(reqInfo: RequestInfo) {
    console.log(reqInfo);
    const collectionName = reqInfo.collectionName;
    if (reqInfo.id === 'login') {
      return reqInfo.utils.createResponse$(() => {
        const dataEncap = reqInfo.utils.getConfig().dataEncapsulation;
        const users = reqInfo.collection.find(usr => {
          return reqInfo.req['body'].email === usr.email && reqInfo.req['body'].password === usr.password
        });
        let responseBody = {};
        if (users) {
          responseBody = {
            id: users.id,
            firstName: users.firstName,
            lastname: users.lastname,
            email: users.email,
            password: users.password,
            token: this.getToken(users)
          }
        }

        const options: ResponseOptions = responseBody ? {
          body: dataEncap ? {responseBody} : responseBody,
          status: STATUS.OK
        } : {
          body: {error: `'User' with email='${reqInfo.req['body'].email}' not found`},
          status: STATUS.NOT_FOUND
        };
        options.statusText = options.status === 200 ? 'ok' : "not found";
        options.headers = reqInfo.headers;
        options.url = reqInfo.url;
        return options;
      });
    } else if (reqInfo.id == 'signup') {
      reqInfo.id = null;
    } else {

    }
  }
}
