/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LibroCreacionDto } from '../../models/libro-creacion-dto';

export interface CrearLibro$Params {
  'x-version': any;
      body?: LibroCreacionDto
}

export function crearLibro(http: HttpClient, rootUrl: string, params: CrearLibro$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, crearLibro.PATH, 'post');
  if (params) {
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

crearLibro.PATH = '/api/v1/libros';
