import { Pipe, PipeTransform } from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string, gender?: string): string {

    if(gender.toLowerCase() == 'male')
    return 'Mr. ' +value;
    else
    return 'Miss. ' +value;
  }

}
