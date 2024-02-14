/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AutorDto } from '../../models/autor-dto';

export interface ObtenerAutorPorNombrev1$Json$Params {
  nombre: string;
  incluirHATEOAS?: any;
  'x-version': any;
}

export function obtenerAutorPorNombrev1$Json(http: HttpClient, rootUrl: string, params: ObtenerAutorPorNombrev1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AutorDto>>> {
  const rb = new RequestBuilder(rootUrl, obtenerAutorPorNombrev1$Json.PATH, 'get');
  if (params) {
    rb.path('nombre', params.nombre, {});
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

obtenerAutorPorNombrev1$Json.PATH = '/api/autores/{nombre}';
