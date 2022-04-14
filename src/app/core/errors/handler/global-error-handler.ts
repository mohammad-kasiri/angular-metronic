import {ErrorHandler} from "@angular/core";

export class GlobalErrorHandler implements ErrorHandler {
  handleError(error : Error) {
    // @ts-ignore
    Swal.fire({
      icon: 'error',
      title: 'عملیات ناموفّق',
      text: 'درخواست انجام نشد.',
      //footer: '<a href="">Why do I have this issue?</a>'
    })
  }
}
