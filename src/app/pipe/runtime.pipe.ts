import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runtime'
})
export class RuntimePipe implements PipeTransform {

  transform(value: number): string {
    let totalTimeInMinutes: number = value;
    let hour: number = Math.floor(totalTimeInMinutes / 60);
    let minutes: number = totalTimeInMinutes - (hour * 60);
    let runtime: string = hour + 'hr ' + minutes + 'min';

    if(totalTimeInMinutes < 60) {
      runtime = minutes + 'min';
    };

    if(minutes === 0) {
      runtime = hour + 'hr';
    };

    return runtime;
  }

}
