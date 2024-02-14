/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AutorDto } from '../../models/autor-dto';

export interface ObtenerAutoresv1$Json$Params {
  Pagina?: number;
  RecordsPorPagina?: number;
  incluirHATEOAS?: any;
  'x-version': any;
}

export function obtenerAutoresv1$Json(http: HttpClient, rootUrl: string, params: ObtenerAutoresv1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AutorDto>>> {
  const rb = new RequestBuilder(rootUrl, obtenerAutoresv1$Json.PATH, 'get');
  if (params) {
    rb.query('Pagina', params.Pagina, {});
    rb.query('RecordsPorPagina', params.RecordsPorPagina, {});
    rb.header('incluirHATEOAS', params.incluirHATEOAS, {});
    rb.header('x-version', params['x-version'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AutorDto>>;
    })
  );
}

obtenerAutoresv1$Json.PATH = '/api/autores';
