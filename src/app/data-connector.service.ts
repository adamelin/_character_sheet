import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataConnectorService {
  
  private characterList$: Subject<any> = new Subject();

  public openCL(clId: string): Observable<any> {
    setTimeout(() => this.characterList$.next(clId), 500);
    return this.characterList$;
  }
  
  public getCL$(): Observable<any> {
    return this.characterList$;
  }

  constructor() { }
}
