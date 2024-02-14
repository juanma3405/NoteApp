/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DatoHateoas } from '../../models/dato-hateoas';

export interface ObtenerRoot$Json$Params {
  incluirHATEOAS?: any;
  'x-version': any;
}

export function obtenerRoot$Json(http: HttpClient, rootUrl: string, params: ObtenerRoot$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DatoHateoas>>> {
  const rb = new RequestBuilder(rootUrl, obtenerRoot$Json.PATH, 'get');
  if (params) {
    rb.header('incluirHATEOAS', params.incluirHATEOAS, {});
    rb.header('x-version', params['x-version'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<DatoHateoas>>;
    })
  );
}

obtenerRoot$Json.PATH = '/api/v1';
