

export interface State {
    StockPrice: StockPrice[];
    AllStocks: AllStocks[];
    
  }

export class StockPrice{
    companyName: string;
    ltp: number;
    percentchange: number;
    change: number;
    constructor(companyName, ltp, percentchange, change){
        this.companyName = companyName,
        this.ltp = ltp,
        this.percentchange = percentchange,
        this.change = change

    }
}

export class AllStocks{
    companyName: string;
    ltp: number;
    percentchange: number;
    change: number;
    volume: number;
    constructor(companyName, ltp, percentchange, change, volume){
        this.companyName = companyName;
        this.ltp = ltp;
        this.percentchange = percentchange;
        this.change = change;
        this.volume = volume;

    }
}