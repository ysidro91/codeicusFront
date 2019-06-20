import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor() { }

  setTableInternationalization(matPaginatorIntl:MatPaginatorIntl){
    matPaginatorIntl.previousPageLabel = 'Anterior';
    matPaginatorIntl.firstPageLabel = "Primera página";
    matPaginatorIntl.nextPageLabel = 'Siguiente';
    matPaginatorIntl.lastPageLabel = 'Última página';
    matPaginatorIntl.itemsPerPageLabel = 'Elementos por página';
    matPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => { 
      if (length == 0 || pageSize == 0) { 
        return `0 de ${length}`; 
      } 
      length = Math.max(length, 0); 
      const startIndex = page * pageSize; 
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize; return `${startIndex + 1} - ${endIndex} de ${length}`; 
    };
    return matPaginatorIntl;
  }
  
}
