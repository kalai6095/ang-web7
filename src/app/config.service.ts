import {Injectable} from '@angular/core';
import {configuration} from "./configuration";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  app_config = configuration;

  constructor() {
  }

  getConfigInfo() {
    return this.app_config;
  }
}
