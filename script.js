var slider1 = document.getElementById("myRange1");
var slider2 = document.getElementById("myRange2");


// var output1 = document.getElementById("slider1Val");
// var output2 = document.getElementById("slider2Val");

var output1 = document.getElementById("monthRange");
var output2 = document.getElementById("view");

output1.innerHTML = slider1.value;
slider1.oninput = function () {
    output1.innerHTML = this.value;
    output1.value = this.value;
}

output2.innerHTML = slider2.value;
slider2.oninput = function () {
    output2.innerHTML = this.value;
    output2.value = this.value;
}