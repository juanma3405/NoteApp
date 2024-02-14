/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface BorrarAutorv1$Params {

/**
 * Id del autor a borrar
 */
  id: number;
  'x-version': any;
}

export function borrarAutorv1(http: HttpClient, rootUrl: string, params: BorrarAutorv1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, borrarAutorv1.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
    rb.header('x-version', params['x-version'], {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

borrarAutorv1.PATH = '/api/autores/{id}';
