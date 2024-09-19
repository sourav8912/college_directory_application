 main();
 function main()
 {
    let a=+(prompt("enter a starting range"));
    let b=+(prompt("enter a ending range"));
    let c=0;
    let d=1;
    let e;
    for(let i=a;i<=b;i++)
    {
        if (c>=a && c<=b) {
            console.log(c);
            e=c+d;
            c=d;
            d=e;
        }
    }
 }