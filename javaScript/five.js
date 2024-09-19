main();
function main() {
    let s1 = Number(prompt("Enter a the mark"));
    let s2 = Number(prompt("Enter a the mark"));
    let s3 = Number(prompt("Enter a the mark"));
    let s4 = Number(prompt("Enter a the mark"));
    let s5 = Number(prompt("Enter a the mark"));
    if (s1 < 35) {
        console.log(`${s1} is a fail`);
    }
    else {
        console.log(`${s1} is a pass`);
    }
    if (s2 < 35) {
        console.log(`${s2} is a fail`);
    }
    else {
        console.log(`${s2} is a pass`);
    }
    if (s3 < 35) {
        console.log(`${s3} is a fail`);
    }
    else {
        console.log(`${s3} is a pass`);
    }
    if (s4 < 35) {
        console.log(`${s4} is a fail`);
    }
    else {
        console.log(`${s4} is a pass`);
    }
    if (s5 < 35) {
        console.log(`${s5} is a fail`);
    }
    else {
        console.log(`${s5} is a pass`);
    }

    let avg=(s1+s2+s3+s4+s5)/5;

    if(s1>=35 || s2 >=35 || s3>=35 || s4>=35 || s5>=35)
    {
        console.log("Average is =" + avg);
    }
    if(avg>=90)
        {
            console.log("Grade A+");
        }
        if(avg>=80 && avg<90)
            {
                console.log("Grade A");
            }
            if(avg>=70 && avg<80)
                {
                    console.log("Grade B+");
                }
                if(avg>=60 && avg<70)
                    {
                        console.log("Grade C+");
                    }
            if(avg>=50 && avg<60)
                {
                    console.log("Grade C+");
                }
                if(avg>=40 && avg<50)
                    {
                        console.log("Grade C");
                    }
                    if(avg>=35 && avg<40)
                        {
                            console.log("Grade D");
                        }
}