import { Component, OnInit } from '@angular/core';
import { DataConnectorService } from '../data-connector.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap, catchError } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  private isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(
    private dataConnector: DataConnectorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.isLoading$.getValue())
    this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<any> => {
        return this.dataConnector.openCL$(params.get('id'));
      }),
      catchError((err) => {
        this.isLoading$.next(false);
        throw(err);
      })
    ).subscribe((data) => {
      console.log(data);
      this.isLoading$.next(false);
    });
  }

}
