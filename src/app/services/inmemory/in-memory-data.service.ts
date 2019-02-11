import {Injectable} from '@angular/core';
import {InMemoryDbService, RequestInfo, ResponseOptions, STATUS} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    const users = [
      {id: 11, "firstName": "kalai", lastname: "selvan", email: "kalai@gmail.com", password: "pass"},
      {id: 12, "firstName": "kurtis", lastname: "john", email: "kurtis@gmail.com", password: "pass"}
    ]

    return {users};
  }

  getToken(users) {
    return "test";
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
