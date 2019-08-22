const engine=(value)=>({

getEngineDetail:()=>
{

console.log("The engine detail is as follows "+value.detail);
}
});
const price=(value)=>({

getPrice:()=>
{
console.log("Price of pulser135 is "+value.price);
}
});

const average=(value)=>({

getAverage:()=>
{
console.log("The average of pulser220 is "+value.average);
}
});
const twoWhealler=(value)=>({

getInsurance:()=>
{
console.log("The insurance price is "+value.insurancePrice);
}
});
const fourWhealler=(value)=>({

getCoverage:()=>
{
console.log("The average of pulser220 is "+value.coveragePrice);
}
});

var Activa=function(engineDetail,priceAmount,avg,incprice,coverage)
{
	let data={
		detail:engineDetail,
		price:priceAmount,
		average:avg,
		insurancePrice:incprice,
		insuranceCoverage:coverage
	}
	return Object.assign({},engine(data),price(data),average(data),twoWhealler(data));
}
var activa=new Activa("2 stroke engine","50000","18","1000","500"); 
activa.getEngineDetail();activa.getPrice();activa.getAverage();activa.getInsurance();
console.log("-----------------------------------------------------");
var Scorpio=function(engineDetail,priceAmount,avg,incprice,coverage)
{
	let data={
		detail:engineDetail,
		price:priceAmount,
		average:avg,
		insurancePrice:incprice,
		insuranceCoverage:coverage
	}
	return Object.assign({},engine(data),price(data),average(data),fourWhealler(data));
}
var scorpio=new Scorpio("1100 cc engine","500000","18","10000","250000");
scorpio.getEngineDetail();scorpio.getPrice();scorpio.getAverage();scorpio.getCoverage();