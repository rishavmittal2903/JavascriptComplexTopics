var obj={
"firstname":"Rishav",
"lastName":"Mittal",
"details":{
"Designation":"SDE",
"Salary":"5000",
"Status":"permanent"
},
"Gender":"Male"

}
var obj1={
"firstname":"Deepanshu",
"lastName":"Mittal",
"details":{
"Designation":"Manager",
"Salary":"50000",
"parents":{
	"parentsName":"Rakesh",
	"mothernName":"Sarita",
	"Age":["64","65"]
}
},
"Gender":"Male",
"MaritalStatus":"Married"

}
mergeTwoObjects(obj,obj1);
function mergeTwoObjects(ob1,ob2)
{
for(var key in ob2)
{
	if(ob2[key].constructor===Object)
	{
		if(!ob1.hasOwnProperty(key))
		{
			ob1[key]={};
		}
		ob1[key]=mergeTwoObjects(ob1[key],ob2[key]);
	}
	else
	{
		ob1[key]=ob2[key];
	}
}
return ob1 	;
}