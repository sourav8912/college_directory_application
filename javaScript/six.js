main();
        function main(){
            let b=0;
            let c;
            let n=Number(prompt("enter units"));
            if(n<=200)console.log("Free!!!!");
            else{
            let a=n-200;
            if(a>0&&a<=50){
                h=a*3;
            console.log(`bill is ${h}`);
            }
            else if(a>50){
             b=50*3;
                c=a-50;
            }
            if(c>0&&c<=50){c=c*5;
                let g=b+c;
                console.log(`bill is ${g}`);
            }
           else if(c>50){
                let d=50*5;
                f=c-50;
                let e=f*7;
                b=b+d+e;
                console.log(`bill is ${b}`);
            }
        }
        }
