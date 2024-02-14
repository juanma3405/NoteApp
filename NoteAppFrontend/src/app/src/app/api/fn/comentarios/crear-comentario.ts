/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ComentarioCreacionDto } from '../../models/comentario-creacion-dto';

export interface CrearComentario$Params {
  libroId: number;
  'x-version': any;
      body?: ComentarioCreacionDto
}

export function crearComentario(http: HttpClient, rootUrl: string, params: CrearComentario$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, crearComentario.PATH, 'post');
  if (params) {
    rb.path('libroId', params.libroId, {});
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

crearComentario.PATH = '/api/v1/libros/{libroId}/comentarios';
