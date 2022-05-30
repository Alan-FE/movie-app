import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(array: any[], noActors: number): any[] {

    if(array.length == 0 || array.length < noActors) {
      return array;
    };
    
    let limitArray: any [] = [];

    for(let i = 0; i < noActors; i++) {
      limitArray.push(array[i]);
    };

    return limitArray;
  };

}
