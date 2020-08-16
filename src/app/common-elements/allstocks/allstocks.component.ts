import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { StockPrice } from '../interfaces/stockprice.interface';

@Component({
  selector: 'app-allstocks',
  templateUrl: './allstocks.component.html',
  styleUrls: ['./allstocks.component.scss']
})
export class AllstocksComponent implements OnInit {

  @Input() allStockData;
  dataSource;
  displayedColumns: string[] = ['companyName', 'ltp', 'percentchange', 'change'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.allStockData);
    this.dataSource.sort = this.sort;
  }
}
