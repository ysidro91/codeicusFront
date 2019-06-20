import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modified'
})
export class ModifiedPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value ? `Editada el ${ value }` : 'Esta tarea no esta editada';
  }

}
