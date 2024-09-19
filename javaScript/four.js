function main() {
    let y = parseInt(prompt("Enter a value "));
  
    if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)) {
      console.log(`${y} is a leap year`);
    } else {
      console.log(`${y} is not a leap year`);
    }
  }
  
  main();