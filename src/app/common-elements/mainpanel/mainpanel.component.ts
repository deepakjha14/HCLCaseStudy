import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainpanelFacadeService }from '../mainpaneldataservice/mainpanel.facade.service';

@Component({
  selector: 'app-mainpanel',
  templateUrl: './mainpanel.component.html',
  styleUrls: ['./mainpanel.component.scss']
})
export class MainpanelComponent implements OnInit {
  allStockData;
  topStockData;

  constructor(private readonly store: Store<any>,
              private facadeService: MainpanelFacadeService
              ) {
   }

  ngOnInit(): void {
    this.facadeService.getAllStockPrice().subscribe((res: any)=>{
      this.allStockData = res.AllStocks;
    });

    this.facadeService.getTopStockPrice().subscribe((res: any)=>{
      this.topStockData = res.StockPrice;
    });
  }

}