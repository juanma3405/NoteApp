/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LibroDtoConAutores } from '../../models/libro-dto-con-autores';

export interface ObtenerLibro$Plain$Params {
  id: number;
  incluirHATEOAS?: any;
  'x-version': any;
}

export function obtenerLibro$Plain(http: HttpClient, rootUrl: string, params: ObtenerLibro$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<LibroDtoConAutores>> {
  const rb = new RequestBuilder(rootUrl, obtenerLibro$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.header('incluirHATEOAS', params.incluirHATEOAS, {});
    rb.header('x-version', params['x-version'], {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<LibroDtoConAutores>;
    })
  );
}

obtenerLibro$Plain.PATH = '/api/v1/libros/{id}';
