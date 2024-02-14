/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LibroDtoConAutores } from '../../models/libro-dto-con-autores';

export interface ObtenerLibro$Json$Params {
  id: number;
  incluirHATEOAS?: any;
  'x-version': any;
}

export function obtenerLibro$Json(http: HttpClient, rootUrl: string, params: ObtenerLibro$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<LibroDtoConAutores>> {
  const rb = new RequestBuilder(rootUrl, obtenerLibro$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.header('incluirHATEOAS', params.incluirHATEOAS, {});
    rb.header('x-version', params['x-version'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<LibroDtoConAutores>;
    })
  );
}

obtenerLibro$Json.PATH = '/api/v1/libros/{id}';
