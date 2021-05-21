function convertFahrToCelsius (F) {
    const C = (F - 32)*5/9;
    var n = C.toFixed(4);
    var b = typeof[F]
    var d = typeof{F}
    if ("F") {
        console.log (n);
    } if (d) {
        console.log(F + " is not a valid number but an object");
    } else if (b) {
        console.log(F + " is not a valid number but an array");
    } 
}   
convertFahrToCelsius (0);
convertFahrToCelsius ("0");
convertFahrToCelsius ([1,2,3]);
convertFahrToCelsius ({"temp":0});

function checkYuGiOh (n) {
    let filledArray = new Array ();
    for (let i = 1; i <= n; i++) {
        filledArray[i] = i;
    }
  
    console.log(filledArray);
    return (filledArray);
}

checkYuGiOh(10);