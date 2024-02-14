/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CredencialesUsuario } from '../../models/credenciales-usuario';
import { RespuestaAutenticacion } from '../../models/respuesta-autenticacion';

export interface RegistrarUsuario$Json$Params {
  'x-version': any;
      body?: CredencialesUsuario
}

export function registrarUsuario$Json(http: HttpClient, rootUrl: string, params: RegistrarUsuario$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<RespuestaAutenticacion>> {
  const rb = new RequestBuilder(rootUrl, registrarUsuario$Json.PATH, 'post');
  if (params) {
    rb.header('x-version', params['x-version'], {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RespuestaAutenticacion>;
    })
  );
}

registrarUsuario$Json.PATH = '/api/v1/cuentas/registrar';
