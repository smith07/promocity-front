import {HttpEvent, HttpHandler, HttpRequest, HttpInterceptor} from "@angular/common/http";
import {Observable} from "rxjs";

export class HttpInterceptorImpl implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("jwt");
    console.log(token);
    if(token){
      const request = req.clone({
        headers: req.headers.set("authorization", token)
      });
      return next.handle(request);
    }else {
      return next.handle(req);
    }

  }

}
