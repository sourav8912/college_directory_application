main();
function main()
{
    let n=+(prompt("enter the number "));
    let c=0;
    for(let i=1;i<n;i++)
    {
        if(n%i==0)
        {
            c++;
        }
    }
        if(c==2)
        {
            console.log("is a prime");
        }
        else
        {
            console.log("is not a prime");
        }

}