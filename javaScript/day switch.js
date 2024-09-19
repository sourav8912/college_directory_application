main();
function main(){
    let d1=new Date();
    let day=d1.getDay();
    let msg="today is";
    switch(day){
        case 0:
            msg ="sunday";
            break;

            case 1:
                msg ="monday";
                break; 

         case 2:
            msg ="tuesday";
            break; 

        case 3:
            msg ="wednesday";
            break; 

         case 4:
                msg ="thuesday";
                break; 
                
           case 5:
                    msg ="friday";
                    break; 
            case 6:
                        msg ="saterday";
                        break;

                        default:
                            msg="invalid";            
    }
    console.log(msg);
}