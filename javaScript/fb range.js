main();
function main()
{
let a=+(prompt("enter the a value"));
let b=+(prompt("enter the b value"));
let m=+(prompt("enter the range"));
for(let i=1;i<=m;i++)
{
  let c=a+b;
  console.log(a);
  a=b;
  b=c;  
}
}