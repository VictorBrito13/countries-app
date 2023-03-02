import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatLargeNumbers'
})
export class FormatLargeNumbersPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const numberString = value.toString().split('')

    for(let i = numberString.length; i >= 0; i-=3){
      numberString.splice(i, 0, ',')
    }
    numberString.pop()
    if(numberString[0] === ',') numberString.shift()

    return numberString.join('');
  }

}
