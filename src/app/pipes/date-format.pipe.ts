import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let date: Date = new Date(String (value).substring(0,4) + '-'
    + String (value).substring(4,6) + '-'
    + String (value).substring(6,8));
    return date.toLocaleString();

  }

}
