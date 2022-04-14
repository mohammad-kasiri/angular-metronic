import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()

export class AddHeaderInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //GreenField Req
    let Req : HttpRequest<any> = req.clone({
      // Modify
        setHeaders : {
          'Content-Type' : 'application/json' ,
          'Accept'       : 'application/json' ,
        }
      });

    //Next
    return next.handle(Req)
  }
}