import { Component, OnInit, Input } from '@angular/core';
import { StockPrice } from '../store/mainpanelinit.state';

@Component({
  selector: 'app-sidenavcontent',
  templateUrl: './sidenavcontent.component.html',
  styleUrls: ['./sidenavcontent.component.scss']
})
export class SidenavcontentComponent implements OnInit {
  @Input() allStockData : any;
  @Input() topStockData : any;
  allStockPriceData;
  topStockPriceData;
  chartData: any = [];

  constructor() { }

  ngOnInit(): void {
    const dataArray = [];
    this.topStockPriceData = this.topStockData;
    this.topStockPriceData.forEach((res:any)=>{
      dataArray.push({"x":res.change,"y":res.percentchange,"indexLabel":res.companyName});
    });
    this.chartData = {"plotData": dataArray}
    this.allStockPriceData = this.allStockData; 
  }

}
