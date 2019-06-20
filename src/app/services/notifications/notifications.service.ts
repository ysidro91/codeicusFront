import { Injectable } from '@angular/core';

declare var toastr:any;

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() {
    toastr.options = {
      "positionClass": "toast-bottom-left"
    };
  }

  showInfoMessage (message:string) {
    toastr.info(message);
  }

  showSuccessMessage (message:string) {
    toastr.success(message);
  }

  showWarningMessage (message:string) {
    toastr.warning(message);
  }

  showErrorMessage (message:string) {
    toastr.error(message);
  }

  removeImmediately(){
    toastr.remove();
  }
}
