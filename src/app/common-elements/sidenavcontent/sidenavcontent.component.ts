import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.allStockPriceData = this.allStockData;
    this.topStockPriceData = this.topStockData;
  }

}
