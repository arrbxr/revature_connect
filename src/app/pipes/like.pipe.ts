import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'like'
})
export class LikePipe implements PipeTransform {

  transform(values: any): string {
    console.log(values)
    return values.likes == 0 ? 'text-primary' : 'text-success';
  }

}
