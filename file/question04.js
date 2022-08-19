let num01 = 20;
let num02 = 30;
let avg = (+num01+ +num02)/2;
for (var i = 1 ; i<= avg ; i++){
    let a , b ;
    a = num01 % i;
    b = num02 % i;
    if( a == 0 && b == 0){
        console.log(i);
    }
}
