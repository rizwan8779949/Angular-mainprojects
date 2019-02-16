import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value,arg) 
  {
    if(arg)
    {
      var arr=[];
      for(let i=0;i<arg;i++)
      {
          arr.push(value[i])
      }
      return arr;
    }
    else
    {
    return value;
    }
  }

}
