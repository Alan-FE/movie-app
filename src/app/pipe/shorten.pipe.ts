import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length > 14) {
      return value.substring(0, 14) + '...';
    };
    return value;
  };

}