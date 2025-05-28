import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  transform(value: string | null | undefined, appendText: string): string {
    if (!value) {
      return appendText;
    }
    return value + appendText;
  }
}
