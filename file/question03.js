let num = 125;
let a;
for(var i = 1 ; i < num; i++){
        if (num % 10 == 0){
                break;
        }
        num = num / 10;
}
console.log(i);
