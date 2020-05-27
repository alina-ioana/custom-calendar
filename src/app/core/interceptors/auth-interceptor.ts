import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import StorageHelper from "../helpers/storage.helper";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
  ) { }

  intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {

    let newHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json/text/plain')
      .set('Cache-Control', 'no-cache')
      .set('Pragma', 'no-cache');
    const body = JSON.parse(JSON.stringify(req.body));

    if (StorageHelper.getToken()) {
      newHeaders = newHeaders.set('Authorization', StorageHelper.getToken());
    }

    const copiedReq = req.clone({ headers: newHeaders, body: JSON.stringify(body)});
    return next.handle(copiedReq);
  }
}
