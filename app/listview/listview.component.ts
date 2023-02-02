import { Component, OnInit } from '@angular/core';
import { CarsdataService } from '../appservice.service';
@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css'],
})
export class ListviewComponent implements OnInit {
  public cardata = [];
  displayedColumns: string[] = ['carname', 'carmodel', 'type', 'vvin', 'vrm'];

  constructor(private _data: CarsdataService) {}

  ngOnInit() {
    this.cardata = this._data.Cars;
    console.log(this.cardata);
  }
}
