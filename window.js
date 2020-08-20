var name = "kuddus";
function add(num1 , num2){
    window.result = num1 + num2; // willingly declare global variable
    console.log('name result inside ',name,result);
    function double(num){
        return num*2;
    }
    var total = double(result);
    return total;
}
console.log('name outside ',name);
var sum = add(13,21);
console.log(sum);