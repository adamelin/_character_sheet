import { Component, OnInit } from '@angular/core';
import { DataConnectorService } from '../data-connector.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  public data;

  constructor(
    private dataConnector: DataConnectorService;
  ) { }

  ngOnInit() {
    this.dataConnector.getCL$().subscribe((val) => this.data = val);
  }

}
