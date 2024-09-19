main();
function main()
 {
  
   let month=Number(prompt("enter month"));
   
   let year= Number(prompt("enter the year"));
   
   switch(month)
   {
    case 1:
        case 3:
            case 5:
                case 7:
                    case 8:
                        case 10:
                            case 12:
                                console.log("31 days");
                                break;
                                case 4:
                                    case 6:
                                        case 9:
                                            case 11:
                                                console.log("30 days");
                                                break;
                                                case 2:
                                                    if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)) {
                                                        console.log("29 days");
                                                    }
                                                    else{
                                                        console.log("28 days");
                                                    }
                                                    break;
                                                    default:
                                                        console.log("invalid input");

   } 
}