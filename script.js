let display_ans = document.getElementById('answer');

function show(digit){
    display_ans.value += digit;

}
function calc(){
    display_ans.value =eval(display_ans.value);
}
function cancel(){
    display_ans.value = display_ans.value.slice(0,-18);
}
function remove(){
    display_ans.value = display_ans.value.slice(0,-1);
}
