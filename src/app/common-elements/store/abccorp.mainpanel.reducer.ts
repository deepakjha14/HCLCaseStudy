import { Action, createReducer, on } from '@ngrx/store';
import * as MainPanelActions from './abccorp.mainpanel.actions';

import { State } from './mainpanelinit.state';
import { StockPrice, AllStocks} from './mainpanelinit.state';

export const initialState: State = {
    StockPrice: [new StockPrice("Motilal",10,10,10),new StockPrice("TCS",20,20,20), new StockPrice("Wipro",30,30,30), new StockPrice("HCL",40,40,40), new StockPrice("Infy",50,50,50)],
    AllStocks: [new AllStocks("Motilal",10,10,10,10),new AllStocks("TCS",20,20,20,10), new AllStocks("Wipro",30,30,30,10), new AllStocks("HCL",40,40,40,10), new AllStocks("Infy",50,50,50,10)],
  };

export const mainpanelFeatureKey = 'abccorpportal';

const abccorpmainpanelReducer = createReducer(
    initialState,
    on(MainPanelActions.loadPrice, state => ({ ...state})),
    on(MainPanelActions.loadGraph, state => ({ ...state}))
  );
  
  export function reducer(state: State | undefined, action: Action) {
    return abccorpmainpanelReducer(state, action);
  }