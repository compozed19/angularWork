import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr',
  pure :false
})
export class ReverseStrPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let newStr : string ="";

    for(var i=value.length-1 ; i>=0; i--){
      newStr +=value.charAt(i);
    }
    return newStr;
  }

}
