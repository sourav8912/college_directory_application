main ();
function main(){
let d1=new Date();
let day=d1.getDay();
console.log(day);
if(day==0)
{
    console.log("sunday");
}
else if(day==1)
    {
        console.log("monday");
    }
else if(day==2)
        {
            console.log("tuesday");
        }
        else if(day==3)
            {
                console.log("wednesday");
            }       
            else if(day==4)
                {
                    console.log("thasday");
                }
                else if(day==5)
                    {
                        console.log("friday");
                    }
                    else if(day==6)
                        {
                            console.log("saterday");
                        }
}