/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})

// codigo para ejecutar local
export class ApiConfiguration {
  rootUrl: string = 'https://localhost:7228';
}

//codigo para ejecutar de hosting
/*export class ApiConfiguration {
  rootUrl: string = 'https://www.mynoteapp.somee.com';
}*/

/**
 * Parameters for `ApiModule.forRoot()`
 */
export interface ApiConfigurationParams {
  rootUrl?: string;
}
