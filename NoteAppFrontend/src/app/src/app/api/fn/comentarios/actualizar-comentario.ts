/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ComentarioCreacionDto } from '../../models/comentario-creacion-dto';

export interface ActualizarComentario$Params {
  libroId: number;
  id: number;
  'x-version': any;
      body?: ComentarioCreacionDto
}

export function actualizarComentario(http: HttpClient, rootUrl: string, params: ActualizarComentario$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, actualizarComentario.PATH, 'put');
  if (params) {
    rb.path('libroId', params.libroId, {});
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

actualizarComentario.PATH = '/api/v1/libros/{libroId}/comentarios/{id}';
