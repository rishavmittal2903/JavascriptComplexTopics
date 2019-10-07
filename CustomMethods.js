let state={
firstName:"Rishav",
lastName:"Mittal"
}

let getFullName=function(designation,state,pincode)
{
console.log( "My name is "+this.firstName+ " "+this.lastName+" and  designation is "+designation+" state "+state+","+pincode);
}

Function.prototype.customBind=function(...args)
{
let that=this;
params=args.slice(1);
return function(...args2)
{
that.apply(args[0],[...params, ...args2]);
}
}

var test=getFullName.customBind(state,"SDE","PUNJAB");
test("148101");