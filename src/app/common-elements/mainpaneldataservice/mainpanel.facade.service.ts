import { Injectable, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainpanelFacadeService implements OnDestroy{

  topStockPrice$ = this.store.pipe(select('abccorpportal'));

  constructor(private readonly store: Store<any>) { 
  }

  getTopStockPrice() : Observable<any>{
    return this.topStockPrice$;
  }

  getAllStockPrice() : Observable<any>{
    return this.topStockPrice$;
  }
  ngOnDestroy(){
    // unsubscribe logic comes here
  }
}