/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AutorCreacionDto } from '../../models/autor-creacion-dto';

export interface ActualizarAutorv1$Params {
  id: number;
  'x-version': any;
      body?: AutorCreacionDto
}

export function actualizarAutorv1(http: HttpClient, rootUrl: string, params: ActualizarAutorv1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, actualizarAutorv1.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.header('x-version', params['x-version'], {});
    rb.body(params.body, 'application/*+json');
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

actualizarAutorv1.PATH = '/api/autores/{id}';
