/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ComentarioDto } from '../../models/comentario-dto';

export interface ObtenerComentario$Json$Params {
  id: number;
  libroId: string;
  incluirHATEOAS?: any;
  'x-version': any;
}

export function obtenerComentario$Json(http: HttpClient, rootUrl: string, params: ObtenerComentario$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ComentarioDto>> {
  const rb = new RequestBuilder(rootUrl, obtenerComentario$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('libroId', params.libroId, {});
    rb.header('incluirHATEOAS', params.incluirHATEOAS, {});
    rb.header('x-version', params['x-version'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ComentarioDto>;
    })
  );
}

obtenerComentario$Json.PATH = '/api/v1/libros/{libroId}/comentarios/{id}';
