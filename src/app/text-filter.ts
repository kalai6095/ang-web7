import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'textFilter'})
export class TextFilter implements PipeTransform {
  transform(value: string, arr_length: number): any {
    return value.substr(0, arr_length);
  }

}
