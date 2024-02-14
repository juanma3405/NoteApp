/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ComentarioDto } from '../../models/comentario-dto';

export interface ObtenerComentariosLibro$Json$Params {
  Pagina?: number;
  RecordsPorPagina?: number;
  libroId: number;
  incluirHATEOAS?: any;
  'x-version': any;
}

export function obtenerComentariosLibro$Json(http: HttpClient, rootUrl: string, params: ObtenerComentariosLibro$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ComentarioDto>>> {
  const rb = new RequestBuilder(rootUrl, obtenerComentariosLibro$Json.PATH, 'get');
  if (params) {
    rb.query('Pagina', params.Pagina, {});
    rb.query('RecordsPorPagina', params.RecordsPorPagina, {});
    rb.path('libroId', params.libroId, {});
    rb.header('incluirHATEOAS', params.incluirHATEOAS, {});
    rb.header('x-version', params['x-version'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ComentarioDto>>;
    })
  );
}

obtenerComentariosLibro$Json.PATH = '/api/v1/libros/{libroId}/comentarios';
