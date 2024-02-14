/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AutorDtoConLibros } from '../../models/autor-dto-con-libros';

export interface ObtenerAutorv1$Plain$Params {
  id: number;
  incluirHATEOAS?: any;
  'x-version': any;
}

export function obtenerAutorv1$Plain(http: HttpClient, rootUrl: string, params: ObtenerAutorv1$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AutorDtoConLibros>> {
  const rb = new RequestBuilder(rootUrl, obtenerAutorv1$Plain.PATH, 'get');
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
      return r as StrictHttpResponse<AutorDtoConLibros>;
    })
  );
}

obtenerAutorv1$Plain.PATH = '/api/autores/{id}';
