import { Injectable, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class MainpanelFacadeService implements OnDestroy{

  topStockPrice$ = this.store.pipe(select('abccorpportal'));

  constructor(private readonly store: Store<any>) { 
  }

  getTopStockPrice(){
    return this.topStockPrice$.subscribe((res: any)=>{
      res.StockPrice;
    })
  }

  getAllStockPrice(){
    return this.topStockPrice$.subscribe((res: any)=>{
      res.AllStockPrice;
    })
  }
  ngDestroy(){
    // unsubscribe logic comes here
  }
}