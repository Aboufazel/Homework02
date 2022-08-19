let a = prompt("Input the first number", '');
let b = prompt("Input the second number", '');
let c = prompt("Input the third number", '');

if( a+b>c && b+c>a && a+c>b){
    console.log('Yes');
}else {
    console.log('No');
}