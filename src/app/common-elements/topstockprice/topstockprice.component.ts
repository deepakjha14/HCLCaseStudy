import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { StockPrice } from '../interfaces/stockprice.interface';


@Component({
  selector: 'app-topstockprice',
  templateUrl: './topstockprice.component.html',
  styleUrls: ['./topstockprice.component.scss']
})

export class TopstockpriceComponent implements OnInit {
  @Input() topStockData;
  dataSource;
  displayedColumns: string[] = ['companyName', 'ltp', 'percentchange', 'change'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.topStockData);
    this.dataSource.sort = this.sort;
  }
}
