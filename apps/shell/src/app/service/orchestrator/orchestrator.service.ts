import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModuleConfig } from './module-config';

@Injectable({
  providedIn: 'root',
})
export class OrchestratorService {
  constructor(private httpClient: HttpClient) {}

  getConfig(): Promise<ModuleConfig[]> {
    return this.httpClient
      .get<ModuleConfig[]>('http://localhost:3333/api')
      .toPromise();
  }
}
