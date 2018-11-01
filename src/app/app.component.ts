import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'characterSheet';

  private testData: Subject<string> = new Subject();

  private test(): void {
    this.title = 'PNH GITLER KAPUT';
  }

  constructor() {
    setTimeout(() => this.testData.next('hello i am data'), 2000);
  }

}
