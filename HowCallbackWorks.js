var obj={
 firstName:"Rishav",
 lastName:"Mittal",
 dateOfBirth:"19940401",
getFullName:function()
{
return "My name is "+ this.firstName+this.lastName;
},
calculateAge:function(func1,func2)
{
	if(this.dateOfBirth!==null && this.dateOfBirth !== undefined)
	{
		var dob=this.dateOfBirth;
		var year = Number(dob.substr(0, 4));
		var month = Number(dob.substr(4, 2)) - 1;
		var day = Number(dob.substr(6, 2));
		var today = new Date();
		var age = today.getFullYear() - year;
		if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
		age--;
		}
		func1.call(obj.calculateAge,age);
	}
	else
	{
		func2.call(obj.calculateAge,"Value is undefined or null.");
	}
}
}

var obj1={
 firstName:"Deepanshu",
 lastName:"Mittal",
 dateOfBirth:"19940402"
}
let success=(age)=>
{
	console.log("Your age is :"+age);
}
let failure=(err)=>
{
	console.log("Error occured due to this :"+err);
}
obj.calculateAge.call(obj1,success,failure);

