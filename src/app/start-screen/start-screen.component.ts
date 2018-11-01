import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { DataConnectorService } from "../data-connector.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-start-screen",
  templateUrl: "./start-screen.component.html",
  styleUrls: ["./start-screen.component.css"]
})
export class StartScreenComponent implements OnInit {

  public searchForm: FormControl;

  constructor(
    private dataConnector: DataConnectorService,
    private router: Router
  ) {}

  public ngOnInit() {
    this.searchForm = new FormControl('');
  }

  public search(): void {
    this.dataConnector.openCL(this.searchForm.value);
    this.router.navigate(['character-list']);
  }
}
