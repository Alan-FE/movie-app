import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform'
})
export class TextTransformPipe implements PipeTransform {

  transform(value: string): string {

    let transformedText = value.replace(/[^a-zA-Z0-9-_]/g, '-').toLowerCase();
    return transformedText;
    
  };

}
