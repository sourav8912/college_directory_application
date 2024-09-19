main();
function main()
{
let a=+(prompt("enter a  number"));
let b=+(prompt("enter b number"));
let n=+(prompt("enter the n value"));
for(let i=0;i<=n;i++)
{
    let c=a+b;
    console.log(a);
    a=b;
    b=c;
}
}