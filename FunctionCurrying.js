/*Function currying example 1*/

function sum(func,a,b)
{
console.log("Example 1:"+func(a,b));
}

function add(a,b)
{
return a+b;
}

sum(add,10,20);

/*Function currying example 2*/
function sum1(a)
{
return function (b)
{
console.log("Example 2:"+(a+b));
}
}
sum1(10)(20);

/*Function currying example 3 with infinite parameters*/
function sum2(a)
{
return function (b)
{
	if(b==undefined || b==null)
	{
		return a;
	}
return sum2(a+b);
}
}
console.log("Example 3:"+sum2(10)(20)(30)(40)());