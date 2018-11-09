import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataConnectorService {

  private characterList$: Subject<any> = new Subject();


  public openCL$(clId: string): Subject<any> {
    setTimeout(() => this.characterList$.next(clId), 2000);
    return this.characterList$;
  }

  public getCL$(): Subject<any> {
    return this.characterList$;
  }

  constructor() { }
}
