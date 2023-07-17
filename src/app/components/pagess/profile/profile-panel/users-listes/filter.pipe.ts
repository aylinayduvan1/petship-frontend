import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchName: string): any[] {
    if (!searchName || searchName === '') {
      return value;
    }

    const filteredValue = value.filter((item) =>
      item.user.UserName.toLowerCase().includes(searchName.toLowerCase()) ||
      item.user.user_surname.toLowerCase().includes(searchName.toLowerCase())
    );
    
    return filteredValue;
  }

}
