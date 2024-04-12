import { Pipe, PipeTransform } from '@angular/core';
import { TIME_OF_THE_DAY } from 'src/app/pages/customer-area/timetable/time-of-the-day';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    return TIME_OF_THE_DAY.find(({time}) => (time === value))?.label || '';
  }

}
