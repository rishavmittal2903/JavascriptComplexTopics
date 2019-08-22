///vehicle>pulser135>pulser220
//parent class
var vehicle=
{
getDetail:function(...number)
{
console.log(number.join(" "));
}
}
//child
var pulser135=Object.create(vehicle,
{
	model:{value:"pulser135"},
	price:{value:"50000"}
	
});
pulser135.getModelName=function()
{
	this.getDetail("this is ",this.model);
}
pulser135.getPrice=function()
{
	this.getDetail("Price of ",this.model," is RS:",this.price );
}
// inner child
var pulser220=Object.create(pulser135,{model:{value:"pulser220"},price:{value:"80000"}});

pulser220.getAverage=function(average)
{
	this.getDetail("Average of ",this.model," is ",average);
}

pulser220.getModelName();
pulser220.getPrice();
pulser220.getAverage(50);

