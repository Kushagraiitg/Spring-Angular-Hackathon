
export class Stock {
    constructor(){
        this.id=0;
        this.stockTicker="";
        this.price=0;
        this.volume=0;
        this.buyOrSell="";
        this.statusCode=0;
        this.date="";
        this.totalPrice=0;
        this.currentPrice=0;
    }
    id: number;
    stockTicker: string;
    price: number;
    volume: number;
    buyOrSell: string;
    statusCode: number;
    date: string;
    totalPrice:number;
    currentPrice:number;
}

// id: 1,
// stockTicker: "APPL",
// price: 1000,
// volume: 120,
// buyOrSell: "buy",
// statusCode: 1,
// date: "2021-08-16 16:39:31"